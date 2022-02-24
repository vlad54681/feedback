import style from './App.module.scss';
import { connect } from "react-redux";
import { setGuests, setFeedback, deleteFeedback, restartApp } from './store/app-reducer';
import Loader from './components/Loader/Loader';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Guests from './components/Guests/Guests';
import Feedback from './components/Feedback/Feedback';
import { useEffect, useRef, useState } from 'react';



const App = ({ guests, setGuests, setFeedback, deleteFeedback, restartApp }) => {
	const [currentGuest, setCurrentGuest] = useState();
	const [showFeedback, setShowFeedback] = useState(true)
	const navigate = useNavigate()
	const firstUpdate = useRef(false)

	const getCurrentGuest = (guest) => {

		setShowFeedback(prev => !prev)
		setCurrentGuest(guest)


	}

	const getFeedback = (values) => {
		let guest = {
			...currentGuest,
			feedback: {
				rating: values.guestRating,
				phone: values.guestPhone,
				comment: values.guestComment
			}
		}

		navigate('guests')

		setFeedback(guest)
	}

	const deleteCurrentFeedback = (guest) => {
		deleteFeedback(guest)
		navigate('guests')
	}

	const restartAppFunc = () => {
		restartApp()
		navigate('../')
	}


	useEffect(() => {
		if (!firstUpdate.current) {
			firstUpdate.current = true;
			return;
		}

		navigate('feedback')
	}, [showFeedback])

	return <div className={style.appWrapper}>
		<button onClick={restartAppFunc}>RESTART</button>
		<div className={style.appWrapper_content}>
			<Routes>
				<Route path='/' element={<Loader guests={guests}
					setGuests={setGuests}
				/>}></Route>
				<Route path='/guests' element={<Guests guests={guests} getCurrentGuest={getCurrentGuest} />} />
				<Route path='/feedback' element={<Feedback deleteCurrentFeedback={deleteCurrentFeedback} guests={guests}
					getFeedback={getFeedback}
					guest={currentGuest}
				/>} />
			</Routes>

		</div>
	</div >
}



const mapStateToProps = (state) => {
	return {
		guests: state.appPage.guests,
	}
}

export default connect(mapStateToProps, {
	setFeedback, setGuests, deleteFeedback, restartApp
})(App);



