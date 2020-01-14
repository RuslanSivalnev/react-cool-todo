import React,{useReducer} from "react";
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import axios from 'axios';

const url = process.env.REACT_APP_DB_URL;


export const FirebaseState = ({children}) => {
	const initState = {
		notes: [],
		loading: false
	};

	const [state, dispatch] = useReducer(firebaseReducer, initState);


	return(
		<FirebaseContext.Provider value={{

		}}>
			{children}
		</FirebaseContext.Provider>
	)
}
