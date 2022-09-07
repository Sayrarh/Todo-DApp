const {ethers: etherjs} = ethers;
import abi from '../abi.js';
import {Contract_Address, RpcUrl} from '../constant.js';


const getContract = function(isSigner = false, address = Contract_Address, ABI = abi) {
    const provider = new etherjs.providers.JsonRpcProvider(RpcUrl);
    const signerMet = new etherjs.providers.Web3Provider(window.ethereum);
    window.ethereum.enable();
    const signer = signerMet.getSigner();

    const signerOrProvider = isSigner ? signer : provider;
    const detailsNeeded = new etherjs.Contract(address, ABI, signerOrProvider);

    return detailsNeeded;  
};

export default getContract;