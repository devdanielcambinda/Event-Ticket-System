import React, {createContext, useState} from 'react';

interface AuthContextProps {
	children: React.ReactNode;
}

interface User {
	id:number
	name:string
	email:string
}

interface IAuthContext {
	user: User | null
	setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<AuthContextProps> = ({children}: AuthContextProps) => {

	const [user, setUser] = useState<User | null >(null);

	return (
	<AuthContext.Provider value={{user,setUser}}>
		{children}
	</AuthContext.Provider>)
}
