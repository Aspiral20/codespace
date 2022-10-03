import React from 'react';
import ReactDOM from 'react-dom/client';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './styles/index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import './i18n';

import rootReducer from './reducers';
import { Provider } from "react-redux";
import { createStore } from "redux";

// process.env.NODE_ENV = "production" &&
Sentry.init({
  dsn: "https://64d40ee988294b59b268904cb2a9059e@o877142.ingest.sentry.io/5828677",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

// const store = createStore(rootReducer)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    {/*<Provider store={store}>*/}
      <App/>
    {/*</Provider>*/}
  </BrowserRouter>
);