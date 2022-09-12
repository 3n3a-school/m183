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
	state = { value: '', strength: {} };
  
	onSubmit = e => {
	  e.preventDefault();
	}
  
	onInput = e => {
	  const { value } = e.target;
	  const strength = zxcvbn(value);
	  this.setState({ value, strength })
	}
  
	render(_, { value, strength }) {
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
			</div>
			<button type="submit">Submit</button>
			</form>
			<JSONPretty class={style.login} id="json-pretty" data={strength} />
		</div>
	  );
	}
  }
  

export default LoginForm;
