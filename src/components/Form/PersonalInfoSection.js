import React, {useState} from "react";
import SecondaryButton from "../Button/SecondaryButton";
import {useDispatch, useSelector} from "react-redux";
import {moveNextSteps, movePreviousSteps} from "../../redux/State.reducer";
import FormInput from "../FormElement/FormInput";
import {updateFormData} from "../../redux/User.reducer";
import * as swal from "../../utils/Helpars/SwalHelper"
import {useTranslation} from "react-i18next";

const PersonalInfoSection = () => {
	const User = useSelector(state => state.User);
	const dispatch = useDispatch()
	const {t} = useTranslation();

	const [firstName, setFirstName] = useState(User.firstName)
	const [lastName, setLastName] = useState(User.lastName)
	const [phoneNo, setPhoneNo] = useState(User.phoneNo)
	const [email, setEmail] = useState(User.email)

	const [phoneNoError, setPhoneNoError] = useState(null);
	const [emailError, setEmailError] = useState(null);


	const validPhoneNumber = (value) => {
		if (!value) {
			setPhoneNoError(t('PhoneNumberError'));
			return false;
		}

		if (value.length > 13) {
			return false;
		}

		if (!(/^\+[\d]{0,12}$/g.test(value))) {
			setPhoneNoError(t('PhoneNumberErrorLen'))
			return false;
		}

		setPhoneNoError(null);
		return true;
	}

	const validEmail = (value) => {
		if (!value) {
			setEmailError("Email can't be empty")
		}

		if (!(/^\S+@\S+\.\S+$/g.test(value))) {
			setEmailError("Invalid Email")
		}

		setEmailError(null);
	}


	const isValid = () => {
		if (!firstName || !lastName || !phoneNo || !email) {
			return false;
		}

		return /^\+[\d]{0,12}$/g.test(phoneNo) && /^\S+@\S+\.\S+$/g.test(email);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (!isValid()) {
			swal.error("Error", "Please fill all the required fields");
			return;
		}
		dispatch(updateFormData({
			firstName,
			lastName,
			phoneNo,
			email
		}))
		dispatch(moveNextSteps())
	}

	return (<>
		<h2 className="text-white mb-3">{t('PersonalInfo')}</h2>
		<form className="row" onSubmit={onSubmit}>
			<div className="col-lg-6 col-md-6 col-sm-12 p-1" onSubmit={onSubmit}>
				<FormInput
					type="text"
					value={firstName}
					placeholder={t('Firstname')}
					onChange={(e) => {
						setFirstName(e.target.value)
					}}
					error={firstName !== null && !firstName ? t('FirstnameError') : null}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 p-1">
				<FormInput
					type="text"
					value={lastName}
					placeholder={t('LastName')}
					onChange={(e) => {
						setLastName(e.target.value)
					}}
					error={lastName !== null && !lastName ? t('LastnameError') : null}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 p-1">
				<FormInput
					type="text"
					value={phoneNo}
					placeholder={t('PhoneNumber')}
					onChange={(e) => {
						if (validPhoneNumber(e.target.value) || !e.target.value) {
							setPhoneNo(e.target.value);
						}
					}}
					error={phoneNoError}
				/>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-12 p-1">
				<FormInput
					type="email"
					value={email}
					placeholder={t('Email')}
					pattern="^\+[\d]{0,12}$"
					onChange={(e) => {
						setEmail(e.target.value)
						validEmail(e.target.value)
					}}
					error={emailError}
				/>
			</div>
			<div className="col-12 d-flex justify-content-between py-5">
				<SecondaryButton
					text={t('Back')}
					type="button"
					onClick={(e) => {
						e.preventDefault();
						dispatch(movePreviousSteps())
					}}
				/>
				<SecondaryButton
					role="submit"
					text={t('Next')}
					disabled={!isValid()}
					onClick={onSubmit}
				/>
			</div>
		</form>
	</>)
}

export default PersonalInfoSection
