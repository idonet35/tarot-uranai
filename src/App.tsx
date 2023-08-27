import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DivinationForm from './views/DivinationForm';
import TarotResults from './views/TarotResults';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<DivinationForm />} />
        <Route path={`result`} element={<TarotResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
