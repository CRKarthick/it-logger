import { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import Addbtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
    useEffect(() => {
        // Initialize Materialize Javascript
        M.AutoInit();
    });
    return (
        <Provider store={store}>
            <Fragment>
                <SearchBar />
                <div className='container'>
                    <Addbtn />
                    <AddLogModal />
                    <EditLogModal />
                    <AddTechModal />
                    <TechListModal />
                    <Logs />
                </div>
            </Fragment>
        </Provider>
    );
};

export default App;
