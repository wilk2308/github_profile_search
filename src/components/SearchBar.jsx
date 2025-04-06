import React, { useState } from 'react';
import lupaIcon from '../../public/lupa-icon.png'; // Importe o ícone da lupa

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Digite o nome do usuário do GitHub"
      />
      <div className="search-button" onClick={handleSubmit}> {/* Adicione onClick */}
        <img src={lupaIcon} alt="Lupa" />
      </div>
    </form>
  );
}

export default SearchBar;