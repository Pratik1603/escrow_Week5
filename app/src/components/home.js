import { useNavigate } from "react-router-dom"
import img from "../assets/escrow1.png";
export const Home=()=>{
    const navigate=useNavigate();
    return(
        <div>
        <div className="w-full bg-[#080d44] h-[90vh] pt-[20%] md:pt-[10%]">
            <div className=" text-3xl md:text-5xl border-4 text-white mx-[8%] w-[40%] p-[2%] rounded-xl text-center">
                SecureEscrow
            </div>
            <div className="flex mx-[8%] mt-[2%]">
            <div onClick={()=>navigate("/newContract")} className="text-white border-4 rounded-xl w-[20%] m-4 text-center py-2 shadow-2xl hover:scale-105 ease-in-out">
                Create New Contract
            </div>
            <div onClick={()=>navigate("/YourContracts")}  className="text-white border-4 rounded-xl w-[20%] m-4 text-center py-2 shadow-2xl hover:scale-105 ease-in-out flex flex-col justify-center">
                Show Your Contracts
            </div>
            </div>
            <div className="absolute right-[0%] top-[50%] md:right-[5%] md:top-32 w-[60%] h-[30%] md:w-[50%] md:h-[50%] ">
                <img src={img} className="w-full h-full"/>
            </div>
            
        </div>
        <div className=" w-full h-[70vh] text-center ">
            <div className="text-3xl font-bold text-[#d5d4e7] h-[20%] p-[2%]">
                Steps For Security
            </div>
            <div className="mx-auto flex h-[80%] justify-evenly">
                <div className="bg-[#080d44] text-white w-[25%] h-[80%] hover:scale-105 ease-in-out shadow-2xl my-[2%] rounded-2xl text-center p-[2%]">
                    <div className="text-sm md:text-xl  font-bold h-[20%]">
                        Agreement and Initiation
                     </div>  
                     <div className="bg-[#b2afd8e3] flex flex-col md:text-sm justify-center text-xs text-[#0b0a20] shadow-2xl  rounded-2xl h-[80%] p-[2%]">
                     The parties involved in the transaction (buyer, seller, or service provider) agree to use an escrow service for added security and trust.
                     The escrow agent is chosen, and all parties provide the necessary information.
                    </div> 
                </div>
                <div className="bg-[#080d44] text-white w-[25%] hover:scale-105 ease-in-out  h-[80%] shadow-2xl my-[2%] rounded-2xl text-center p-[2%]">
                    <div className="text-sm md:text-xl  font-bold h-[20%] md:h-[30%]">
                    Funding the Escrow Account
                     </div>  
                     <div className="bg-[#b2afd8e3] flex flex-col md:text-sm justify-center text-[#0b0a20] shadow-2xl text-xs rounded-2xl h-[80%] md:h-[70%] p-[2%]">
                     The buyer or the party initiating the transaction deposits the agreed-upon funds or assets into the escrow account held by the escrow agent. The escrow agent verifies the receipt of the funds or assets
                    </div> 
                </div>
                <div className="bg-[#080d44] text-white w-[25%]  h-[80%] hover:scale-105 ease-in-out shadow-2xl my-[2%] rounded-2xl text-center p-[2%]">
                    <div className=" text-sm md:text-xl font-bold h-[30%]">
                    Transaction Completion and Disbursement
                     </div>  
                     <div className="bg-[#b2afd8e3] flex flex-col justify-center md:text-sm text-[#0b0a20] text-xs shadow-2xl  rounded-2xl h-[70%] p-[2%]">
                     Once the agreed-upon conditions in the transaction are met, such as successful delivery of goods or completion of services, the escrow agent is notified by one or both parties
                    </div> 
                </div>
            </div>
        </div>  
        </div>
    )
}
