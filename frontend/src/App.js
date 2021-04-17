
import './App.css';
import RecordPage from "./components/RecordPage/RecordPage";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import RecordPageContainer from "./components/RecordPage/RecordPageContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";

function App() {
  return (

      <BrowserRouter>
          <Header/>
          <Route path={'/'} exact render={() => <MainPageContainer/>}/>
      <Route path={"/records"} render={() => <RecordPageContainer />}/>
      </BrowserRouter>
  );
}

export default App;
