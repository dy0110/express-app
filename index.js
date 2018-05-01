//Expressオブジェクトのロード
var express = require('express')
//EJSのロード
var ejs = require("ejs")
//Expressオブジェクトからアプリケーションオブジェクトを作製
var app = express()

//EJSのテンプレートエンジンの設定
app.engine('ejs',ejs.renderFile)

//publicフォルダのスタイルシートの読み込み
app.use(express.static('public'));

//ルーティングを設定する
app.get(    '/' ,   (req,res)   =>  {   //function(req,res){....}と同じ
    
    var msg = "This is Express-app Top Page!<br>"    +   "スタイルシートを利用";
    //index.ejsのレンダリング  
    res.render('index.ejs',{
        title:'Index'   ,
            content:msg
    });
});

//ポートの設定
var server = app.listen( 3000,   ()  =>  {
    console.log('Start server port:3000')
})