import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Feedback.module.scss'


const DemonstrateFeedback = ({ guest, deleteCurrentFeedback }) => {
	let navigate = useNavigate()



	return <div className={style.feedBack}>

		<button
			className={style.backButton}
			onClick={() => { navigate('../guests') }}
		>
			BACK
		</button>

		<div className={style.feedback__rating}>
			Name: {guest.name}
			<div className={style.rating__label}>Rating:</div>

			<div className={style.rating__container + ' ' + style.rating} data-total-value={guest.feedback.rating}>
				<div className={style.rating__item} data-item-value='5'>★</div>
				<div className={style.rating__item} data-item-value='4'>★</div>
				<div className={style.rating__item} data-item-value='3'>★</div>
				<div className={style.rating__item} data-item-value='2'>★</div>
				<div className={style.rating__item} data-item-value='1'>★</div>

			</div>

		</div>

		<div className={style.feedBack__phone}>

			Phone: {guest.feedback.phone}

		</div>


		Comment:
		<div className={style.feedBack__comment}>
			{guest.feedback.comment}

		</div>

		<button className={style.deleteButton} type={'submit'}
			onClick={deleteCurrentFeedback.bind(null, guest)}
		>
			DELETE
		</button>
	</div>

}

export default DemonstrateFeedback;