import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './css/style.css';
import './tracks';
// import Wrapper from './components/Wrapper/Wrapper';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
);