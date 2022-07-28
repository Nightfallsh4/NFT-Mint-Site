import { useWeb3Contract, useMoralis } from "react-moralis"
import pandaAbi from "../constants/pandaAbi"
import contractAddress from "../constants/contractAddress"

export default function Contract(props) {
	const { chainId } = useMoralis()
	const chainId2 = parseInt(chainId)
    const { runContractFunction: mintNft } = useWeb3Contract({
        abi: pandaAbi,
        contractAddress: contractAddress[chainId2][props.addressIndex],
        functionName: "mintNft",
        params: {},
    })

	async function mintContract() {
		let txResponse, txReceipt

		txResponse = await mintNft()
		console.log(txResponse)
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
		</div>
	)
}
