import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ label, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="flex-grow shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
        <button  className="ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:shadow-outline">
            <img src="/images/change_password.png" alt="Change_Password" className="w-8 h-8" />
		</button>
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordInput;
