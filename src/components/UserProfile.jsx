import React from 'react';

function UserProfile({ user }) {
  // Verifica se o objeto 'user' foi passado como prop
  if (!user) {
    return null; // Se não houver dados do usuário, não exibe nada
  }

  // Desestrutura as propriedades do objeto 'user' para facilitar o uso
  const { avatar_url, name, bio } = user;

  return (
    <div className="user-profile">
      <img src={avatar_url} alt={`Foto de perfil de ${name}`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfile;