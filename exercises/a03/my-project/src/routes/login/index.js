import { h, Component } from 'preact';
import style from './style.css';

import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import zxcvbnEnPackage from '@zxcvbn-ts/language-en'

import JSONPretty from 'react-json-pretty';

import CryptoJS from 'crypto-js';

const options = {
  translations: zxcvbnEnPackage.translations,
  graphs: zxcvbnCommonPackage.adjacencyGraphs,
  dictionary: {
    ...zxcvbnCommonPackage.dictionary,
    ...zxcvbnEnPackage.dictionary,
  },
}

zxcvbnOptions.setOptions(options)

class LoginForm extends Component {
	state = { value: '', strength: {}, hash: {} };
  
	onSubmit = e => {
	  e.preventDefault();
          this.calcHash(this.state.value);
	}
  
	onInput = e => {
	  const { value } = e.target;
	  const strength = zxcvbn(value);
	  
	  this.setState({ value, strength })
	}
  
	calcHash = async password => {
		const salt = CryptoJS.lib.WordArray.random(256 / 8);
		const hashSalt = CryptoJS.enc.Hex.stringify(salt);
		// eslint-disable-next-line no-undef
		argon2.hash(
			{ 
				pass: password, 
				salt: hashSalt,
				time: 11,
				mem: 4096
			}
		)
			.then((h) => {
				console.log(h)
				this.setState({ hash: h })
			})
			.catch((e) => {
				console.error(e)
				alert(e)
			})
	}

        verifyHash = async () => {
          // eslint-disable-next-line no-undef
          argon2.verify({ pass: this.state.value, encoded: this.state.hash.encoded })
            .then(() => {
              alert('Hash Verification Passed ✅')
              console.log('OK')
            })
            .catch(e => {
              alert(`${e.code}: ${e.message}`)
              console.error(e.message, e.code)
            })
        }
	render(_, { value, strength, hash }) {
	  return (
		<div class={style.twocols}>
			<form onSubmit={this.onSubmit} class={style.login}>
			<div class={style.field}>
				<label for="password">Passwort</label>
				<input id="password" type="search" autoComplete='off' minLength={12} value={value} onChange={this.onInput} />
				<meter value={strength.score} max="4"> {strength.score}/4 </meter> 
				{
					strength.feedback &&
					<>
						<p class={style.warning}>{strength.feedback.warning}</p>
						<p class={style.help}>{strength.feedback.suggestions}</p>
					</>
				}
                                { hash.encoded && <p>Hash: {hash.encoded}</p> }
			</div>
			<button type="submit">Submit</button>
                        <button onClick={this.verifyHash}>Verify Hash</button>
			</form>
			<JSONPretty class={style.login} id="json-pretty" data={strength} />
			<JSONPretty class={style.login} id="json-pretty" data={hash} />
		</div>
	  );
	}
  }
  

export default LoginForm;
