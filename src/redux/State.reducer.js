const initState = {
	currentFormStep: 0,
	showResults: false
};

const MOVE_NEXT_STEP = 'STATE/MOVE_NEXT_STEP';
const MOVE_PREVIOUS_STEP = 'STATE/MOVE_PREVIOUS_STEP';

export default function reducer(state = initState, action) {
	switch (action.type) {
		case MOVE_NEXT_STEP:
			if (state.currentFormStep === 3) {
				return {
					...state,
					showResults: true
				}
			} else {
				return {
					...state,
					currentFormStep: state.currentFormStep + 1
				}
			}
		case MOVE_PREVIOUS_STEP:
			if (state.currentFormStep === 0) {
				return state;
			} else {
				return {
					...state,
					currentFormStep: state.currentFormStep - 1,
				}
			}
		default:
			return state;
	}
}


export const moveNextSteps = () => (dispatch) => {
	dispatch({
		type: MOVE_NEXT_STEP,
	})
};

export const movePreviousSteps = () => (dispatch) => {
	dispatch({
		type: MOVE_PREVIOUS_STEP,
	})
};

