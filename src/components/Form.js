import React, {useState, useContext} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Form = () => {
	const alert = useContext(AlertContext);
	const firebase = useContext(FirebaseContext);

	const [value, setValue] = useState('');


	const submitHandler = event => {
		event.preventDefault();
		if (value.trim()) {
			firebase.addNote(value.trim())
				.then(() => {
					alert.show('Note has been created', 'success')
				})
				.catch(()=>{
					alert.show('Name for note is not correct', 'danger')
				});
			setValue('');
		} else {
			alert.show('Name for note is not correct')
		}
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<input type="text"
							 className="form-control"
							 value={value}
							 onChange={e => setValue(e.target.value)}
							 placeholder="Text value"
				/>

			</div>
		</form>
	)
}
