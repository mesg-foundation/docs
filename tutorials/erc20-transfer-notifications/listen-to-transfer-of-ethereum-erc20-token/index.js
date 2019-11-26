const Service = require('@mesg/service')
const mesg = new Service()
const Web3 = require('web3')
const web3 = new Web3(process.env.PROVIDER_ENDPOINT)
const contract = new web3.eth.Contract(require('./erc20-abi.json'), '0xe41d2489571d322189246dafa5ebde1f4699f498')

contract.events.Transfer({fromBlock: 'latest'})
  .on('data', (event) => {
    console.log('New ERC20 transfer received with hash:', event.transactionHash)
    mesg.emitEvent('transfer', {
      blockNumber: event.blockNumber,
      transactionHash: event.transactionHash,
      from: event.returnValues.from,
      to: event.returnValues.to,
      value: event.returnValues.value,
      contractAddress: event.address,
    })
  })
  .on('error', (err) => {
    console.error(err)
  })

console.log('Listening ERC20 transfer...')