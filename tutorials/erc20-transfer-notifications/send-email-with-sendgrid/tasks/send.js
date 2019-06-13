const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = async (inputs) => {
  console.log('New send task received')
  // Sends an email with the inputs
  const result = await sendgrid.send({
    from: inputs.from,
    to: inputs.to,
    subject: inputs.subject,
    text: inputs.text
  })
  // Return the success output
  return {
    status: result[0].statusCode
  }
}
