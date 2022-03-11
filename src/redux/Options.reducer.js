import {createAxios} from "../utils/Helpars/AxiosHelpers";

const api = createAxios()

const UPDATE_OPTIONS = 'OPTIONS/UPDATE_OPTIONS'

const initState = {
	ingredients: {},
	glasses: {},
	categories: {},
	alcoholicTypes: {},
}

export default function reducer(state = initState, action) {
	switch(action.type) {
		case UPDATE_OPTIONS:
			return {
				...state,
				...action.options
			}
		default:
			return state;
	}
}

const getOptions = async (url, key, resultKey) => {
	const response = await api.get(url);
	const options = {};
	response.data.drinks.forEach(item => {
		options[item[key]] = item[key];
	})

	return {[resultKey]: options};
}

export const retrieveAllTheOptions = () => async (dispatch) => {
	const actions = [];
	let options = {};
	actions.push(getOptions('/list.php?i=list', 'strIngredient1', 'ingredients'));
	actions.push(getOptions('/list.php?g=list', 'strGlass', 'glasses'))
	actions.push(getOptions('/list.php?c=list', 'strCategory', 'categories'))
	actions.push(getOptions('/list.php?a=list', 'strAlcoholic', 'alcoholicTypes'))

	const results = await Promise.all(actions);
	results.forEach((result) => {
		options = {
			...options,
			...result
		}
	})

	console.log({options})
	dispatch({
		type: UPDATE_OPTIONS,
		options
	})
}

