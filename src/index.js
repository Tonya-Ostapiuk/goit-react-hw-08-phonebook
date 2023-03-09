import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { store } from './redux/store';
// import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <Provider store={store}>
          <App />
        </Provider>
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);
