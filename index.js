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

//bodyparserのロード
var bodyParser = require('body-parser');
//urlencodedメソッドの実行(URLエンコードされたbodyを返す)
app.use(
    bodyParser.urlencoded(
        //querystringを使用してエンコード
        {extended:false}
    )
);

//ルーティングを設定する(トップページ)
app.get(    '/' ,   (req,res)   =>  {   //function(req,res){....}と同じ
    
    var msg = "This is Index Page!<br>"    +   "＊メッセージを書いて送信して下さい。";
    //index.ejsのレンダリング  
    res.render('index.ejs',{
        title:'Index',
        content:msg
    });
});

//ルーティングを設定する(POSTの処理)
app.post(    "/"    ,   (req,res)   =>  {
    //送信メッセージの取り出し
    var input_msg = req.body.message;
    //メッセージの設定
    var msg = "This is Posted Page!<br>" + "あなたは「<b>" + input_msg + "</b>」と送信しました。";
    //otherページのレンダリング
    res.render('index.ejs',{
        title:'Posted',
        content:msg
    });
});

//ポートの設定
var server = app.listen( 3000,   ()  =>  {
    console.log('Start server port:3000')
})