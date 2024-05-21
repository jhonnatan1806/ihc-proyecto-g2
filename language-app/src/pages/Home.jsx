import React from 'react';
import Hero from '../components/home/Hero';
import Search from '../components/home/Search';

import { Chip, Card, CardHeader, CardBody, Image, CardFooter } from '@nextui-org/react';
import levels from '../data/levels.json';

function HomePage() {
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
		<main>
			<Hero className="relative z-0 w-full h-[60vh] bg-hero bg-cover bg-center shadow-inner" />
			<Search className="relative z-20 w-full flex items-center" />
			<section
				className="overflow-x-hidden w-full mt-20 p-4 cursor-grab active:cursor-grabbing select-none"
				ref={scrollRef}
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}>
				<div className="grid grid-flow-col gap-6 w-max">
					{levels.map((item, index) => (
						<Card key={index} className="select-none flex flex-col items-center gap-4 bg-whiterounded-lg h-full">
							<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
								<Chip color={`${item.level > 3 ? item.level > 6 ? "danger": "warning" :"primary"}`} size="sm">
									Nivel {item.level}
								</Chip>
							</CardHeader>
							<CardBody className="overflow-visible py-0">
								<Image
									alt="Card background"
									className="object-cover aspect-square rounded-md select-none"
									src="https://nextui.org/images/hero-card-complete.jpeg"
									draggable="false"
                                    width={300}
									onDragStart={(e) => e.preventDefault()}
								/>
							</CardBody>
							<CardFooter className="flex flex-col gap-1 items-start w-full pt-0">
								<h4 className="font-bold text-lg line-clamp-1">{item.title}</h4>
								<small className="text-default-500 text-left">{item.description}s</small>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
}

export default HomePage;
