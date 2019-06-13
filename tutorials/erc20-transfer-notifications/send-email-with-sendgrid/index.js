const mesg = require('mesg-js').service()

mesg.listenTask({
  send: require('./tasks/send')
})
  .on('error', (error) => console.error(error))
