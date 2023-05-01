import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import RobotoWoff2 from './fonts/Roboto.woff2'
import RobotoWoff from './fonts/Roboto.woff'
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import ClientPage from "./pages/ClientPage";
import {clientLoader} from "./response/clientResponse";

const GlobalStyled = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    background-color: var(--color-white);
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  :root {
    --color-black: #151317;
    --color-violet: #512689;
    --color-gray: #808185;
    --color-gray-light: #F8F8F8;
    --color-red: #FF6161;
    --color-white: #FFFFFF;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
    local('Roboto-Regular'),
    url(${RobotoWoff2}) format('woff2'),
    url(${RobotoWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`

const root = createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    {
        path: "/",
        element: <><GlobalStyled/>{localStorage.getItem('token') === null ? <Navigate to={'/register'}/> :
            <HomePage/>}</>,
    },
    {
        path: "register",
        element: <><GlobalStyled/>{localStorage.getItem('token') !== null ? <Navigate to={'/'}/> :
            <SignUp/>}</>,
    },
    {
        path: 'user/:id',
        element: <><GlobalStyled/>{localStorage.getItem('token') === null ? <Navigate to={'/register'}/> :
            <ClientPage/>}</>,
        loader: clientLoader
    }
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)