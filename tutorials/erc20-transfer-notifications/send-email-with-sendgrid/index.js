const Service = require('@mesg/service')
const mesg = new Service()

mesg.listenTask({
  send: require('./tasks/send')
})
  .on('error', (error) => console.error(error))
