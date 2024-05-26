import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import Root from './Root';
import HomePage from './pages/Home.jsx';
import TopicPage from './pages/Topic.jsx';
import BotPage from './pages/Bot.jsx';
import ProfilePage from './pages/Profile.jsx';
import QuizzPage from './pages/Quizz.jsx';
import TableChallenge from './pages/TableChallenge.jsx';
import SettingsPage from './pages/Settings.jsx';
import TestGabrielPage from './pages/TestGabriel.jsx';
import TestGabrielPage2 from './pages/TestGabriel2.jsx';

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
                path: '/test-gabriel',
                element: <TestGabrielPage />,
            },
            {
                path: '/test-gabriel2',
                element: <TestGabrielPage2 />,
            },
            {
                path: ':topic/',
                element: <TopicPage />,

            },
			{
				path: '/profile',
				element: <ProfilePage />,
			},
			{
				path: '/bot',
				element: <BotPage />,
			},
			{
				path: '/quizz',
				element: <QuizzPage />,
			},
			{
				path: '/table-challenge', 
				element: <TableChallenge />,
			},
			{
				path: '/settings',
				element: <SettingsPage/>
			}
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<RouterProvider router={router} />
	</NextUIProvider>
);
