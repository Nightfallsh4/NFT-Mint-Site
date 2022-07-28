import ConnectButton from "./ConnectButton"
import Link from "next/link"
export default function Header() {
	return (
		<nav className="border-b-2 border-[#D6D5A8]">
			<div className="flex flex-row items-center justify-between">
				<Link href={"/"}>
					<a className="text-4xl font-bold text-[#D6D5A8]">Panda Market</a>
				</Link>
				<div className="flex items-center justify-between">
					<Link href={"/"}>
						<a className="px-20 text-2xl font-bold text-[#D6D5A8] transition ease-in-out hover:scale-105">Mint NFT</a>
					</Link>
					<Link href={"/sell-nft"}>
						<a className="px-20 text-2xl font-bold text-[#D6D5A8] transition ease-in-out hover:scale-105">Sell NFT</a>
					</Link>
					<ConnectButton />
				</div>
			</div>
			<p className="text-xl text-[#D6D5A8] py-10">
				A panda themed marketplace for NFTs
			</p>
		</nav>
	)
}
