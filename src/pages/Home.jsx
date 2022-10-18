import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';

const HomePage = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=ee83a3d108ca49729e5c9932f78a7382');

			setNews(res.data.articles);
		})();
	}, []);

	return (
		<Layout title="Home">
			<section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
				{news?.map(n => (
					<ArticleCard article={n} key={n.title} />
				))}
			</section>
		</Layout>
	);
};

export default HomePage;
