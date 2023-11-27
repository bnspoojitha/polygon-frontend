import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Loginpage = () =>{
    const navigate = useNavigate();
    function onSubmit()  {
        navigate('/Cdkconsole');

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
                // value={deploymentValue}
                // onChange={(e)=>setDeplpoymentValue(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-4 space-x-4" >
              <label className="block text-black mr-4 w-1/4">Password</label>
              <input
                type="password"
                placeholder="type your password"
                className="input input-round input-field"
                // value={paymentValue}
                // onChange={(e)=>setPaymentValue(e.target.value)}
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