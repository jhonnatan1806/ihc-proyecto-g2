import { Button } from '@nextui-org/react';
import React from 'react';

function Hero(props) {
	return (
		<section {...props}>
			<div className="absolute inset-0 z-0 bg-black/30 "></div>
			<div className="relative z-10 max-w-screen-lg mx-auto h-full flex items-center justify-center">
				<div className="flex flex-col items-center gap-8 text-white">
					<h2 className="text-6xl font-bold">Aprende español y Português</h2>
					<Button color="primary" size="lg" radius="sm" className="py-6 px-8 w-fit">
						¡COMIENZA AHORA!
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
