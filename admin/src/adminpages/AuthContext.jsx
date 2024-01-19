import { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'CLEAR_TOKEN':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { token: localStorage.getItem('token') || null });
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch({ type: 'SET_TOKEN', payload: token });
    }
  }, []);

  const setToken = (token) => {
    localStorage.setItem('token', token);
    dispatch({ type: 'SET_TOKEN', payload: token });
  };

  const clearToken = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'CLEAR_TOKEN' });
  };

  return (
    <AuthContext.Provider value={{ token: state.token, setToken, clearToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
