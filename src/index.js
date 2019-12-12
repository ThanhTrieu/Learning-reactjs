import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

//import TotoList from './Todo';
//import LifeCycle from './Learn';
//import AppScrollList from './DerivedStateFromProps';
// import CallApi from './CallApi';
// import DemoPropType from './LearnPropType';

//import AppEcom from './Ecom/App';
// import HOC from './Hoc/App';
import Redux from './redux'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Redux />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
