import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store/store'
import "./css/style.css";
import "./req";
import "./tracks";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
    <Provider store={store}><App /></Provider>
        
    </BrowserRouter>
);
