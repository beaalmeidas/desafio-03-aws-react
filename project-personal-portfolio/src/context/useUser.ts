import { useContext } from 'react';
import UserContext from './UserContext';

// HOOK QUE PERMITE ACESSAR O USUÁRIO EM QUALQUER COMPONENTE
export const useUser = () => {
	const context = useContext(UserContext);
	
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}

	return context;
};