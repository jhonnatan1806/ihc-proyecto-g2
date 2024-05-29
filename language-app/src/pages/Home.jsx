import React from 'react';
import Hero from '../components/home/Hero';
import Search from '../components/home/Search';
import LevelCard from '../components/home/LevelCard';
import TopicCard from '../components/home/TopicCard';
import { Button, Link } from '@nextui-org/react';
import { getTopic, getTopics } from '../services/dataFeching';
('../services/dataFeching');

function HomePage() {
	const [topicBasic, setTopicBasic] = React.useState(null);
	const [topicsPopular, setTopicsPopular] = React.useState(null);

	React.useEffect(() => {
		async function fetchData() {
			const responseTopics = await getTopics();
			const responseTopicBasic = await getTopic('saludos-presentaciones');

			setTopicsPopular(responseTopics);
			setTopicBasic(responseTopicBasic);
		}
		fetchData();
	}, []);

	return (
		<main className="w-full pb-8">
			<Hero className="relative z-0 w-full h-[60vh] bg-hero bg-cover bg-center shadow-inner" />
			<Search className="hidden relative z-20 w-full md:flex md:items-center" />
			<div className="bg-slate-100 py-8 md:mt-24 shadow-inner">
				<div className="max-w-screen-lg mx-auto px-6 flex flex-col gap-4">
					<h2 className="text-2xl font-bold uppercase text-center">Lo Básico</h2>
					<section className="overflow-x-hidden max-w-screen-lg mx-auto py-2 cursor-grab active:cursor-grabbing select-none">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
							{topicBasic &&
								topicBasic.levels
									.slice(0, 3)
									.map((item, index) => <LevelCard key={index} item={item} topic={topicBasic.slug} />)}
						</div>
					</section>
					{topicBasic && (
						<div className="flex flex-col items-end w-full px-6">
							<Button as={Link} href={`/${topicBasic.slug}`} color="primary">
								Ver mas
							</Button>
						</div>
					)}
				</div>
			</div>
			<section className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-4 mt-16 px-6">
				<div className="flex flex-col gap-4 w-full md:w-1/2">
					<h1 className="text-2xl font-bold uppercase text-center">Temas populares</h1>
					<div className="grid grid-cols-2 gap-4">
						{topicsPopular && topicsPopular.slice(0, 4).map((item, index) => <TopicCard key={index} item={item} />)}
					</div>
				</div>
				<div></div>
			</section>
		</main>
	);
}

export default HomePage;
