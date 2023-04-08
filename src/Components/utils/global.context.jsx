import { createContext, useReducer, useMemo, useCallback, useEffect } from 'react';

// Define the initial state
const initialState = {
  theme: 'light',
  data: [],
  loading: true,
  error: null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_FAV':
      const newFav = action.payload;
      const isInFavorites = state.favorites.some((fav) => fav.id === newFav.id);
      if (!isInFavorites) {
        const newFavorites = [...state.favorites, newFav];
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return { ...state, favorites: newFavorites };
      } else {
        return state;
      }
    default:
      return state;
  }
};

// Create the context object
export const ContextGlobal = createContext();

// Create the context provider component
export const ContextProvider = ({ children }) => {
  // Use the useReducer hook to manage state updates
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define the fetchData function using useCallback
  const fetchData = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }, []);

  // Define the toggleTheme function using useCallback
  const toggleTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE_THEME' });
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, fetchData, toggleTheme, dispatch }), [
    state,
    fetchData,
    toggleTheme,
    dispatch,
  ]);

  // Call fetchData to update state.data before using it in other components
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const bodyClasses = document.body.classList;
    bodyClasses.remove(state.theme === 'light' ? 'dark' : 'light');
    bodyClasses.add(state.theme);
  }, [state.theme])

  // Render the provider with the memoized context value
  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
