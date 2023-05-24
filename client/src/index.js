import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Importa el componente principal de la aplicación
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Importa el componente Provider de react-redux para proporcionar el store a los componentes
import { BrowserRouter } from 'react-router-dom'; // Importa el componente BrowserRouter de react-router-dom para habilitar el enrutamiento de navegación
import { store } from './redux/store'; // Importa el objeto store de redux
/* Proporciona el store a los componentes el provider*/
/* Configura el enrutamiento de navegación el browserrouter*/
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
