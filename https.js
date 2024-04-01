const {send,read} = require('./https_module_test')

function makeRequest(url,data)
{
  send(url, data);
  return read();
}

