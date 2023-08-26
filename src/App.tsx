import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DivinationForm from './views/DivinationForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<DivinationForm />} />
        <Route path={`result`} element={<p>結果表示</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
