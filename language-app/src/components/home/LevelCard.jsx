import React from 'react';
import { Button, Card, CardBody, Image, CardFooter } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from '@nextui-org/link';

function LevelCard(props) {
	return (
		<Link href={`/${props?.topic}/${props?.item.id}`} className="flex flex-col items-start">
			<Button color="primary" className="w-fit rounded-none rounded-t-lg px-8 py-4">
				Nivel {props?.item.id}
			</Button>
			<Card className="select-none flex flex-col items-center p-0 rounded-none rounded-tr-lg rounded-b-lg h-full bg-white">
				<CardBody className="overflow-visible">
					<Image
						alt="Card background"
						className="object-cover aspect-square rounded-md select-none"
						src={props?.item.image}
						draggable="false"
						width={300}
						onDragStart={(e) => e.preventDefault()}
					/>
				</CardBody>
				<CardFooter className="flex flex-col gap-1 items-start max-w-80 pt-0">
					<h4 className="font-bold text-lg line-clamp-1">{props?.item.title}</h4>
					<small className="text-default-500 text-left line-clamp-2">{props?.item.description}s</small>
					<div className="flex flex-col items-center w-full">
						<Button color="default" variant="light" endContent={<FaArrowRight />} className="uppercase">
							Aprende
						</Button>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}

export default LevelCard;
