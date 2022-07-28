import { useMoralis } from "react-moralis"
import Card from "./Card"

export default function Feed() {
	const { isWeb3Enabled, chainId } = useMoralis()
	
	return (
		<div>
			{isWeb3Enabled && chainId == 31337 ? (
				<div className="flex min-h-full py-10 justify-between">
					<Card title={"Garbage"} description={"Mint Garbage NFT"} path={"/GroceryBag.jpg"} addressIndex={1}/>
                    <Card title={"Humming Bird"} description={"Mint Humming Bird"} path={"/HummingBird.jpg"} addressIndex={2}/>
                    <Card title={"Bad Drawing"} description={"Mint Bad Drawing NFT"} path={"/badDrawing.jpeg"} addressIndex={3}/>
                    
					
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
