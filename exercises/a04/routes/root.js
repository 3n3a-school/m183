'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const data = request.session.get('data')
    console.log(request.session)
    if (!data) {
      reply.view("root")
    }
    reply.view("loggedin")
  })

  fastify.get('/logout', (request, reply) => {
    request.session.delete()
    reply.redirect(302, "/")
  })
}
