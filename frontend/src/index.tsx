import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './i18n';
// import './sentry'
import { store } from './store'
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<App/>
			</Provider>
		</ApolloProvider>
	</BrowserRouter>
);