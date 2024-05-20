import React from 'react';
import LevelButton from '../components/LevelButton';
import UserProgressProfile from '../components/UserProgress';
import { Link } from 'react-router-dom';

function QuizzPage() {
  const handleClick = (level) => {
    // alert(`Nível ${level} clicado!`);
  };
  const handleProfileClick = () => {
    alert('Perfil clicado!');
  };
  const imageUrl = 'https://i.pravatar.cc/150?u=a04258114e29026702d';
  const progress = 70; // Porcentagem de progresso

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center bg-green-100"
    //   style={{ backgroundImage: 'url(/images/background_levels.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Link to='/profile'>  
        <div className="absolute top-4 right-4  cursor-pointer">
            <UserProgressProfile imageUrl={imageUrl} progress={progress} />
        </div>
      </Link>
      <div className="absolute top-10 left-1/4">
        <LevelButton level={1} stars={2} onClick={() => handleClick(1)} />
      </div>
      <div className="absolute top-32 right-1/4">
        <LevelButton level={2} stars={4} onClick={() => handleClick(2)} />
      </div>
      <div className="absolute bottom-60 left-1/4">
        <LevelButton level={3} stars={3} onClick={() => handleClick(3)} />
      </div>
      <div className="absolute bottom-40 right-1/4">
        <LevelButton level={4} stars={5} onClick={() => handleClick(4)} />
      </div>
    </div>
  );
}

export default QuizzPage;
