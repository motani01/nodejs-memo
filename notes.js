console.log("notes.js可動");

const fs = require("fs");

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync("notes-date.json");
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

let saveNotes = notes => {
    fs.writeFileSync("notes-date.json", JSON.stringify(notes));
};

let addNote = (title, body) => {
    console.log("メモ追加", title, body);
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicatedNoeds = notes.filter(note => note.title === title);
    if (duplicatedNoeds.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log("duplicatedNoeds");
    }
};

let showAll = () => {
    console.log("メモ一覧");
    let notes = fetchNotes();
    return notes;
};

let readNote = (title) => {
    console.log("個別メモ表示", title);
    let notes = fetchNotes();
    let matchTitle = notes.filter(note => note.title === title);
    return matchTitle[0];
};

let removeNote = (title) => {
    console.log("個別メモ削除", title);
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length
};

let logNotes = note => {
    console.log("保存されました。");
    console.log(`タイトル：${note.title}`);
    console.log(`内容：${note.body}`);
    console.log("------------------");
};

module.exports = {
    addNote,
    showAll,
    readNote,
    removeNote,
    logNotes
};
