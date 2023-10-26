import './App.css'
import { Homepage} from './components/Homepage';
import { Delivery } from './components/Delivery';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/delivery' element={<Delivery />}></Route>
      </Routes>
    </>
  );
}

export default App;
