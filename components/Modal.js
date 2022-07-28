import Modal from "@mui/material/Modal"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import { Box } from "@mui/material"
import Contract from "./Contract"
export default function Mod(props) {

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 450,
		bgcolor: "#51557E",
		border: "2px solid",
		borderRadius: 7,
		boxShadow: 24,
		p: 7,
	}

	return <Modal
	open={props.isOpen}
	onClose={props.offModal}
	aria-labelledby="modal-modal-title"
	aria-describedby="modal-modal-description"
>
	<ClickAwayListener onClickAway={props.offModal}>
		<div>
			<Box sx={style}>
				<div className="justify-between items-center">
					<div>
						<img
							src={props.path}
							className="w-80 h-96 rounded-3xl mb-5 block"
						/>
					</div>
					<Contract addressIndex={props.addressIndex}/>
				</div>
			</Box>
		</div>
	</ClickAwayListener>
</Modal>
}
