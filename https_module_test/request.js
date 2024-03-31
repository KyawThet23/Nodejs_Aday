function encrypt(data)
{
  return 'encrypted data';
}

module.exports.send(url, data)
{
  const encryptedData = encrypt(data);
  console.log(`Sending ${encryptedData} to ${url}`);
}