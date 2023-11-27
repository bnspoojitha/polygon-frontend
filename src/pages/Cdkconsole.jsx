import React, {useState} from "react";
import axios from "axios";
import "../styles/Cdkconsole.css";
const Cdkconsole = () => {
console.log("Cdk Console page")
    const [deploymentValue, setDeplpoymentValue] = useState("");
    const [paymentValue, setPaymentValue] = useState("");
    const onBlock = async (event) => {
        event.preventDefault();
        console.log("Clicked Blocked");
        const payload = {
          deployment: deploymentValue,
          payment: paymentValue,
        };
        try {
        const response = await axios.post(`http://34.87.215.204:80/ssh/connect`, { 
                headers: {
                    "Content-Type": "application/json",
                },
                body: payload,
        });
        if (response.status === 200) {
            const res = response.data;
            console.log(res,"response")
          }
        } catch (error) {
          console.log(error, "error");
        } finally {
            setDeplpoymentValue("");
            setPaymentValue("");
        }
      };
    const onUnBlock = async (event) =>{
        event.preventDefault();
        console.log("Clicked UnBlocked");
        const payload = {
          deployment: deploymentValue,
          payment: paymentValue,
        };
        try {
        const response = await axios.post(`/ssh/connect`, { 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
        });
        if (response.status === 200) {
            const res = response.data;
            console.log(res,"response")
          }
        } catch (error) {
          console.log(error, "error");
        } finally {
            setDeplpoymentValue("");
            setPaymentValue("");
        };

    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl text-black font-light mb-10 text-center">
          Deployment Console
        </h1>
        <div className="glass p-8 shadow-lg rounded-md w-full md:w-[80%] lg:w-[60%] xl:w-[40%] consolecolor">
          <form className="flex flex-col">
            <div className="flex items-center mb-8 space-x-4">
              <label className="block text-black mr-4 w-1/4">Deployment</label>
              <input
                type="text"
                placeholder="Deployment"
                className="input input-round input-field"
                value={deploymentValue}
                onChange={(e)=>setDeplpoymentValue(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-4 space-x-4" >
              <label className="block text-black mr-4 w-1/4">Payment</label>
              <input
                type="text"
                placeholder="Payment"
                className="input input-round input-field"
                value={paymentValue}
                onChange={(e)=>setPaymentValue(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-around button-container">
                <div>
                    <button type="submit" className="btn btn-primary" onClick={(event) => onBlock(event)} >Block</button>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary"  onClick={(event)=>onUnBlock(event)} >UnBlock</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    );
};
export default Cdkconsole;