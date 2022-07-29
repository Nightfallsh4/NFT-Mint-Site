import { useState } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import pandaAbi from "../constants/pandaAbi"
import contractAddress from "../constants/contractAddress"
import Alert from "@mui/material/Alert"
import { Snackbar } from "@mui/material"

export default function Contract(props) {
	const { chainId } = useMoralis()

	const chainId2 = parseInt(chainId)
	const { runContractFunction: mintNft } = useWeb3Contract({
		abi: pandaAbi,
		contractAddress: contractAddress[chainId2][props.addressIndex],
		functionName: "mintNft",
		params: {},
	})

	const [isNotification, setNotification] = useState(false)
	const handleClose = () => {
		setNotification(false)
	}
	const vertical = "bottom"
	const horizontal = "right"
	let txResponse, txReceipt
	async function mintContract() {
		
		txResponse = await mintNft()
		console.log(txResponse.hash)
		// message = message + txResponse.hash
		setNotification(true)
		txReceipt = await txResponse.wait(1)

		console.log(txReceipt.events[0].args.tokenId)
	}

	return (
		<div>
			<button
				className="rounded-lg p-3 bg-[#D6D5A8] transition ease-in-out hover:bg-[#D6E5A8] duration-300 text-[#51557E] font-bold mx-[30%]"
				onClick={() => {
					mintContract()
				}}
			>
				Mint NFT
			</button>
			<Snackbar
			
				open={isNotification}
				autoHideDuration={5000}
				onClose={handleClose}
			
			>
				<Alert onClose={handleClose} severity="info" sx={{ width: "100%", bottom:"50%", right: "50%"  }}>
					Your Transaction has been sent!
				</Alert>
			</Snackbar>
		</div>
	)
}
