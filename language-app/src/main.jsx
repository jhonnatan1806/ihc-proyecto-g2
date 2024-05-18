import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import Root from './Root';
import HomePage from './pages/Home.jsx';
import BotPage from './pages/Bot.jsx';
import ProfilePage from './pages/Profile.jsx';
import QuizzPage from './pages/Quizz.jsx';
import TableChallenge from './pages/TableChallenge.jsx';

import './index.css';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'profile',
				element: <ProfilePage />,
			},
			{
				path: 'bot',
				element: <BotPage />,
			},
			{
				path: 'quizz',
				element: <QuizzPage />,
			},
			{
				path: 'table-challenge', 
				element: <TableChallenge />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<RouterProvider router={router} />
	</NextUIProvider>
);
