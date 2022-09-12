import { h, Component } from 'preact';
import style from './style.css';

import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import zxcvbnCommonPackage from '@zxcvbn-ts/language-common'
import zxcvbnEnPackage from '@zxcvbn-ts/language-en'

import JSONPretty from 'react-json-pretty';

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
	}
  
	onInput = e => {
	  const { value } = e.target;
	  const strength = zxcvbn(value);
	  const hash = this.calcHash(value);
	  this.setState({ value, strength })
	}
  
	calcHash = async password => {
		// eslint-disable-next-line no-undef
		const h = await argon2.hash({ pass: password, salt: `th1s155alt1${password}` })
		console.log(h)
		this.setState({ hash: h })
	}

	render(_, { value, strength, hash }) {
	  return (
		<div class={style.twocols}>
			<form onSubmit={this.onSubmit} class={style.login}>
			<div class={style.field}>
				<label for="password">Passwort</label>
				<input id="password" type="search" autoComplete='off' value={value} onInput={this.onInput} />
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
			</form>
			<JSONPretty class={style.login} id="json-pretty" data={strength} />
			<JSONPretty class={style.login} id="json-pretty" data={hash} />
		</div>
	  );
	}
  }
  

export default LoginForm;
