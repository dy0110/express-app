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
    //index.ejsのレンダリング  
    res.render('index.ejs',{
        title:'Index',
        content:msg,
        link:{href:'/other',text:'*Otherページに移動'}
    });
});

//ルーティングを設定する(otherページ)
app.get(    "/other"    ,   (req,res)   =>  {
    var msg = "This is Other Page!<br>" + "これはotherページです。";
    //otherページのレンダリング
    res.render('index.ejs',{
        title:'Other',
        content:msg,
        link:{href:'/',text:'*トップへ戻る'}
    });
});

//ポートの設定
var server = app.listen( 3000,   ()  =>  {
    console.log('Start server port:3000')
})