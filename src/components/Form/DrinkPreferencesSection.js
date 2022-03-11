import React, {useState} from "react";
import FormSelect from "../FormElement/FormSelect";
import {useDispatch, useSelector} from "react-redux";
import FormMultiselect from "../FormElement/FormMultiselect";
import SecondaryButton from "../Button/SecondaryButton";
import {moveNextSteps, movePreviousSteps} from "../../redux/State.reducer";
import * as swal from "../../utils/Helpars/SwalHelper"
import {updateFormData} from "../../redux/User.reducer";
import {useTranslation} from "react-i18next";

const DrinkPreferencesSection = () => {

	const options = useSelector(state => state.Options);
	const user = useSelector(state => state.User)
	const dispatch = useDispatch()
	const {t} = useTranslation();

	const [category, setCategory] = useState(user.category);
	const [alcoholicType, setAlcoholicType] = useState(user.alcoholicType);
	const [glass, setGlass] = useState(user.glass);
	const [ingredients, setIngredients] = useState(user.ingredients);


	const onSubmit = (e) => {
		e.preventDefault();

		if (!isValid()) {
			swal.error("Please select all the required fields");
			return;
		}
		dispatch(updateFormData({
			category,
			alcoholicType,
			glass,
			ingredients
		}))
		dispatch(moveNextSteps());
	}

	const isValid = () => {
		return !(!category || !alcoholicType || !glass || !ingredients.length);
	}

	return (
		<>
			<h2 className="text-white mb-3">{t('DrinkPreferences')}</h2>
			<form className="row" onSubmit={onSubmit}>
				<div className="col-lg-6 col-md-6 col-sm-12 p-1" >
					<FormSelect
						placeholder={t('DrinkCategory')}
						value={category}
						options={options.categories}
						onChange={e => {
							setCategory(e.target.value)
						}}
					/>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 p-1" >
					<FormSelect
						placeholder={t('AlcoholicTypes')}
						value={alcoholicType}
						options={options.alcoholicTypes}
						onChange={e => {
							setAlcoholicType(e.target.value)
						}}
					/>
				</div>
				<div className="col-lg-12 col-md-12 col-sm-12 p-1" >
					<FormSelect
						placeholder={t('GlassType')}
						value={glass}
						options={options.glasses}
						onChange={e => {
							setGlass(e.target.value)
						}}
					/>
				</div>
				<div className="col-lg-12 col-md-12 col-sm-12 p-1" >
					<FormMultiselect
						placeholder={t('DrinkIngredient')}
						values={ingredients}
						options={options.ingredients}
						onChange={e => {
							setIngredients([
								...ingredients,
								e.target.value
							])
						}}
						onDelete={(value) => {
							setIngredients(ingredients.filter(ingredient => ingredient !== value))
						}}
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
						text={(t('Next'))}
						disabled={!isValid()}
						onClick={onSubmit}
					/>
				</div>
			</form>
		</>)
}

export default DrinkPreferencesSection
