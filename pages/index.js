import { useReducer } from "react"
import UploadFile from "../components/UploadFile"
import styles from "../styles/Home.module.css"
import { reducer } from "../reducer"

export default function Home() {
	const [data, dispatch] = useReducer(reducer, {
		inDropZone: false,
		fileList: [],
	})
	return (
		<div className={styles.container}>
			<span>The Drag and Drop bit</span>
			<div>
				<UploadFile data={data} dispatch={dispatch} />
			</div>
		</div>
	)
}
