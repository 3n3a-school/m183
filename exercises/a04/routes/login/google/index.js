'use strict'

function encodeJSON(body) {
    return Buffer.from(JSON.stringify(body)).toString("base64")
}

module.exports = async function (fastify, opts) {

  fastify.get('/callback', async function(request, reply) {
    const token = await this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request)

    request.session.set('data', encodeJSON(token))

    reply.redirect(302, '/example')
  })
}
