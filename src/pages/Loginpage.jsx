import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/globalContext";
import {reducerTypes, jwt } from "../reducers/globalReducer";
const Loginpage = () =>{
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { state: globalState, dispatch: globalDispatch } = useGlobalContext();
   async function onSubmit()  {
    const payload = {
      "email": username,
      "password": password
    }
    const headers ={
          "Content-Type": "application/json",
          "Accept": "application/json" 
    }
    try {
     const url = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${url}/api/v1/auth/signin`, payload,{
       headers : headers 
      });
      console.log(response, "Success response in router");
      globalDispatch({
        type: reducerTypes.SET_JWT,
        payloadGlobal: {
          jwt: response.data.token,
        },
      });
      sessionStorage.setItem('userAccessToken', JSON.stringify(response.data.token)); 
      navigate('/Cdkconsole');
  
    } 
    catch (error) {
      console.error("Error fetching data from server:", error);
    }
     
    }
    return(
        <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl text-black font-light mb-10 text-center">
             Login
        </h1>
        <div className="glass p-8 shadow-lg rounded-md w-full md:w-[80%] lg:w-[60%] xl:w-[40%] consolecolor">
          <div className="flex flex-col">
            <div className="flex items-center mb-8 space-x-4">
              <label className="block text-black mr-4 w-1/4">Username</label>
              <input
                type="text"
                placeholder="type your username"
                className="input input-round input-field"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-4 space-x-4" >
              <label className="block text-black mr-4 w-1/4">Password</label>
              <input
                type="password"
                placeholder="type your password"
                className="input input-round input-field"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-around button-container">
                <div>
                    <button type="submit" className="btn btn-primary" onClick={() => onSubmit()} >Submit</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Loginpage;