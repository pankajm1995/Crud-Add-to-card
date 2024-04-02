import './App.css';
import Header from './Component/Header';
import {Routes,Route} from 'react-router-dom'
import Cards from './Component/Cards';
import CardsDetails from './Component/CardsDetails';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path='/' element={<Cards></Cards>}></Route>
        <Route path='/cart' element={<CardsDetails></CardsDetails>}></Route>
    </Routes>
    </div>
  );
}

export default App;
