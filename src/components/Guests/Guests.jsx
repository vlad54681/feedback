import { NavLink } from 'react-router-dom';
import style from './Guests.module.scss'
import tick from '../../assets/img/icons/tick.png'




const Guests = ({ guests, getCurrentGuest }) => {



	let guestNames;
	guestNames = guests.map((guest, index) => <tr key={guest.name + index}>
		{!!guest.feedback && !!guest.isVegan ?
			<td className={style.guestName + ' ' + style.veganWithFeedback}>
				<img src={tick} className={style.tick} alt="ooops" /><NavLink onClick={getCurrentGuest.bind(null, guest)} to="">{guest.name}</NavLink></td> :
			!!guest.feedback ?
				<td className={style.guestName + ' ' + style.guestWithFeedback}>
					<img src={tick} className={style.tick} alt="ooops" /><NavLink onClick={getCurrentGuest.bind(null, guest)} to="">{guest.name}</NavLink></td> :


				!!guest.eatsPizza && !!guest.isVegan ? <td className={style.guestName + ' ' + style.vegan}>
					<NavLink onClick={getCurrentGuest.bind(null, guest)} to="">{guest.name}</NavLink></td> :
					!!guest.eatsPizza ? <td className={style.guestName}>
						<NavLink onClick={getCurrentGuest.bind(null, guest)} to="">{guest.name}</NavLink></td> :
						< td style={{ opacity: '0.6' }} className={style.guestName}>{guest.name}</td>}
	</tr >
	)


	return <table className={style.guests}>
		<tbody className={style.guests__container}>

			{guestNames}

		</tbody>
	</table>
}

export default Guests;


