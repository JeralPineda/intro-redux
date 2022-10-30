import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CounterApp } from './pages/CounterApp';
import { PokemonApp } from './pages/PokemonApp';
import { TodoApp } from './pages/TodoApp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterApp />} />

        <Route path="/pokemon" element={<PokemonApp />} />

        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
