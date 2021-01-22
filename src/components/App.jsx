import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes.js";

console.log(Notes);

function App(){
    return(
    <div>
    <Header />
    {Notes.map(noteInfo => (<Note key={noteInfo.key} title={noteInfo.title} content={noteInfo.content}/>))}
    <Footer />
    </div>);
}

export default App;