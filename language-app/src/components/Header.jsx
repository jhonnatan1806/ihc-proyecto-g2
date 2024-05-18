import React from 'react';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';
import {Button} from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";

const Header = ({ user }) => {
  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-3xl font-bold text-slate-800">Chat Bot</h1>
      <div className="flex items-center space-x-4">        
        <Button color="danger" variant="bordered" endContent={<FaChevronDown />}>
            settings
        </Button>  
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
