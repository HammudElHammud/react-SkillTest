import React from "react";
import LeftSideImageHolder from "./LeftSideImageHolder";
import {useSelector} from "react-redux";
import cocktail from "./../assets/images/cocktail.png"
import BarInfoSection from "./Form/BarInfoSection";
import PersonalInfoSection from "./Form/PersonalInfoSection";
import DrinkPreferencesSection from "./Form/DrinkPreferencesSection";
import SummarySection from "./Form/SummarySection";
import {useTranslation} from "react-i18next";


const UserFormSection = () => {
	const state = useSelector(state => state.State)
	const {t} = useTranslation();

	const steps = [
		<BarInfoSection />,
		<PersonalInfoSection />,
		<DrinkPreferencesSection />,
		<SummarySection />
	]

	return  (
		<div className="w-100 vh-100 row" style={{ background: '#14140F'}}>
			<div className="col-lg-5 col-md-5 d-sm-none d-lg-block">
				<LeftSideImageHolder/>
			</div>
			<div className="col-lg-7 col-md-7 col-sm-12 p-5">
				<img className="" src={cocktail} width="75px" alt=""/>
				<p className="text-capitalize pt-3 py-5" style={{
					fontWeight: 'bold',
					color: '#F7DC6F'
				}}> {t('searchYourFav')} </p>
				{steps[state.currentFormStep]}
			</div>
		</div>
	);
}


export default UserFormSection
