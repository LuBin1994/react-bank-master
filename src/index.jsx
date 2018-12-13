import React from 'react';
import ReactDOM from 'react-dom';
import '@/static/sass/index.scss';
import '@/static/sass/App.scss';
import { } from 'react-router'
import Router from './router/router.js'
import registerServiceWorker from '@/registerServiceWorker';
ReactDOM.render( <Router/>, document.getElementById('root'));
registerServiceWorker();
