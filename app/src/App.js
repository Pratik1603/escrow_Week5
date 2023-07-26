import { useContext } from 'react';
import { EscrowContext } from './store/escrow-context';
import NewContractForm from './components/NewContractForm';
import ExistingContracts from './components/ExistingContracts';
import Navbar from './components/navbar';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Home } from './components/home';
import Footer from './components/footer';
export default function App() {
    const { provider, account } = useContext(EscrowContext);
    return provider ? (

        <div className=" bg-[#5047d6] w-full">
                <Navbar/>
         
          
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newContract" element={<NewContractForm />} />
                <Route path="/YourContracts" element={<ExistingContracts />} />
                
            </Routes>
          
            <Footer/>
            
            
        </div>
    ) : (
        <div >
            <p>You need to install a browser wallet to use the DApp</p>
        </div>
    );
}