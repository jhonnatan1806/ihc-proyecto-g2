import React from 'react';
import Hero from '../components/home/Hero';
import Search from '../components/home/Search';
import LevelCard from '../components/home/LevelCard';
import TopicCard from '../components/home/TopicCard';
import TopFiveTable from '../components/challenges/TopFiveTable';

import { Button, Link } from '@nextui-org/react';
import { getTopic, getTopics } from '../services/dataFeching';
('../services/dataFeching');

function HomePage() {
	const initialUsers = [
		{ id: 1, name: 'Usuario 1', score: 80, status: 'Completado' },
		{ id: 2, name: 'Usuario 2', score: 0, status: 'Pendiente' },
		{ id: 3, name: 'Usuario 3', score: 45, status: 'Suspendido' },
		{ id: 4, name: 'Usuario 4', score: 90, status: 'Completado' },
		{ id: 5, name: 'Usuario 5', score: 0, status: 'Pendiente' },
		{ id: 6, name: 'Usuario 6', score: 55, status: 'Suspendido' },
		{ id: 7, name: 'Usuario 7', score: 85, status: 'Completado' },
		{ id: 8, name: 'Usuario 8', score: 65, status: 'Pendiente' },
		{ id: 9, name: 'Usuario 9', score: 30, status: 'Suspendido' },
		{ id: 10, name: 'Usuario 10', score: 100, status: 'Completado' },
	];

	const [users] = React.useState([...initialUsers].sort((a, b) => b.score - a.score));

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
		<main className="w-full">
			<Hero className="relative z-0 w-full h-[70vh] bg-hero bg-cover bg-top shadow-inner" />
			<Search className="hidden relative z-20 w-full md:flex md:items-center" />
			<div className="py-16 md:mt-10">
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
			<section className="bg-slate-100">
				<div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-8 py-16 px-6">
					<div className="flex flex-col gap-4 w-full md:w-1/2">
						<h1 className="text-2xl font-bold uppercase text-center">Temas populares</h1>
						<div className="grid grid-cols-2 gap-4">
							{topicsPopular && topicsPopular.slice(0, 4).map((item, index) => <TopicCard key={index} item={item} />)}
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<TopFiveTable users={users} />
					</div>
				</div>
			</section>
		</main>
	);
}

export default HomePage;
