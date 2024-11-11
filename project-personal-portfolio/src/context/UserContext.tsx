// UserContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface User {
  profilePicture: string;
  location: string;
  email: string;
  introduction: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
}

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
