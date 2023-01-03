import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const LoginPage = () => {
  /* const [username, setUsername] = useState(''); */
  /* const [password, setPassword] = useState(''); */
  /* const [error, setError] = useState(''); */

  useEffect(() => {
    async function fetchLogin() {
      const response = await fetch("http://localhost:5000/set-cookies", {
        method: "GET",
        credentials: "include",
      })
      console.log(response)
    }
    fetchLogin()
  }, [])

  return (
    <h1>Hello</h1>
  )

  /* const handleSubmit = (event) => { */
  /*   event.preventDefault(); */
  /**/
  /*   if (username === '' || password === '') { */
  /*     setError('Please enter a username and password'); */
  /*     return; */
  /*   } */
  /**/
  /*   // Send a request to the server to authenticate the user */
  /*   authenticate(username, password) */
  /*     .then(() => { */
  /*       // If the authentication is successful, redirect the user */
  /*       navigateToHomepage(); */
  /*     }) */
  /*     .catch((error) => { */
  /*       setError('There was an error logging in. Please try again.'); */
  /*     }); */
  /* }; */
  /* return ( */
  /*   <> */
  /*     <div className="text-center lg:text-left"> */
  /*       <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */
  /*         <div className="card-body"> */
  /*           <div className="form-control"> */
  /*             <label className="label"> */
  /*               <span className="label-text">Email</span> */
  /*             </label> */
  /*             <input type="text" placeholder="email" className="input input-bordered" /> */
  /*           </div> */
  /*           <div className="form-control"> */
  /*             <label className="label"> */
  /*               <span className="label-text">Password</span> */
  /*             </label> */
  /*             <input type="text" placeholder="password" className="input input-bordered" /> */
  /*             <label className="label"> */
  /*               <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */
  /*             </label> */
  /*           </div> */
  /*           <div className="form-control mt-6"> */
  /*             <button className="btn btn-primary">Login</button> */
  /*           </div> */
  /*         </div> */
  /*       </div> */
  /*     </div> */
  /*   </> */
  /* ) */

  /* return ( */
  /*   <form onSubmit={handleSubmit}> */
  /*     <label htmlFor="username">Username</label> */
  /*     <input */
  /*       type="text" */
  /*       id="username" */
  /*       value={username} */
  /*       onChange={(event) => setUsername(event.target.value)} */
  /*     /> */
  /*     <label htmlFor="password">Password</label> */
  /*     <input */
  /*       type="password" */
  /*       id="password" */
  /*       value={password} */
  /*       onChange={(event) => setPassword(event.target.value)} */
  /*     /> */
  /*     {error && <p>{error}</p>} */
  /*     <button type="submit">Log in</button> */
  /*   </form> */
  /* ); */
};

export default LoginPage;
