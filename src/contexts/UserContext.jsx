import { createContext, useContext, useEffect, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();

const initialState = {
  fullName: '',
  profBio: '',
  skills: [],
};

function reducer(_, action) {
  switch (action.type) {
    case 'user/createProfile':
    case 'user/EditProfile':
      return action.payload;
    default:
      throw new Error('Uknown action type');
  }
}

function UserProvider({ children }) {
  const [storedUser, setStoredUser] = useLocalStorage(
    initialState,
    'skillSync_user',
  );

  const [user, dispatch] = useReducer(reducer, storedUser);

  useEffect(
    function () {
      setStoredUser(user);
    },
    [user, setStoredUser],
  );

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error('UserContext was used outside of UserProvider');

  return context;
}

/* eslint-disable */
export { UserProvider, useUser };
