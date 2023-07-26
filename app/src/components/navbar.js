import React, { useContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { EscrowContext } from '../store/escrow-context';
import MenuIcon from '@mui/icons-material/Menu';
// import { Navigate, useNavigate } from "react-router-dom";
const Navbar=()=>{
    const { provider, account } = useContext(EscrowContext);
    const navigate=useNavigate();
    const [state,setState]=React.useState(false);
    const navigation=[
        {title:"Home",path:"/"},
        {title:"Create",path:"newContract"},
        {title:"My Contracts",path:"YourContracts"},
        
    ];
   
   
    return(
        
        <nav className={`bg-gradient-to-r  from-[#0a0648] from-80%  to-[#5047d6] to-90%  md:text-sm  text-white ${state?"shadow-lg rounded-xl mx-2  mt-2 md:shadow-none md:border:none md:mx-2 md:mt-0":""}`}>
            <div className="gap-x-16 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                 <div className="flex items-center justify-between py-5 md:block">
                     <div className="md:hidden">
                         <button className="menu-btn text-gray-500 hover:text-gray-800 cursor-pointer" onClick={()=>setState(!state)
                         }>
                            <MenuIcon/>
                         </button>
                     </div>
                 </div>
                <div className={`flex-1 gap-x-8 items-center mt-8 md:mt-0 md:flex ${state?"block" :"hidden"}`}>
                <div className="w-16 font-bold text-xl md:mt-[1%] md:ml-[-5%] md:mr-[8%] border-[#cfd2d6] md:h-12 rounded-b-full shadow-2xl md:w-12 h-20 ">
                    SecureEscrow     
                </div>
                <ul className="text-center  justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
               
                 {navigation.map((item,idx)=>{
                     return(
                         <li key={idx} className="text-white hover:text-[#919ea6] hover:font-bold" onClick={()=>navigate(item.path)}>
                             <div style={{textDecoration:"none"}}  className="block">{item.title}</div>
                         </li>
                     );
                 })}
                 </ul>
                 
                 <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 mb-4">
                 
                    {account?(
                        <p  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 activate:bg-gray-900 rounded-full md:inline-flex">{account.slice(0,25)}..</p>
                    ):(<button  className="cursor-pointer  flex items-center justify-center gap-x-1 py-2 px-4 mb-4 text-white font-medium bg-gray-800 hover:bg-gray-700 activate:bg-gray-900 rounded-full md:inline-flex">
                        Connect Wallet
                    </button>)}
                 </div>
             </div>
             </div>
        </nav>
    )
}

export default Navbar;
