import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./css/style.css";
import "./tracks";
import App from "./App";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0; 
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    font-family: 'Stratos-Thin', sans-serif;
    color: #FFFFFF;

}

a,
a:visited {
  text-decoration: none;
  font-family: 'Stratos-Thin', sans-serif;
  cursor: pointer;
}

button {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'Stratos-Thin';
  src: local('Stratos-Thin'), local('Stratos-Thin'),
      url('../fonts/Stratos-Thin.woff2') format('woff2'),
      url('../fonts/Stratos-Thin.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </BrowserRouter>
);
