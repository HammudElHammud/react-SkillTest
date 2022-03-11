const initState = {
	barName: null,
	firstName: null,
	lastName: null,
	phoneNo: null,
	email: null,
	category: '',
	alcoholicType: '',
	glass: '',
	ingredients: []
};

const UPDATE_FORM_DATA = 'USER/UPDATE_FORM_DATA';

export default function reducer(state = initState, action) {
	switch (action.type) {
		case UPDATE_FORM_DATA:
			return {
				...state, ...action.form
			}
		default:
			return state;
	}
}


export const updateFormData = (form) => (dispatch) => {
	dispatch({
		type: UPDATE_FORM_DATA, form
	})
};
