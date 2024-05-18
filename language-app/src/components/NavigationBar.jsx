import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-blue-700 text-white py-4 text-center">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#" className="hover:underline">Inicio</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Perfil</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Bot</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
