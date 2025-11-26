const color = require("ansi-colors");
function hello(name){
    console.log(color.green(name)+'님 안녕하세요 ');
}
hello('준혁');
console.log(__filename);
console.log(__dirname);