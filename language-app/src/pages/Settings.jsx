import React, { useState } from 'react';
import TextInput from '../components/TextImput';
import SelectInput from '../components/SelectImput';
import PasswordInput from '../components/PasswordInput';

function SettingsPage() {
  const [formData, setFormData] = useState({
    name: 'Jana Doe',
    email: 'janadoe@gmail.com',
    nationality: 'Brasil',
    password: 'JANADOE',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add forms management functions
    console.log(formData);
  };

  return (
    <main className="w-full max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Configurações da Conta</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <SelectInput
          label="Nacionalidade"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          options={[
            { value: '', label: 'Selecione sua nacionalidade' },
            { value: 'brasil', label: 'Brasil' },
            { value: 'peru', label: 'Peru' },
            // Adicione outras nacionalidades conforme necessário
          ]}
        />
        <PasswordInput
          label="Senha"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Salvar
          </button>
        </div>
      </form>
    </main>
  );
}

SettingsPage.propTypes = {
  // Defina as propTypes conforme necessário, se houver
};

export default SettingsPage;
