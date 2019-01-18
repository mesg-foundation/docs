const MESG = require('mesg-js').application()

// Listen for the event.
MESG.listenEvent({
  serviceID: '__ERC20_SERVICE_ID__', // The serviceID of the ERC20 service deployed
  eventFilter: 'transfer' // The event we want to listen
})
  .on('data', (event) => {
    const transfer = JSON.parse(event.eventData)

    console.log('New ERC20 transfer received. will send an email. Transaction hash:', transfer.transactionHash)

    // Execute task.
    MESG.executeTask({
      serviceID: '__SENDGRID_SERVICE_ID__', // The serviceID of the service to send emails
      taskKey: 'send', // The task we want to execute
      inputData: JSON.stringify({ // The input data that task needs
        apiKey: '__SENDGRID_API_KEY__',
        from: 'test@erc20notification.com',
        to: '__REPLACE_WITH_YOUR_EMAIL__',
        subject: 'New ERC20 transfer',
        text: `Transfer from ${transfer.from} to ${transfer.to} of ${transfer.value} tokens -> ${transfer.transactionHash}`
      })
    }).catch((err) => console.log(err.message))
  })
  .on('error', (err) => console.log(err.message))

console.log('Listening ERC20 transfer...')