import { useContext } from 'react';
import { EscrowContext } from '../store/escrow-context';
import Escrow from './Escrow';

export default function ExistingContracts() {
    const escrowCtx = useContext(EscrowContext);
    return (
        <div className='mx-auto border-2 w-[80%] my-[4%] rounded-xl bg-[#0b074a]'>
            <h1 className='text-3xl'> Existing Contracts </h1>
            <div id='container'>
                {escrowCtx.escrows.map(escrow => {
                    return <Escrow key={escrow.address} {...escrow} />;
                })}
            </div>
        </div>
    );
}
