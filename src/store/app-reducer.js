const SET_GUESTS = 'SET_GUESTS';
const SET_FEEDBACK = 'SET_FEEDBACK';
const DELETE_FEEDBACK = 'DELETE_FEEDBACK';
const RESTART_APP = 'RESTART_APP';

let initialState = {
	guests: null,
};




const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_GUESTS: {
			return {
				...state,
				guests: action.guests
			}
		}

		case SET_FEEDBACK: {
			return {
				...state,
				guests: state.guests.map(guest => {
					if (guest.name === action.guest.name) {
						return action.guest
					} else {
						return guest
					}
				})
			}
		}
		case DELETE_FEEDBACK: {
			return {
				...state,
				guests: state.guests.map(guest => {
					if (guest.name === action.guest.name) {
						return {
							...guest,
							feedback: null
						}
					} else {
						return guest
					}
				})
			}
		}
		case RESTART_APP: {
			return {
				...state,
				guests: null
			}
		}



		default:
			return state;

	}
}

export const setFeedback = guest => ({ type: SET_FEEDBACK, guest })
export const setGuests = guests => ({ type: SET_GUESTS, guests })
export const deleteFeedback = guest => ({ type: DELETE_FEEDBACK, guest })
export const restartApp = () => ({ type: RESTART_APP })

export default appReducer;
