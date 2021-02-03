import { exec } from "child_process";
import express from "express";
import bodyParser from "body-parser";
import cmd from "node-cmd";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.json({ message: "Youa are welcome" });
});

app.post("/commandrun", (req, res) => {
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
  cmd.get(req.body.command, function (data: object) {
    res.send({
      code: "200",
      result: data,
    });
  });
});
app.listen(5000);
