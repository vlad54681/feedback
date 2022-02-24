import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Loader.module.scss';

const Loader = ({ guests, setGuests }) => {
	const navigate = useNavigate()



	async function fetchData(url) {

		let responseData;
		try {
			const response = await axios.get(url);
			responseData = response.data;

		} catch (error) {
			console.error(error);
		}

		return responseData
	}
	useEffect(async () => {
		if (!guests) {
			let partyGuests = await fetchData('https://gp-js-test.herokuapp.com/pizza/guests')
			const guestNames = partyGuests.party.map(guest => guest.name).join(',');
			let partyGuestDietsUrl = 'https://gp-js-test.herokuapp.com/pizza/world-diets-book';
			const partyGuestDietsUrlWithNames = partyGuestDietsUrl + '/' + guestNames;
			const encodedPartyGuestsUrl = encodeURI(partyGuestDietsUrlWithNames);
			let partyGuestsDiets = await fetchData(encodedPartyGuestsUrl)
			let partyMembers = partyGuests.party.map(member => {
				let guestDiet = partyGuestsDiets.diet.find(diet => diet.name === member.name)
				return {
					...member,
					isVegan: guestDiet.isVegan,
					feedback: null
				}
			})

			setGuests(partyMembers)
		}
		navigate('guests');
	}, [])
	return (
		<div className={style.loader}>
			<div>
				Loading...
			</div>
		</div>
	)
}




export default Loader