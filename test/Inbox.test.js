const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');

const web3 = new Web3(ganache.provider());

let fetchedAccounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  fetchedAccounts = await web3.eth.getAccounts();
  // Use one of those accounts
  // to deploy a contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hi There!'],
    })
    .send({ from: fetchedAccounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    // console.log(inbox.options.address);
    assert.ok(inbox.options.address);
  });
});
