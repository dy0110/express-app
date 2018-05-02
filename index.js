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

//ルーティングを設定する(トップページ)
app.get(    '/' ,   (req,res)   =>  {   //function(req,res){....}と同じ
    
    var msg = "This is Express-app Top Page!<br>"    +   "これはトップページです。";
    //パラメーターの設定
    var url = '/other?name=taro&pass=yamada';
    //index.ejsのレンダリング  
    res.render('index.ejs',{
        title:'Index',
        content:msg,
        link:{href:url,text:'パラメーター送信'}
    });
});

//ルーティングを設定する(otherページ)
app.get(    "/other"    ,   (req,res)   =>  {
    //パラメーターの取り出し
    var name = req.query.name;
    var pass = req.query.pass;
    //メッセージの設定
    var msg = "あなたは「" + name +"」<br>パスワードは「" + pass + "」です。";
    //otherページのレンダリング
    res.render('index.ejs',{
        title:'Other',
        content:msg,
        link:{href:'/',text:'＊トップへ戻る'}
    });
});

//ポートの設定
var server = app.listen( 3000,   ()  =>  {
    console.log('Start server port:3000')
})