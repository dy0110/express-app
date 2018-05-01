//Expressオブジェクトのロード
var express = require('express')
//Expressオブジェクトからアプリケーションオブジェクトを作製
var app = express()

//ルーティングを設定する
app.get(    '/' ,   (req,res)   =>  {   //function(req,res){....}と同じ
//表示するテキストを設定    
res.send('Welcome to Express!') 
})

//ポートの設定
app.listen( 3000,   ()  =>  {
    console.log('Start server port:3000')
})