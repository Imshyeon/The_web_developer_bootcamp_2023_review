const figlet = require('figlet')
const colors = require("colors")
figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.green);
  });

  // npm init 을 통해서 패키지.json 생성 후, npm i figlet, npm i colors 진행

  // git 같은 곳에 다른사람이 올린 파일을 실행시키고 있다면 npm i를 치면 된다.