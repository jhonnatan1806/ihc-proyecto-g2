import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  LevelCard  from '../components/home/LevelCard';
import BreadCrumbs from '../components/templates/Breadcrumbs';
import { getTopic } from '../services/dataFeching';

function TopicsPage() {

    const params = useParams();

    const [topic, setTopic] = useState(null);

    useEffect(() => {
        async function fetchData() {
        const response = await getTopic(params.topic);
        setTopic(response);
        }
        fetchData();
    }
    , [params.topic]);

    const routesBreacrumbs = [
        {
            title: 'Inicio',
            url: '/',
        },
        {
            title: topic?.title,
            url: topic?.slug,
        }
    ];  

	return (
        <main className='max-w-screen-lg mx-auto px-6 py-4 flex flex-col gap-4'>
            <BreadCrumbs items={routesBreacrumbs} />
            <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {topic && topic?.levels.map((level) => (
                    <LevelCard key={level.id} item={level} topic={topic.slug} />
                ))}
            </section>
        </main>
    );
}

export default TopicsPage;
