import './App.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// PROVIDER
import { ContextProvider } from './context/GlobalContext';

// COMPONENTS
import { TaskForm } from './components/TaskForm';
import { TasksList } from './components/TasksList';
import { Navbar } from './components/Navbar';

// PAGES



function App() {
  return (
    <div className="App">
        
      <ContextProvider>
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/" component={TasksList} />
                <Route path="/create" component={TaskForm} />
                <Route path="/edit/:id" component={TaskForm} />
            </Switch>
        </Router>
      </ContextProvider>


    
    </div>
  );
}

export default App;
