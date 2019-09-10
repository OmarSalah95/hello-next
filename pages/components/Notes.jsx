// import React from 'react'
//https://fe-notes.herokuapp.com/note/get/all
import Note from './Note.jsx';


const Notes = props => {
    return (
        <>
            {props.notes ? props.notes.map(noteObject => (
                <Note key={noteObject.index} noteObject={noteObject} />
            )) : null}
        </>
    );
}

export default Notes
