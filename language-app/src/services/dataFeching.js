import topics from '../data/topics.json';

export async function getTopics() {
    const response = topics;
    const data = response.data;
    return data;
}

export async function getTopic(slug) {
    const response = topics;
    const data = response.data;
    
    for(let i = 0; i < data.length; i++) {
        if(data[i].slug === slug) {
            return data[i];
        }
    }
    return null;
}