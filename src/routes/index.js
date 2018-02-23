/*
 * Example Routes
 * */

import React from 'react';

import HomePage from './../containers/HomePage';
import TodoPage from './../containers/TodoPage';
import NotFoundPage from './../containers/NotFoundPage';
import Login from './../containers/Login';
import Register from './../containers/Register'


let routes = [
  { path: '/todos',
    exact: true,
    component: ()=><TodoPage/>
  },
  {
    path: '/',
    exact: true,
    component: ()=><Login/>
  },
  { path: '/notfound',
    exact: true,
    component: ()=><NotFoundPage/>
  },
  { path: '/register',
  exact: true,
  component: ()=><Register/>
}
];

export default routes;
