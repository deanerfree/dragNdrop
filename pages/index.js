import Head from "next/head"
import Image from "next/image"
import { useReducer } from "react"
import UploadFile from "../components/UploadFile"
import styles from "../styles/Home.module.css"

export default function Home() {
	const reducer = (state, action) => {
		switch (action.type) {
			case "SET_IN_DROP_ZONE":
				return { ...state, inDropZone: action.inDropZone }
			case "ADD_FILE_TO_LIST":
				action.files.id = action.index
				return { ...state, fileList: state.fileList.concat(action.files) }
			case "REMOVE_FILE_FROM_LIST":
				return {
					...state,
					fileList: state.fileList.filter((item) => {
						if (item.name !== action.index) {
							return state.fileList
						}
					}),
				}
		}
	}

	const [data, dispatch] = useReducer(reducer, {
		inDropZone: false,
		fileList: [],
	})
	return (
		<div className={styles.container}>
			<span>The organizer</span>
			<div>
				<UploadFile data={data} dispatch={dispatch} />
			</div>
		</div>
	)
}
