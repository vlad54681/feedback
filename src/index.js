import './index.css';
import store, { persistor } from './store/store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


let Feedback = (state) => {




	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					{/* в loading можно передать вызов компонента */}
					<App state={state} />
				</PersistGate>
			</Provider>
		</BrowserRouter>, document.getElementById('root')
	);
}


Feedback(store.getState());


