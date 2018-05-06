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

//テーブルのデータ
var data = {
    'Taro':'taro@yamada',
    'Hanako':'hanako@flower',
    'Sachiko':'sachiko@happy',
    'Ichiro':'ichiro@baseball'
}

//ルーティングを設定する(トップページ)
app.get(    '/' ,   (req,res)   =>  {   //function(req,res){....}と同じ
    
    var msg = "This is Index Page!<br>";
    //index.ejsのレンダリング  
    res.render('index.ejs',{
        title:'Index',
        content:msg,
        data:data
    });
});

//ポートの設定
var server = app.listen( 3000,   ()  =>  {
    console.log('Start server port:3000')
})