import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebaseConfig.js';
import {
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

// Criação do contexto de autenticação
const AuthContext = createContext<any>(null);

// Componente do provedor de autenticação
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Estado do usuário

  // Configuração do provedor do GitHub
  const provider = new GithubAuthProvider();

  // Função para fazer login
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  // Função para fazer logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Escuta mudanças no estado da autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
export const useAuth = () => {
  return useContext(AuthContext);
};
