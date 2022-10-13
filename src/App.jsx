import HomePage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/Search';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/search/:keyword" element={<SearchPage />} />
		</Routes>
	);
};

export default App;
