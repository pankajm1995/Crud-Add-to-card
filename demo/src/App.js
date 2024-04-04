

import Header from './Component/Header'; 
import { Routes,Route } from 'react-router-dom';
import CardsDetails from './Component/CardsDetails';
import Cards from './Component/Cards'
function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Cards/>}/>
            <Route path='/Cart/:id' element={<CardsDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;