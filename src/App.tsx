import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DivinationForm } from 'views/pages/DivinationForm';
import { TarotResults } from 'views/pages/TarotResults';

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
