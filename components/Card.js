import { useState } from "react"
import Mod from "./Modal"


export default function Card(props) {
	const [isOpen, setOpen] = useState(false)
	// const onModal = () => {setOpen(true)}
	function onModal() {
		setOpen(true)
	}
	function offModal() {
		setOpen(false)
	}

	

	return (
		<div
			className="mx-20 transition ease-in-out hover:scale-105 duration-500"
			onClick={() => {
				onModal()
			}}
		>
			<div className="pb-2 justify-between items-center bg-[#51557E] rounded-3xl"> 
				<img src={props.path} className="w-80 h-96 rounded-3xl mb-5" />
				<div className="text-center text-[#D6D5A8]">
					<h2 className="text-2xl font-bold">{props.title}</h2>
					<p className="text-md m-2">{props.description}</p>
				</div>
			</div>
			<Mod isOpen={isOpen} offModal={offModal} path={props.path} addressIndex={props.addressIndex}/>
		</div>
	)
}
