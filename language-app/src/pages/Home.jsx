import React from 'react';
import { Button, Input } from '@nextui-org/react';
import { FaSearch } from 'react-icons/fa';

function HomePage() {
	return (
		<main>
			<section className="w-full h-[55vh] bg-hero bg-cover bg-top relative shadow-inner">
				<div className="absolute inset-0 z-10 bg-black/20 "></div>
				<div className="relative z-20 max-w-lg mx-auto h-full flex flex-col justify-center gap-2">
                    <form className='flex gap-2'>
                        <Input 
                            placeholder='Ingresa tu busqueda ...'
                            radius="md"
                            classNames={{
                                inputWrapper:['h-12']
                            }}
                        />
                        <Button color='primary' isIconOnly size='lg'>
                            <FaSearch className="pointer-events-none"/>
                        </Button>
                    </form>
				</div>
			</section>
		</main>
	);
}

export default HomePage;
