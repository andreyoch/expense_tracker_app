
import './App.css';
import RecordPage from "./components/RecordPage/RecordPage";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import RecordPageContainer from "./components/RecordPage/RecordPageContainer";

function App() {
  return (

      <BrowserRouter>
          <Header/>
          <Route path={'/main'} render={() => <MainPage />}/>
      <Route path={"/records"} render={() => <RecordPageContainer />}/>
      </BrowserRouter>
  );
}

export default App;
