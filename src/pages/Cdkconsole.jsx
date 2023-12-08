import React, {useState, useEffect} from "react";
import axios from "axios";
import "../styles/Cdkconsole.css";
import TopNavbar from "../components/TopNavBar/topnavbar.jsx";
import BlockedAddressesList from "../components/Blockedaddresses/blockedAddresslist.jsx";
import { useGlobalContext } from "../context/globalContext";
import { useNavigate } from "react-router-dom";
import {reducerTypes, jwt } from "../reducers/globalReducer";

const Cdkconsole = () => {
  
    const [deploymentValue, setDeplpoymentValue] = useState("");
    const [paymentValue, setPaymentValue] = useState("");
    const [blockedList, setBlockedList] = useState();
    const { state: globalState } = useGlobalContext();
    const navigate = useNavigate();

    const fetchData = async () => {
      const  userAccessToken = sessionStorage.getItem('userAccessToken');
        let headers ={
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization" :  `Bearer ${JSON.parse(userAccessToken)}` 
        }
        try {
          const response = await fetch(
            `http://localhost:8080/api/v1/polygon/address`,
            {
              method: "GET",
              headers: headers,
            }
          );
          console.log("Request Headers:", headers);
          const data = await response.json();

          console.log(data,"fetch api ressponse");
          setBlockedList(data);
          console.log(blockedList, "blocked list in fetch")
        } catch (error) {
          console.error("Error fetching data from server:", error);
        }
      };
    useEffect(() => {
      const  userAccessToken = sessionStorage.getItem('userAccessToken');
      const token = JSON.parse(userAccessToken);
      if(!token){
        navigate('/');
      }
      else {
        fetchData(); 
      }
      console.log(blockedList, "outside Fetch api");
    }, []);

    const onBlock = async (event) => {
      event.preventDefault();
      const payload = deploymentValue !== "" ? { address: deploymentValue } : { address: paymentValue };
      try {
        const  userAccessToken = sessionStorage.getItem('userAccessToken');
        let headers ={
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization" :  `Bearer ${JSON.parse(userAccessToken)}` 
        }
        const response = await axios.post(`http://localhost:8080/api/v1/polygon/address?block=true`, payload,{
          headers: headers,
        });
        fetchData(); 
        console.log(response, "response for blocked address");
        
      } catch (error) {
        console.log(error, "error");
      } finally {
        setDeplpoymentValue("");
        setPaymentValue("");
      }
    };

    const onUnBlock = async (event) => {
      event.preventDefault();  
      try {
        const  userAccessToken = sessionStorage.getItem('userAccessToken');
        let headers ={
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization" :  `Bearer ${JSON.parse(userAccessToken)}` 
        }
        const payload = deploymentValue !== "" ? { address: deploymentValue } : { address: paymentValue };
        const response = await axios.post(`http://localhost:8080/api/v1/polygon/address?block=false`, payload,{
          headers: headers
        });
        fetchData(); 
        console.log(response, "response for blocked address")
      } catch (error) {
        console.log(error, "error");
      } finally {
        setDeplpoymentValue("");
        setPaymentValue("");
      }
   
      setDeplpoymentValue("");
      setPaymentValue("");
    };
    
    return (
      <div className="blockedAddresspage">
        <TopNavbar />
          <div className="flex flex-row">
            <div className="listModal flex flex-col items-center">
            <div className="glass p-8 shadow-lg rounded-md w-full md:w-[80%] lg:w-[60%] xl:w-[75%] consolealignment">
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
        <BlockedAddressesList  blockedList={blockedList} />
      </div>
    </div>
    );
};
export default Cdkconsole;