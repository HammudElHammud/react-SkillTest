import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';

import {toggleLanguage} from "../redux/App.reducer";


const Language = () => {
	const app = useSelector(state => state.App)
	const dispatch = useDispatch()

	const {t} = useTranslation();

	return (
		<div className="w-100 position-absolute top-0 right-0" style={{
			display: 'flex',
			justifyContent: 'end',
			padding: '10px 50px',
			zIndex: 999999
		}}>
			<p className="cursor-pointer text-white px-4 py-2" onClick={() => dispatch(toggleLanguage())}>
				{t(app.lang.name)}
			</p>
		</div>)
}

export default Language
