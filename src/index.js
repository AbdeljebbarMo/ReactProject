import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
// import reducer from "./store/reducer";
// import reducer from "./CRUD/config/reducer";
// import reducer from "./CRUD2/config/reducer";
import reducer from "./CRUD3/reducer";
// import voitureReducer from "./TP5/voitureReducer";

import { Provider } from "react-redux";
// import App from "./T4/component/App";
// import App from './App'
// import App from './CRUD2/App'
// import App from './CRUD/App'
import App from './CRUD3/App'
// import App from './TP5/App'
// import App from './toolkit/API_Users/App_api'
// Create a Redux store using your reducer
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// import store from "./TP5/store";
// import store from "./REDUX3/Confige/store";
// Use createRoot from ReactDOM to create a concurrent root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your App component wrapped in the Redux Provider
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);