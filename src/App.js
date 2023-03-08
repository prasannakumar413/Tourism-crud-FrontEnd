
import './App.css';
import Post from './components/Post.jsx';
import Management from './components/Management.jsx';
import Update from './components/Update.jsx';
import DeleteRecord from './components/DeleteRecord.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">


<BrowserRouter ><Routes>
        <Route path='/' element={<Post/>}/>
        <Route path='/Management' element={<Management/>}/>
        <Route path='/Update' element={<Update/>}/>
        <Route path='/DeleteRecord' element={<DeleteRecord/>}/>
        </Routes></BrowserRouter>



     
    
    
    


    </div>
  );
}

export default App;
