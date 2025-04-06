import React from 'react';

function Error({ title, message, paragraph }) {
  if (!message) {
    return null;
  }

  return (
    <div className="error">
      {title && <h2>{title}</h2>}
      {paragraph && <p className="error-paragraph">{paragraph}</p>} {/* Renderiza o parágrafo se ele for fornecido */}
      <p>{message}</p>
    </div>
  );
}

export default Error;