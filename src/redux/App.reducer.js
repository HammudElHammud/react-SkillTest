import i18next from 'i18next';

const initState = {
	lang: {
		name: "English",
		code: "en"
	}
};

const TOGGLE_LANGUAGE = 'APP/TOGGLE_LANGUAGE';

export default function reducer(state = initState, action) {
	switch (action.type) {
		case TOGGLE_LANGUAGE:
			if (state.lang.code === 'en') {
				i18next.changeLanguage('tr');
				return {
					...state,
					lang: {
						name: "Turkish",
						code: "tr"
					}
				}
			}
			i18next.changeLanguage('en');
			return {
				...state,
				...initState
			};
		default:
			return state;
	}
}


export const toggleLanguage = () => (dispatch) => {
	dispatch({
		type: TOGGLE_LANGUAGE
	})
};
