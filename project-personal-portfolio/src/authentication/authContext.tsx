import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebaseConfig.js';
import {
	signInWithPopup,
	signOut,
	GithubAuthProvider,
	onAuthStateChanged,
} from 'firebase/auth';


const AuthContext = createContext<any>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<any>(null);

	const provider = new GithubAuthProvider();

	// FUNÇÃO DE LOGIN
	const login = async () => {
		try {
		const result = await signInWithPopup(auth, provider);
		setUser(result.user);
		} catch (error) {
		console.error("Erro ao fazer login:", error);
		}
	};

	// FUNÇÃO DE LOGOUT
	const logout = async () => {
		try {
		await signOut(auth);
		setUser(null);
		} catch (error) {
		console.error("Erro ao fazer logout:", error);
		}
	};

	// RASTREADOR DE ESTADO DA AUTENTICAÇÃO
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


// HOOK PARA O CONTEXTO DA AUTENTICAÇÃO
export const useAuth = () => {
	return useContext(AuthContext);
};