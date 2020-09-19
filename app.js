console.log("app 起動!!");

const fs = require("fs");

const notes = require("./notes.js");

const yargs = require("yargs");
const argv = yargs.argv;

//console.log(process.argv);
// let command = process.argv[2];
let command = argv._[0];
// console.log("コマンド:", command);

//console.log("process", process.argv);
//console.log("yargs", argv);

if (command == "add") {
    //console.log("メモを追加します");
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNotes(note);
    } else {
        console.log("タイトルが重複しています。");
    }
} else if (command == "list") {
    // console.log("メモを一覧表示します");
    let allNotes = notes.showAll();
    allNotes.forEach(note => notes.logNotes(note));
} else if (command == "read") {
    // console.log("メモを個別表示します");
    let note = notes.readNote(argv.title);
    if (note) {
        notes.logNotes(note);
    } else {
        console.log("タイトルがありません。");
    }

} else if (command == "remove") {
    // console.log("メモを削除します");
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? "削除されました" : "見つかりませんでした";
    console.log(message);

}
