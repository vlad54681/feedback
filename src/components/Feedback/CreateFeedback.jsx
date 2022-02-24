import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import { composeValidators, maxLengthCreator, required, mustBeNumber } from '../../utils/validators/validators';
import style from './Feedback.module.scss'


const CreateFeedback = ({ guest, onSubmit }) => {
	const navigate = useNavigate()

	return <div className={style.feedBack}>
		<Form
			onSubmit={onSubmit}
			initialValues={{}}
			render={({ handleSubmit, hasValidationErrors, }) => (
				<form
					onSubmit={event => {
						handleSubmit(event)

					}}
				>
					<div className={style.feedback__rating}>
						<Field
							defaultValue={'3'}
							name={'guestRating'}
							validate={required}
						>
							{({ input, meta }) => (
								<div className={style.rating}>
									Name: {guest.name}
									<div className={style.rating__label}>Rating:</div>
									<div className={style.starsRating}>
										<div className={style.starsRating__items}>
											<input type="radio" id='stars-rating__5' {...input} value={'5'} className={style.starsRating__item} />
											<label htmlFor='stars-rating__5' className={style.starsRating__label}></label>
											<input type="radio" id='stars-rating__4' {...input} value={'4'} className={style.starsRating__item} />
											<label htmlFor='stars-rating__4' className={style.starsRating__label}></label>
											<input type="radio" id='stars-rating__3' defaultChecked {...input} value={'3'} className={style.starsRating__item} />
											<label htmlFor='stars-rating__3' className={style.starsRating__label}></label>
											<input type="radio" id='stars-rating__2' {...input} value={'2'} className={style.starsRating__item} />
											<label htmlFor='stars-rating__2' className={style.starsRating__label}></label>
											<input type="radio" id='stars-rating__1' {...input} value={'1'} className={style.starsRating__item} />
											<label htmlFor='stars-rating__1' className={style.starsRating__label}></label>
										</div>
									</div>


									<div className={style.error}>
										{meta.error && meta.touched && <span className={style.titleInputErr}>{meta.error}</span>}
									</div>

								</div>
							)}
						</Field>
					</div>
					<div className={style.phoneInput}>
						Phone number:
						<Field
							name={'guestPhone'}
							validate={mustBeNumber}

						>
							{({ input, meta }) => (
								<div className={style.guestPhone}>

									<input {...input}

										placeholder="Enter phone.."
										className={style.guestPhoneInput}
									/>
									<div className={style.error}>
										{meta.error && meta.touched && <span className={style.titleInputErr}>{meta.error}</span>}
									</div>

								</div>
							)}
						</Field>
					</div>
					<div >
						Comment:
						<Field

							name={'guestComment'}
							validate={composeValidators(required, maxLengthCreator(3000))}
						>
							{({ input, meta }) => (
								<div className={style.guestComment}>
									<textarea {...input}
										placeholder="Enter text.."
										className={style.comment}
									/>

									<div className={style.button}>
										{hasValidationErrors ? <button
											onClick={() => { navigate('../guests') }}
										>	CANCEL	</button> :
											<button type={'submit'}>SAVE</button>}

									</div>

								</div>

							)}
						</Field>
					</div>
				</form>
			)}
		/>
	</div >
}

export default CreateFeedback;