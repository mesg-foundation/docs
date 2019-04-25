const mesg = require('mesg-js').service()

mesg.listenTask({
  send: require('./tasks/send')
})
  .on('error', (err) => {
    console.error(err)
  })

console.log('Listening tasks...')
