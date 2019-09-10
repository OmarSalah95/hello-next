import {useState} from "react";

const Form = props => {
    const [userInput, setUserInput] = useState("")

    return (
        <>
            <form onSubmit={event => {event.preventDefault(); props.setNotes(userInput); setUserInput('')}} >
                <input 
                    type="text"
                    name="note"
                    placeholder="Enter Note"
                    value={userInput}
                    onChange={event=> setUserInput(event.target.value)}
                />
            </form>
        </>
    );
};
export default Form;

