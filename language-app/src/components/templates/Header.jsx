import React from 'react';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection, Link, User } from '@nextui-org/react';
import { TbWorld } from 'react-icons/tb';
import { FaChevronDown } from 'react-icons/fa';

const routes = [
	{ path: '/', name: 'Inicio' },
	{ path: '/quizz', name: 'Aprender' },
	{ path: '/bot', name: 'Practicar' },
];

const Navbar = () => {
	return (
		<nav className="flex flex-row gap-8">
			<Link id="logo" href={'/'} className="font-bold text-lg">
				Logo
			</Link>
			<ul className="flex flex-row gap-4">
				{routes.map((route, index) => (
					<li key={index}>
						<Link href={route.path} underline="hover" size="sm">
							{route.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

function Header() {
	const [userLogged, setUserLogged] = React.useState(false);
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(['ES']));
	const selectedValue = React.useMemo(() => Array.from(selectedKeys).map((key) => key.toUpperCase()).join(''), [selectedKeys]);

	const handleLogin = () => {
		setUserLogged(!userLogged);
	};

	return (
		<section className="sticky inset-0 z-50 backdrop-blur-md bg-white/75 ">
			<header className="container mx-auto h-16 flex items-center justify-between">
				<Navbar />
				<div className="flex flex-row gap-4">
					{!userLogged ? (
						<>
							<Button color="primary" variant="flat" onClick={handleLogin}>
								Acceder
							</Button>
							<Button color="primary" variant="solid">
								Registrarse
							</Button>
						</>
					) : (
						<>
							<Dropdown placement="bottom-start">
								<DropdownTrigger>
									<User
										as="button"
										avatarProps={{
											src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
										}}
										className="transition-transform"
										name="Jane Doe"
									/>
								</DropdownTrigger>
								<DropdownMenu aria-label="User Actions" variant="flat">
                                    <DropdownSection title="Opciones" showDivider>  
									<DropdownItem key="settings" href='/profile'>Mi perfil</DropdownItem>
									<DropdownItem key="analytics">Recompensas</DropdownItem>
									<DropdownItem key="configurations">Ajustes</DropdownItem>
                                    </DropdownSection>
									<DropdownItem key="logout" color="danger" onClick={handleLogin}>
										Cerrar sesión
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</>
					)}
					<Dropdown placement="bottom-start">
						<DropdownTrigger>
							<Button color="primary" variant="flat" endContent={<TbWorld size={16} />}>
								{selectedValue}
							</Button>
						</DropdownTrigger>
						<DropdownMenu
							aria-label="Static Actions"
							variant="flat"
							disallowEmptySelection
							selectionMode="single"
							selectedKeys={selectedKeys}
							onSelectionChange={setSelectedKeys}>
							<DropdownItem key="es">Español</DropdownItem>
							<DropdownItem key="pr">Português</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</header>
		</section>
	);
}

export default Header;

