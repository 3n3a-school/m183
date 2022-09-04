# Keylogger

> A keylogger is a piece of software which captures user-input, traditionally keystrokes, but also mouse clicks and so on. This information is subsequently sent to a malicious backend server.

## Creating the Code

I started with the example snippet from the Exercise page. Afterwards I started by implementing a function `logInput` which sends the request to the backend.
Then I thought, how about I send any key that a user ever typed on that page, not just the value of an input field. So I researched how to capture keypresses from a page's root. The answer
is an event listener on `document` for `keyup`. You might ask _Why keyup?_, well **keyup** always gets triggered after any other thing on the site has consumed the 
_keypress_ or _keydown_ events. Meaning _keyup_ won't interfere with these.

## Finished Result

On the final webpage on can press any key on the site, or input anything into the search field. And it will be sent to the server every half a second. 

[View the result here](https://3n3a-school.github.io/m183/exercises/a01/)
