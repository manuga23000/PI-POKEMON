import { Home, Landing, Detail, Form } from './views/index';
import { Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
/*Utiliza el hook useLocation para obtener la ubicación actual*/
function App() {
    const location = useLocation();
    return (
        <div className="App">
            {location.pathname !== '/' && <NavBar />}
            <Route exact path="/" render={() => <Landing />} />
            <Route path="/home" render={() => <Home />} />
            <Route path="/details/:id" render={() => <Detail />} />
            <Route path="/create" render={() => <Form />} />
        </div>
    );
}

export default App;
/*
este componente App es el punto de entrada de la aplicación y se encarga de gestionar las rutas y renderizar los componentes correspondientes según la ubicación actual. También muestra el componente NavBar en todas las rutas excepto en la ruta raíz. Cada ruta está asociada a un componente específico: Landing, Home, Detail y Form.
*/
