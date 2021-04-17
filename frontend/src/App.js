
import './App.css';
import RecordPage from "./components/RecordPage/RecordPage";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";

function App() {
  return (

      <BrowserRouter>
          <Header/>
      <Route path={"/records"} render={() => <RecordPage />}/>
      <Route path={'/main'} render={() => <MainPage />}/>
      </BrowserRouter>
  );
}

export default App;
