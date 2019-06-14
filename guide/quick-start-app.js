const mesg = require('mesg-js').application()

// Listen events
mesg.listenEvent({
  serviceID: 'emit-event-interval',
  eventFilter: 'every_10_seconds'
})
  .on('data', async (event) => {
    console.log('event received')

    try {
      // Get the balance
      const balanceResult = await mesg.executeTaskAndWaitResult({
        serviceID: 'ethereum-erc20',
        taskKey: 'balanceOf',
        inputData: JSON.stringify({
          contractAddress: '0x420167d87d35c3a249b32ef6225872fbd9ab85d2',
          address: '0xe17ee7b3c676701c66b395a35f0df4c2276a344e',
        })
      })
      if (balanceResult.error) {
        console.error('an error occurred while getting the balance', balanceResult.error)
        return
      }
      const balanceData = JSON.parse(balanceResult.outputData)
      console.log('balance is', balanceData.balance)

      // Call the webhook
      const requestResult = await mesg.executeTaskAndWaitResult({
        serviceID: 'webhook',
        taskKey: 'call',
        inputData: JSON.stringify({
          url: 'https://webhook.site/d6ee62f4-5af9-4485-8222-cebb763ae232',
          data: balanceData,
        })
      })
      if (requestResult.error) {
        console.error('an error occurred while calling the webhook', requestResult.error)
        return
      }
      const requestData = JSON.parse(requestResult.outputData)
      console.log('request status is', requestData.status)
    } catch (error) {
      console.error('an error occurred', error.message)
    }
  })
  .on('error', (error) => {
    console.error('an error occurred while listening the events', error.message)
  })

console.log('application is running and listening for events')
