import React,{useState} from 'react';
import Head from 'next/head';

import Notes from "./components/Notes.jsx";
import Form from "./components/Form.jsx";
import './styles/index.scss';



const Index = () => {
  
  const [notes, setNotes] = useState([{ note: "Finish this app.", isComplete: false }, { note: "Git Commit", isComplete: false }, { note: "Git push", isComplete: false }, { note: "Git High", isComplete: false }])
  
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <link rel="shortcut icon" href="../static/favicon.ico" />
      </Head>

      <section className="app">
        <h1>Next.js To-Do App!</h1>
        <Notes notes={notes}/>
        <Form  setNotes={(newNote)=> setNotes([...notes, {note:newNote, isCompete: false}])} />
      </section>
    </>
  )
}





export default Index;

