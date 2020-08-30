
//import Navbar from './components/Navbar';
//import Links from './components/Links';
//import GoogleLogin from 'react-google-login';
import SignInSide from './components/SignInSide';
import React, { useState, useEffect } from 'react'
import {HashRouter, Switch, Route} from "react-router-dom"
import UserContext from "./context/UserContext"
import Home from "./components/Home"
import Launch from "./components/Launch"

/*
function App() {
  return (
    <div className="App">
      <Navbar />
      <Links />
      
    </div>
  );
}
*/

function App(){
  const [userData, setUserData] = useState({
		token: undefined,
		user: undefined,
  });
  
  useEffect(() =>{
	  /*
		const checkLoggedIn = async () =>{
			let token = localStorage.getItem("auth-token");
			
			// first time visiting site, if no token set, then will not verify anything and use empty strings
			if(token === null) {
				localStorage.setItem("auth-token", "");
				token = "";
			}
			

		};

		checkLoggedIn();
		*/
	}, []);
	
  return(

		 <HashRouter>
			 <div>
		 <UserContext.Provider value = {{userData, setUserData}}>
		 	<Switch>
		 		<Route exact path ="/" component={Home} />
		 		<Route exact path ="/SignInSide" component={SignInSide} />
				<Route exact path ="/Launch" component={Launch} />
	
		 	</Switch>
		 	</UserContext.Provider>
			 </div>
		 </HashRouter>
  )
}
export default App;
