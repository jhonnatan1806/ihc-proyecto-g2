import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import Root from './Root';
import HomePage from './pages/Home.jsx';
import TopicsPage from './pages/Topics.jsx';
import LevelsPage from './pages/Levels.jsx';

import SpeakingPage from './pages/Speaking.jsx';
import VocabularyPage from './pages/Vocabulary.jsx'; 

import BotPage from './pages/Bot.jsx';
import ProfilePage from './pages/Profile.jsx';
import QuizzPage from './pages/Quizz.jsx';
import TableChallenge from './pages/TableChallenge.jsx';
import SettingsPage from './pages/Settings.jsx';

import TestGabrielPage2 from './pages/TestGabriel2.jsx';
import TestGabrielPage3 from './pages/TestGabriel3.jsx';
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
                path: '/test-gabriel2',
                element: <TestGabrielPage2 />,
            },
            {
                path: ':topic/',
                element: <TopicsPage />,

            },
            {
                path: ':topic/:level',
                element: <LevelsPage />,
            },
            {
                path: ':topic/:level/speaking',
                element: <SpeakingPage />,
            },
            {
                path: ':topic/:level/vocabulary',
                element: <VocabularyPage />,
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
			},
			{
				path: '/test-gabriel3',
				element: <TestGabrielPage3/>
			}
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<RouterProvider router={router} />
	</NextUIProvider>
);
