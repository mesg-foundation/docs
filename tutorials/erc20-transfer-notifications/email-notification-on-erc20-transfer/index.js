const mesg = require('mesg-js').application()

async function main() {
  // Listen for the event.
  mesg.listenEvent({
    filter: {
      instanceHash: await mesg.resolve('ethereum-erc20'), // The serviceID of the ERC20 service deployed
      key: 'transfer' // The event we want to listen
    }
  })
    .on('data', async (event) => {
      const transfer = JSON.parse(event.data)

      if (transfer.contractAddress.toLowerCase() !== '0xe41d2489571d322189246dafa5ebde1f4699f498') {
        return
      }
      console.log('New ERC20 transfer received. Transaction hash:', transfer.transactionHash)
      // Execute task.
      console.log('Will send email...')
      try {
        const result = await mesg.executeTaskAndWaitResult({
          instanceHash: await mesg.resolve('email-sendgrid'), // The serviceID of the service to send emails
          taskKey: 'send', // The task we want to execute
          inputs: JSON.stringify({ // The input data that task needs
            from: 'test@erc20notification.com',
            to: '__REPLACE_WITH_YOUR_EMAIL__',
            subject: 'New ERC20 transfer',
            text: `Transfer from ${transfer.from} to ${transfer.to} of ${transfer.value} tokens -> ${transfer.transactionHash}`
          })
        })
        if (result.error) {
          console.error('error during email sent', result.error)
          return
        }
        console.log('task send return status', JSON.parse(result.outputs).status)
      } catch (err) {
        console.error(err.message)
      }

    })
    .on('error', (err) => {
      console.error(err.message)
    })

  console.log('Listening ERC20 transfer...')
}

main()