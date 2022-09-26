'use strict'

function decodeJSON(body) {
  return JSON.parse(Buffer.from(body, 'base64').toString("ascii"))
}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    let data = request.session.get('data')
    if (!data) {
      reply.code(404).send()
      return
    }
    data = decodeJSON(data)
    return `Token: ${JSON.stringify(data)}`
  })
}
