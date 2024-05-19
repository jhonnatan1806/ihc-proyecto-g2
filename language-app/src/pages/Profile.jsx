import React from 'react';
import UserProgressProfile from '../components/UserProgress'
import PracticeDays from '../components/PracticeCounter';
import LanguageProgress from '../components/LanguageProgress';
import StudyGoal from '../components/StudyGoal';

function ProfilePage() {
  const imageUrl = 'https://i.pravatar.cc/150?u=a04258114e29026702d';
  const progress = 70; // Porcentagem de progresso
  const name = "Jana Doe"
  const username = "@janadoe"
  const nacionalidade = 'Brasil'
  const consecutiveDays = 10
  const goal = 15


  const flagSrc = nacionalidade === 'Brasil' ? '/images/brasil_flag.jpeg' : '/images/Peru_flag.png';

  return (
    <div className="relative flex flex-col items-center">
      <div className = 'w-full bg-blue-700 py-4 rounded-[10px]'>

		<UserProgressProfile imageUrl={imageUrl} progress={progress}/>
		<div className='inline-block ml-4 bg-white rounded-[30px] p-4'>
			<h1 className="flex items-center">
				{name}
				<img src={flagSrc} alt={nacionalidade} className='ml-2 w-6 h-6 rounded-[10px]'/>
			</h1>
			<h1>{username}</h1>
		</div>
		
	  </div>
	  <div className='w-full bg-white flex-grow'>
	  	<PracticeDays days = {consecutiveDays} />
		<LanguageProgress progress={progress} language='Português'/>
		<StudyGoal goal={goal} consecutiveDays={consecutiveDays}/>

	  </div>
	</div>
  );
}

export default ProfilePage;
