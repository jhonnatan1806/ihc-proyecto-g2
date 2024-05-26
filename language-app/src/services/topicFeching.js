import deportes from '../data/deportes.json';
import lobasico from '../data/lobasico.json';

export async function getTopic(slug) {
    switch (slug) {
        case 'deportes':
            return deportes;
        case 'lo-basico':
            return lobasico;
        default:
            return null;
    }
}