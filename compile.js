const fs = require('fs');
const path = require('path');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'UTF-8');
const inboxObjectFromCompiledCode = solc.compile(source, 1).contracts[':Inbox'];

module.exports = inboxObjectFromCompiledCode;
