var linebot = require('linebot');

var bot = linebot({
  channelId: '1654109290',
  channelSecret: 'a0fc0a55df12e8747cc797e0527d1278',
  channelAccessToken: 'OjeXQrwNjOZu5xUFLHyAhZIFkVtR2Zq/EH3W9I3l+604whqY45XwIiY3MS4bqGXksMjf6q2zGu4HUUQNydvpT6GAvp0UwCdOSa/vCHLyKZqvzTO6RhUWiyFNAbJlIYbDF5pGo+WEyfwbs2VLDQUfIwdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(event.message.text).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});