import React from 'react';

function Error({ message }) {
  // Verifica se uma mensagem de erro foi passada como prop
  if (!message) {
    return null; // Se não houver mensagem de erro, não exibe nada
  }

  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
}

export default Error;