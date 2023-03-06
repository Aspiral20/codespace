import React from 'react';
import { Container, Footer, Header } from "./components";
import Router from "./router";
import { useDispatch, useSelector } from "react-redux";
import { ReducersTypes } from "./@types/store";

function App() {
	const storeGetCodeTypeToggles = useSelector<ReducersTypes, boolean>(state => state.close_toggles.code_type)
	const storeGetLangToggles = useSelector<ReducersTypes, boolean>(state => state.close_toggles.lang)
	const dispatch = useDispatch()

	const closeToggles = () => {
		storeGetCodeTypeToggles && dispatch({ type: 'close_toggles/close', field: 'code_type' })
		storeGetLangToggles && dispatch({ type: 'close_toggles/close', field: 'lang' })
	}

	return (
		<div id="app" onClick={closeToggles}>
			<Container>
				<Header/>
				<div className="content">
					<Router/>
				</div>
				<Footer/>
			</Container>
		</div>
	);
}

// export default Sentry.withProfiler(App);
export default App;