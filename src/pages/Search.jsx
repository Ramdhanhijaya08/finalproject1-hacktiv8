import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';
import { useParams } from 'react-router-dom';

const SearchPage = () => {
	const [news, setNews] = useState([]);
	const { keyword } = useParams();

	useEffect(() => {
		(async () => {
			const res = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=ee83a3d108ca49729e5c9932f78a7382`);

			setNews(res.data);
		})();
	}, [keyword]);

	return (
		<Layout title="Search">
			<section>
				<h2 className="mb-10">Searching for : {keyword}</h2>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
					{news?.totalResults > 0 ? (
						news.articles.map(n => (
							<ArticleCard
								key={n.title}
								imgUrl={n.urlToImage}
								title={n.title}
								desc={n.description}
								source={n.source.name}
								author={n.author}
								url={n.url}
							/>
						))
					) : (
						<h3>Sorry, no result found</h3>
					)}
				</div>
			</section>
		</Layout>
	);
};

export default SearchPage;
