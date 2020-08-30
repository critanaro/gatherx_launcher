import React, {useState} from "react"
import Axios from "axios"



export default function Links(){

//const [error, setError] = useState();
const submit = async (e) => {
	
		e.preventDefault();
		try{
			await Axios.post("http://localhost:5000/users/launch");
	  
  		}catch(err){
	  		console.log(err);
		  }
		}
	return(
		<div>
			<button class="button_med" onClick={submit}>
				Launch
			</button>
		</div>
		)
}