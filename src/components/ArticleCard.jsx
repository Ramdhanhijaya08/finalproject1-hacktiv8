import PrimaryButton from './button/PrimaryButton';

const ArticleCard = ({ imgUrl, time, title, desc, source, author, url }) => {
	return (
		<div className="overflow-hidden rounded-md bg-white shadow">
			<img src={imgUrl} loading="lazy" alt={title} className="h-40 w-full object-cover object-center" />
			<div className="flex flex-col justify-between">
				<div className="border-b py-3 px-5">
					<div>
						<span className="font-poppins text-xs">{time}</span>
						<h5 className="font-secondary text-lg leading-normal">{title}</h5>
						<p className="mt-5 text-[15px]">{desc}</p>
					</div>
					<div className="mt-8">
						<p className="font-poppins text-sm text-slate-500">
							By {author} | {source}
						</p>
					</div>
				</div>

				<div className="flex h-full items-center space-x-5  py-3 px-5">
					<PrimaryButton
						href={url}
						target="_blank"
						className="transiton rounded-sm bg-red-700 py-2 px-4 font-poppins text-sm font-medium text-white duration-300 hover:bg-red-800"
					>
						Read More
					</PrimaryButton>
					<button className="rounded-sm border border-red-300 py-2 px-4 font-poppins text-sm font-medium text-red-700 transition duration-300 hover:bg-slate-100">
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArticleCard;
