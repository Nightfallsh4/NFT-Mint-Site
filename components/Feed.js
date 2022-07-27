import { useMoralis } from "react-moralis"
import Card from "./Card"
export default function Feed() {
	const { isWeb3Enabled, chainId } = useMoralis()

	return (
		<div>
			{isWeb3Enabled && chainId == 31337 ? (
				<div className="flex min-h-full py-10 justify-between">
					<Card title={"Garbage"} description={"Mint Garbage NFT"} path={"/GroceryBag.jpg"}/>
                    <Card title={"Humming Bird"} description={"Mint Humming Bird"} path={"/HummingBird.jpg"}/>
                    <Card title={"Garbage"} description={"Mint Garbage NFT"} path={"/GroceryBag.jpg"}/>
                    
					
				</div>
			) : (
				<div className="flex justify-center py-10">
					<p className="text-[#D6D5A8] text-xl">
						Connect only to Hardhat network
					</p>
				</div>
			)}
		</div>
	)
}
