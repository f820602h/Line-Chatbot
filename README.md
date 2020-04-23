# Line-Chatbot
[![npm](https://badge.fury.io/js/%40line%2Fbot-sdk.svg)](https://www.npmjs.com/package/linebot)
## Introduction
---
a LINE Chatbot for learning purposes.<br>
develop by Node.js and deploy automatically to Heroku.

## Requirements
---
* **Node.js** 8 or higher<br>
* [LINE Developers Account](https://developers.line.biz/en/)<br>
* [New Heroku App](www.heroku.com)

## Preparation
---
create a new channel on LINE developers dashboard.<br>
open webhook options and input your heroku domains on channel's Messaging API settings.<br>

get your channel private info.
* Channel ID 
* Channel secret
* Channel access token

you should create config vars in your Heroku App for these private data. <br>


## Deployment 
---
connect github repository to heroku, and set Automatic deploys.<br>
as such, you can deploy when you push code to github every time.

## Ues
---
Scan your linebot QR code or search LINE Official Account by linebot ID.<br>You can share with others.