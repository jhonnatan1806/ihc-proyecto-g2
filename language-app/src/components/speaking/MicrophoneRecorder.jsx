import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { FaMicrophone } from 'react-icons/fa';

function MicrophoneRecorder({ onRecord }) {
  const [recording, setRecording] = useState(false);

  const handleRecord = () => {
    setRecording(!recording);
    onRecord(!recording);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <Button
        auto
        shadow
        onClick={handleRecord}
        className={`rounded-full w-12 h-12 flex items-center justify-center text-2xl ${recording ? 'bg-red-500' : 'bg-blue-500'}  transition duration-300 text-white`}
      >
        <FaMicrophone />
      </Button>
    </div>
  );
}

export default MicrophoneRecorder;
