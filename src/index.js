import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <SnackbarProvider
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            maxSnack={5}
        >
            <App />
        </SnackbarProvider>
    </Provider>
);
