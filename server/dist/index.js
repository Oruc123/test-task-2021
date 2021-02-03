"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var node_cmd_1 = __importDefault(require("node-cmd"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.get("/", function (req, res) {
    res.json({ message: "Youa are welcome" });
});
app.post("/commandrun", function (req, res) {
    console.log("command req", req.body.command);
    // exec(req.body.command, (error, stdout, stderr) => {
    //     if (error) {
    //       console.error(`error: ${error.message}`);
    //       return res.json({
    //           code: 200,
    //           result: error
    //       })
    //     }
    //     if (stderr) {
    //       console.error(`stderr: ${stderr}`);
    //       return res.json({
    //         code: 200,
    //         result: stderr
    //     });
    //     }
    //     console.log(`stdout:\n${stdout}`);
    //     return res.json({
    //         code: 200,
    //         result: stdout
    //     });
    //   });
    node_cmd_1.default.get(req.body.command, function (data) {
        res.send({
            code: "200",
            result: data,
        });
    });
});
app.listen(5000);
//# sourceMappingURL=index.js.map