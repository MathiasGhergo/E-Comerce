import NavBar from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Jagues</h1>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/Category:id" element={<ItemListContainer/>} />
        <Route path="/Item:id" element={<ItemDetailContainer/>} />
      </Routes>
    </div>
  );
}

export default App
