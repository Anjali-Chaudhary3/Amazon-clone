import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reducer,{initialState}  from "./Reducer";
import * as ServiceWorker from "./ServiceWorker";
import { StateProvider } from './StateProvider';
render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
ServiceWorker.unregister();