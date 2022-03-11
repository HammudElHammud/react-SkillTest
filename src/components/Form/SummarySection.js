import React from "react";
import SecondaryButton from "../Button/SecondaryButton";
import {moveNextSteps, movePreviousSteps} from "../../redux/State.reducer";
import {useDispatch, useSelector} from "react-redux";
import PrimaryButton from "../Button/PrimaryButton";
import {useTranslation} from "react-i18next";

const SummarySection = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.User)
	const {t} = useTranslation();

	return (
		<>
			<h2 className="text-white mb-3">{t('Yourinfo&Preferences')}</h2>
			<div className="row">
				<div className="col-12">
					<p className="summary-top-title py-0">{t('barName')}</p>
					<p className="summary-title">{user.barName}</p>
				</div>
				<div className="col-12">
					<p className="summary-top-title py-0">{t('YourName')}</p>
					<p className="summary-title">{user.firstName + " " + user.lastName}</p>
				</div>
				<div className="col-12">
					<p className="summary-top-title py-0">{t('Email/PhoneNo')}</p>
					<p className="summary-title">{user.email + "/" + user.phoneNo}</p>
				</div>
				<div className="col-12">
					<p className="summary-top-title py-0">{t('DrinkCategory/Type')}</p>
					<p className="summary-title">{user.category + "/" + user.alcoholicType}</p>
				</div>
				<div className="col-12">
					<p className="summary-top-title py-0">{t('GlassType')}</p>
					<p className="summary-title">{user.glass}</p>
				</div>
				<div className="col-12">
					<p className="summary-top-title py-0">{t('ingredients')}</p>
					<p className="summary-title">{user.ingredients.join(', ')}</p>
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
					<PrimaryButton
						type={"button"}
						text={t('confirm')}
						onClick={() => {
							dispatch(moveNextSteps())
						}}
					/>
				</div>
			</div>
		</>
	)
}

export default SummarySection
