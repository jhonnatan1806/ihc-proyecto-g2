import React, { useState } from 'react';
import TopicLevelHeader from '../components/levels/TopicLevelHeader';
import PhrasePlayer from '../components/speaking/PhrasePlayer';
import Timer from '../components/speaking/Timer';
import MicrophoneRecorder from '../components/speaking/MicrophoneRecorder';
import PhraseList from '../components/speaking/PhraseList';

function TestGabrielPage3() {
  const topic = 'Viajes';
  const level = '12';
  const initialPhrase = { portuguese: 'Olá, como você está?', spanish: 'Hola, ¿cómo estás?' };

  const [isRecording, setIsRecording] = useState(false);
  const [phrase, setPhrase] = useState(initialPhrase);
  const [showPhraseList, setShowPhraseList] = useState(true);

  const handleRecord = (recording) => {
    setIsRecording(recording);
  };

  const handlePlay = () => {
    console.log('Reproduciendo frase...');
  };

  const handleRepeat = () => {
    console.log('Repetiendo frase...');
  };

  const handleSelectPhrase = (newPhrase) => {
    setPhrase(newPhrase);
    setIsRecording(false);
  };

  const toggleShowPhraseList = () => {
    setShowPhraseList(!showPhraseList);
  };

  return (
    <div className="container mx-auto p-4 max-h-5xpl flex flex-col items-center">
      <div className='w-full max-w-5xl mb-5'>
        <TopicLevelHeader topic={topic} level={level} />
      </div>
      <div className="flex-grow flex flex-row items-start justify-between w-full max-w-5xl">
        {showPhraseList && (
          <PhraseList
            phrases={[
              initialPhrase,
              { portuguese: 'Bom dia!', spanish: '¡Buenos días!' },
              { portuguese: 'Boa noite.', spanish: 'Buenas noches.' },
              { portuguese: 'Como vai?', spanish: '¿Cómo va?' },
              { portuguese: 'Tudo bem?', spanish: '¿Todo bien?' },
              { portuguese: 'Até logo!', spanish: '¡Hasta luego!' },
              { portuguese: 'Obrigado!', spanish: '¡Gracias!' },
              { portuguese: 'Desculpe.', spanish: 'Perdón.' },
              { portuguese: 'Eu te amo.', spanish: 'Te amo.' },
              { portuguese: 'Feliz aniversário!', spanish: '¡Feliz cumpleaños!' },
            ]}
            onSelect={handleSelectPhrase}
          />
        )}
        <div className="flex-grow flex flex-col items-center justify-between p-4">
          <Timer isRecording={isRecording} />
          <PhrasePlayer
            phrasePortuguese={phrase.portuguese}
            phraseSpanish={phrase.spanish}
            onPlay={handlePlay}
            onRepeat={handleRepeat}
          />
          <div className="mt-1">
            <MicrophoneRecorder onRecord={handleRecord} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestGabrielPage3;
