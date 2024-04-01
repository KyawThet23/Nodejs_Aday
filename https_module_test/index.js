// index.js ဟာ folder ကို module တစ်ခုအဖြစ် node ရဲ့ 
// require function က သုံးလို့ရအောင်လုပ်ပေးတာ

const request = require('./request');
const response = require('./response');

module.exports = {
  send: request.send,
  read: response.read
}