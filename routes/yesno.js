var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
    // 接続テスト用にログを出力
    console.log('YesNo APIへのリクエストを受け付けました');

    request('https://yesno.wtf/api', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            try {
                const data = JSON.parse(body);
                res.json(data);
            } catch (e) {
                console.error('JSONの解析に失敗しました:', e);
                res.status(500).send('データ解析エラー');
            }
        } else {
            console.error('APIリクエストエラー:', error);
            res.status(500).send('APIへの接続に失敗しました');
        }
    });
});

module.exports = router;























