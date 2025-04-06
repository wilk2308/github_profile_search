import React from 'react';
import loadingIcon from '/public/loading.svg'; // Importe o ícone de loading

function Loading() {
  return (
    <div className="loading">
      <p>Carregando...</p>
      <img src={loadingIcon} alt="Carregando..." className="loading-icon" /> {/* Adicione o ícone */}
    </div>
  );
}

export default Loading;