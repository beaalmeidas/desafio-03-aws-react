import React, { createContext, useState, ReactNode } from 'react';


// PROPRIEDADES NECESSÁRIAS PARA UM USUÁRIO
interface User {
	isOwner: boolean;
	isEditing: boolean;
	username: string;
	profilePicture: string;
	location: string;
	email: string;
	displayName: string;
	description: string;
	githubUrl: string;
	linkedinUrl: string;
	userHistory: string;
	userDisplayEmail: string;
}

// TIPOS DE DADOS PARA O CONTEXTO DO USUÁRIO
interface UserContextProps {
	user: User | null;
	setUser: (user: User) => void;
}


const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);
	
	return (
		<UserContext.Provider value={{ user, setUser }}>
		{children}
		</UserContext.Provider>
	);
};


export default UserContext;