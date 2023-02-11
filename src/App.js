import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routs from './routes';
import GlobalStyle from './styles/Globalstyles';
import Header from './components/Header';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routs />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
