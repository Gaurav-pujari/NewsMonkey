import './components/NewsData'
import './App.css';
import Login from'./components/Login'
import NewsData from './components/NewsData';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css" integrity="sha384-dpuaG1suU0eT09tx5plTaGMLBsfDLzUCCUXOY2j/LSvXYuG6Bqs43ALlhIqAJVRb" crossorigin="anonymous"></link>
       <div className="App">
        <BrowserRouter>
        <Routes>  
        <Route path='/' element={<Login/>}/>
        <Route path="/newsdata" element={<NewsData/>}/>

       </Routes>
      </BrowserRouter>
    </div> 
    </>
  );
}

export default App;
