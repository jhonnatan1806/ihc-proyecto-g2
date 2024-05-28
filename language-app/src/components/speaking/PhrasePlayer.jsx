import React, { useState } from 'react';
import { Card, Button, Progress } from '@nextui-org/react';
import { FaPlay, FaRedo } from 'react-icons/fa';

function PhrasePlayer({ phrasePortuguese, phraseSpanish, onPlay, onRepeat }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay();
    setTimeout(() => setIsPlaying(false), 3000); // Simula 3 segundos de reproducción
  };

  const handleRepeat = () => {
    setIsPlaying(true);
    onRepeat();
    setTimeout(() => setIsPlaying(false), 3000); // Simula 3 segundos de repetición
  };

  return (
    <Card className="text-center mb-2 p-6">
      <h2 className="text-blue-800 mb-2 text-3xl font-semibold">{phrasePortuguese}</h2>
      <h3 className="text-gray-600 mb-4 text-lg">{phraseSpanish}</h3>
      <div className="flex justify-center items-center mb-4">
        <Progress value={isPlaying ? 100 : 0} max={100} animated={isPlaying ? "true" : "false"} />
      </div>
      <div>
        <Button
          onClick={handlePlay}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 mr-4"
        >
          <FaPlay className="inline-block mr-2" /> Escuchar
        </Button>
        <Button
          onClick={handleRepeat}
          className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-700 transition duration-300"
        >
          <FaRedo className="inline-block mr-2" /> Repetir
        </Button>
      </div>
    </Card>
  );
}

export default PhrasePlayer;
