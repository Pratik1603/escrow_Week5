export default function Escrow({
  address,
  arbiter,
  beneficiary,
  value,
  handleApprove,
}) {
  
  async function approve(escrowContract, signer) {
    const approveTxn = await escrowContract.connect(signer).approve();
    await approveTxn.wait();
  }

  const handleApprove=async()=>{
      escrowContract.on('Approved', () => {
        document.getElementById(escrowContract.address).className =
          'complete';
        document.getElementById(escrowContract.address).innerText =
          "✓ It's been approved!";
      });
      await approve(escrowContract, signer);
    
  
  }
  return (
    <div className="existing-contract">
      <ul className="fields">
        <li>
          <div> Arbiter </div>
          <div> {arbiter} </div>
        </li>
        <li>
          <div> Beneficiary </div>
          <div> {beneficiary} </div>
        </li>
        <li>
          <div> Value </div>
          <div> {(1.0)*value/(10**18)} ETH</div>
        </li>
        <div
          className="button"
          id={address}
          onClick={(e) => {
            e.preventDefault();

            handleApprove();
          }}
        >
          Approve
        </div>
      </ul>
    </div>
  );
}
