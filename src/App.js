import Page1 from "./components/Page1";
import Page2 from "./components/Page2"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
  <Routes>
  <Route exact path="/" element={<Page1/>}/>
   
     
        <Route path="/1" element={<Page2/>}/>
      
  </Routes>
    

    </Router>
 
  )

}

export default App;
