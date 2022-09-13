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
	state = { value: '', strength: {}, hash: {}, isSubmitDisabled: true };

	onSubmit = e => {
		e.preventDefault();
		this.calcHash(this.state.value);
	}

	onInput = e => {
		const { value } = e.target;
		const strength = zxcvbn(value);

		let isSubmitDisabled = true
		if (value.length >= 12) {
			isSubmitDisabled = false
		}

		this.setState({ value, strength, isSubmitDisabled })
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
		if (!this.state.value || !this.state.hash.hasOwnProperty('encoded')) return
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

	render(_, { value, strength, hash, isSubmitDisabled }) {
		return (
			<div class={style.twocols}>
				<div>
					<form onSubmit={this.onSubmit} class={style.login}>
						<div class={style.field}>
							<label for="password">Passwort</label>
							<input id="password" type="search" autoComplete='off' minLength={12} value={value} onChange={this.onInput} />
							<meter value={strength.score} max="4"> {strength.score}/4 </meter>
							{
								(strength.feedback && value) &&
								<>
									<p class={style.warning}>{strength.feedback.warning}</p>
									<p class={style.help}>{strength.feedback.suggestions}</p>
								</>
							}
						</div>
						{(hash.encoded && value) && <p class={style.hashResult}>Hash: {hash.encoded}</p>}
						<button class={style.button} disabled={isSubmitDisabled} type="submit">Submit</button>
					</form>
					<div class={style.login}>
						<button class={style.button} onClick={this.verifyHash}>Verify Hash</button>
					</div>
				</div>
				<details class={style.debugging}>
					<summary>
						Debugging Output
					</summary>
					<JSONPretty class={style.login} id="json-pretty" data={strength} />
					<JSONPretty class={style.login} id="json-pretty" data={hash} />
				</details>
			</div>
		);
	}
}


export default LoginForm;
