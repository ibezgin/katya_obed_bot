import express from "express";
import bodyParser from "body-parser"
// import * as packageInfo from "../../package.json"

const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json({ version: "1.0.0.0" });
});

var server = app.listen(process.env.PORT, "0.0.0.0", () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Web server started at http://%s:%s', host, port);
});

export function web(bot) {
    app.post('/' + bot.token, (req, res) => {
        bot.processUpdate(req.body);
        res.sendStatus(200);
    });
};

