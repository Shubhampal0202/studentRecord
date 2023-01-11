import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import About from './components/about/About'
import Error from './components/Error';
import NewStudent from './components/newStudent/NewStudent';
import Update from './components/update/Update';
function App() {
  return (
    <div style={{ border: "1px solid red" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:_id" element={<About />} />
        <Route path="/newstudent" element={<NewStudent />} />
        <Route path="/update/:_id" element={<Update />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
