import HomePage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/Search';
import ProgrammingPage from './pages/Programming';
import CovidPage from './pages/Covid';
import SavedPage from './pages/Saved';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/programming" element={<ProgrammingPage />} />
			<Route path="/covid" element={<CovidPage />} />
			<Route path="/search/:keyword" element={<SearchPage />} />
			<Route path="/saved" element={<SavedPage />} />
			
		</Routes>
	);
};

export default App;
