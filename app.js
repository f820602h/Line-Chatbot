var linebot = require('linebot');

var bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  event.reply(event.message.text).then(function (data) {
    console.log(event.message.text)
  }).catch(function (error) {
    console.log(error)
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/', process.env.PORT || 5000, function () {
  console.log('BOT已準備就緒');
});