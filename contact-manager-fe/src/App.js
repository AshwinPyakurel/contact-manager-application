import './App.css';
import { ToastContainer } from "react-toastify";
import Navbar from './components/NavBar';
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';
import AddContact from './components/contacts/AddContacts';
import EditContact from './components/contacts/EditContact';
import Login from './components/auth/Login';
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar/>
      <Routes>
        <Route exact path = "/" element= {<Home/>}></Route>
        <Route exact path = "/login" element= {<Login/>}></Route>        
        <Route path = "/addcontact" element={<AddContact/>}></Route>
        <Route path = "/editcontact/:id" element={<EditContact/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
