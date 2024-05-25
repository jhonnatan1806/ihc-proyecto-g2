import React from 'react';
import Hero from '../components/home/Hero';
import Search from '../components/home/Search';
import LevelCard from '../components/home/LevelCard';
import TopicCard from '../components/home/TopicCard';
import { Button, Link } from '@nextui-org/react';

import levels from '../data/levels.json';
import topics from '../data/topics.json';

function HomePage() {

    const levelsPopular = levels.slice(0, 6);
    const topicsPopular = topics.slice(0, 4);

	const scrollRef = React.useRef(null);
	const [isDown, setIsDown] = React.useState(false);
	const [startX, setStartX] = React.useState(0);
	const [scrollLeft, setScrollLeft] = React.useState(0);

	const handleMouseDown = (e) => {
		setIsDown(true);
		setStartX(e.pageX - scrollRef.current.offsetLeft);
		setScrollLeft(scrollRef.current.scrollLeft);
	};

	const handleMouseLeave = () => {
		setIsDown(false);
	};

	const handleMouseUp = () => {
		setIsDown(false);
	};

	const handleMouseMove = (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - scrollRef.current.offsetLeft;
		const walk = (x - startX) * 2; // adjust scroll speed
		scrollRef.current.scrollLeft = scrollLeft - walk;
	};

	return (
		<main className='w-full'>
			<Hero className="relative z-0 w-full h-[60vh] bg-hero bg-cover bg-center shadow-inner" />
			<Search className="relative z-20 w-full flex items-center" />
			<section
				className="overflow-x-hidden max-w-screen-lg mx-auto mt-20 px-6 cursor-grab active:cursor-grabbing select-none"
				ref={scrollRef}
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}>
				<div className="grid grid-flow-col gap-6 w-max">
					{levelsPopular.map((item, index) => (
						<LevelCard key={index} item={item}/>
					))}
				</div>
			</section>
			<div className="max-w-screen-lg mx-auto flex flex-col items-end w-full px-6">
				<Button as={Link} href={`/levels`} color="primary">
					Ver mas
				</Button>
			</div>
            <section className='max-w-screen-lg mx-auto flex flex-col md:flex-row gap-4 mt-16'>
                <div className='flex flex-col gap-4 w-full md:w-1/2'>
                    <h1 className='text-2xl font-bold uppercase text-center'>Temas populares</h1>
                    <div className='grid grid-cols-2 gap-4'>
                        {
                            topicsPopular.map((item, index) => (
                                <TopicCard key={index} item={item} />
                            ))
                        
                        }
                    </div>
                </div>
                <div>
                    
                </div>
            </section>
		</main>
	);
}

export default HomePage;
