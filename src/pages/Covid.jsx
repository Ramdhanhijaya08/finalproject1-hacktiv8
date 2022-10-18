import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import previousMonthDate from '../utils/previousMonthDate';

const CovidPage = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios.get(
				`https://newsapi.org/v2/everything?q=Covid-19&from=${previousMonthDate()}&sortBy=popularity&apiKey=c41504569192477dbed268cff971b5d8`
			);

			setNews(res.data.articles);
		})();
	}, []);

	return (
		<Layout title="Covid">
			<section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
				{news?.map(n => (
					<ArticleCard article={n} key={n.title} />
				))}
			</section>
		</Layout>
	);
};

export default CovidPage;
