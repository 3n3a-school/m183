'use strict'

const path = require('path')
const fs = require('fs')
const AutoLoad = require('@fastify/autoload')
const oauthPlugin = require('@fastify/oauth2')
const viewPlugin = require("@fastify/view")
const nunjucks = require("nunjucks")
const secureSession = require('@fastify/secure-session')
require('dotenv').config()

module.exports.options = {}

module.exports = async function (fastify, opts) {

  fastify.register(viewPlugin, {
    engine: {
      nunjucks: nunjucks
    },
    root: path.join(__dirname, "templates"),
  })

  fastify.register(secureSession, {
    cookieName: 'GODLY_SESSION_ID',
    key: fs.readFileSync(path.join(__dirname, 'secret-key')),
    cookie: {
      path: '/'
      // options for setCookie, see https://github.com/fastify/fastify-cookie
    }
  })

  fastify.register(oauthPlugin, {
    name: 'googleOAuth2',
    scope: ['profile'],
    credentials: {
      client: {
        id: process.env["GOOGLE_OAUTH_ID"],
        secret: process.env["GOOGLE_OAUTH_SECRET"],
      },
      auth: oauthPlugin.default.GOOGLE_CONFIGURATION
    },
    startRedirectPath: '/login/google',
    callbackUri: 'http://localhost:3000/login/google/callback'
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
