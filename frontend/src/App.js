
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import RecordPageContainer from "./components/RecordPage/RecordPageContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

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
