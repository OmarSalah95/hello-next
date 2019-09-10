

const Note = props => {
    return (
      <div
        onClick={event => {
            props.noteObject.isCompleted = !props.noteObject.isCompleted
            props.noteObject.isCompleted 
                ? event.target.className = "done" 
                : event.target.className =""
        }}
      >
        <span >
            {props.noteObject.note}
        </span>
        <br />
        {props.noteObject.isCompleted}
      </div>
    );
}

export default Note

