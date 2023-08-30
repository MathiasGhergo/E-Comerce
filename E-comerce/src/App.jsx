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
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category:categoryId" element={<ItemListContainer/>} />
        <Route path="/item:id" element={<ItemDetailContainer/>} />
      </Routes>
    </div>
  );
}

export default App
