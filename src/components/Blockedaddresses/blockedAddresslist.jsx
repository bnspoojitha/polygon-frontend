import React, {useState, useEffect} from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const BlockedAddressesList = ({blockedList}) =>{
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
        setLoading(true);
    console.log(blockedList,"in cdkconsole")
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 2000);
    
        return () => {
          clearTimeout(timeout);
        };
      }, []);
    return(
        <div className="flex flex-col  xl:w-[40%]" style={{paddingTop: '50px'}}>
        <div className="flow-div flex flex-col p-5 mx-8 justify-center items-center">
          <div className="flex justify-between items-center mb-3 px-3 w-full">
            <h2 className="h1">Blocked Addresses List</h2>
          </div>
          <div className="w-full ">
          {loading ? 
          (
            <div className="flex justify-center pt-2">
              <ClipLoader color="#808080" size={35} speedMultiplier={0.8} />
            </div>
          ) :
          // : 
          // blockedList === null || blockedList === undefined || blockedList.length === 0  ? (
          //   <div className="h3 text-center pt-3 pb-6">No Blocked Addresses found</div>
          // ) : 
          (
            <div>
                <table className="divide-y divide-border-[255,255,255,0.8] table w-full">
                <thead>
                  <tr className="labels">
                    <th className="bg-white">Id</th>
                    <th className="bg-white">Blocked Address</th>
                  </tr>
                </thead>
                <tbody>
                {(blockedList ?? []).length > 0 ? (
                  blockedList.map((blockedAddress, index) => (
                    blockedAddress.isBlocked === true && (
                      <tr
                        key={index}
                        className="cursor-pointer hover:bg-[#9571f6] text-sm font-normal text-[#808080] hover:bg-opacity-30 rounded-none"
                      >
                        <td>{index + 1}</td>
                        <td>{blockedAddress.link}</td>
                      </tr>
                    )
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center pt-3 pb-6">
                      No Blocked Addresses found
                    </td>
                  </tr>
                )}
              </tbody>
              </table>
            </div>
          )
          }
        </div>
        </div>
      </div>
    )
}

export default BlockedAddressesList;