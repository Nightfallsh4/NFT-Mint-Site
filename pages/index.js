
import Image from "next/image"
import styles from "../styles/Home.module.css"

import { useMoralis } from "react-moralis"
import Feed from "../components/Feed"

export default function Home() {
	const { isWeb3Enabled, chainId } = useMoralis()

	return (
		<div className=" ">
			
			
			<Feed/>
		</div>
	)
}
