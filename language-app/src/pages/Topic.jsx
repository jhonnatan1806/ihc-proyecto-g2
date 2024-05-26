import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTopic } from '../services/topicFeching';

function TopicPage() {
    // obtengo el parametro :topic 
    // localhost:3000/deportes -> parametro:deportes
    // localhost:3000/hogar-salud -> parametro:hogar-salud
    const params = useParams();

    // estados en react
    const [topic, setTopic] = useState(null);
    
    // primer render sin dependencias
    useEffect(() => {
        async function fetchData() {
        const response = await getTopic(params.topic);
        setTopic(response);
        }
        fetchData();
    }
    , [params.topic]);

    // params.topic;
	return (
        <div>
            TopicPage con parametro {topic && topic[0].title}
        </div>
    );
}

export default TopicPage;
