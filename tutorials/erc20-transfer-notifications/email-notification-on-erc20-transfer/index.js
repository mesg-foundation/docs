const mesg = require('mesg-js').application()

// Listen for the event.
mesg.listenEvent({
  serviceID: 'service-ethereum-erc20-tuto', // The serviceID of the ERC20 service deployed
  eventFilter: 'transfer' // The event we want to listen
})
  .on('data', (event) => {
    const transfer = JSON.parse(event.eventData)

    console.log('New ERC20 transfer received. will send an email. Transaction hash:', transfer.transactionHash)

    // Execute task.
    mesg.executeTask({
      serviceID: 'send-email-with-sendgrid-tuto', // The serviceID of the service to send emails
      taskKey: 'send', // The task we want to execute
      inputData: JSON.stringify({ // The input data that task needs
        apiKey: '__SENDGRID_API_KEY__',
        from: 'test@erc20notification.com',
        to: '__REPLACE_WITH_YOUR_EMAIL__',
        subject: 'New ERC20 transfer',
        text: `Transfer from ${transfer.from} to ${transfer.to} of ${transfer.value} tokens -> ${transfer.transactionHash}`
      })
    }).catch((err) => {
      console.error(err.message)
    })
  })
  .on('error', (err) => {
    console.error(err.message)
  })

console.log('Listening ERC20 transfer...')