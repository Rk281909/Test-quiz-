import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Quizzes } from './pages/Quizzes';
import { QuizPlayer } from './pages/QuizPlayer';
import { PastPapers } from './pages/PastPapers';
import { Leaderboard } from './pages/Leaderboard';
import { Profile } from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quizzes" element={<Quizzes />} />
          <Route path="quiz/:id" element={<QuizPlayer />} />
          <Route path="past-papers" element={<PastPapers />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
