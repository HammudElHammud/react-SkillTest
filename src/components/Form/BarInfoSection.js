import React, {useState} from "react";
import SecondaryButton from "../Button/SecondaryButton";
import {useDispatch, useSelector} from "react-redux";
import {moveNextSteps} from "../../redux/State.reducer";
import FormInput from "../FormElement/FormInput";
import {updateFormData} from "../../redux/User.reducer";
import * as swal from './../../utils/Helpars/SwalHelper'
import {useTranslation} from "react-i18next";

const BarInfoSection = () => {
	const User = useSelector(state => state.User);
	const {t} = useTranslation();
	const dispatch = useDispatch()

	const [barName, setBarName] = useState(User.barName)

	const onSubmit = (e) => {
		e.preventDefault();
		if (!barName) {
			swal.error("Error", "Please fill the required field")
			return;
		}
		dispatch(updateFormData({barName}))
		dispatch(moveNextSteps())
	}

	return (<>
		<h2 className="text-white mb-3">{t('BarInfo')}</h2>
		<form className="row" onSubmit={onSubmit}>
			<div className="col-12" >
				<FormInput
					type="text"
					placeholder={t('barName')}
					value={barName}
					onChange={(e) => {
						setBarName(e.target.value)
					}}
					error={barName !== null && !barName ? t('BarNameError') : null}
				/>
			</div>
			<div className="col-12 d-flex justify-content-end py-5">
				<SecondaryButton
					text={t('Next')}
					disabled={barName === null || !barName}
					onClick={onSubmit}
				/>
			</div>
		</form>
	</>)
}

export default BarInfoSection
