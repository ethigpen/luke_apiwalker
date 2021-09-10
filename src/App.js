import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchForm from './components/SearchForm';
import ShowInfo from './components/ShowInfo';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <SearchForm></SearchForm>
    <Switch>
      <Route path="/:cat/:id">
        <ShowInfo></ShowInfo>
      </Route>
      
    </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
