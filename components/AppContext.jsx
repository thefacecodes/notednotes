import React, { useReducer } from "react";
import { createContext } from "react";

export const NotesContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  notes: [],
  modalOpen: false,
  modalContent: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AddNote":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case "USER_ACTIVE":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case "NO_USER":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "openModal":
      return {
        ...state,
        modalOpen: true,
        modalContent: action.payload,
      };

    case "closeModal":
      return {
        ...state,
        modalOpen: false,
      };

    default:
      break;
  }
};

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const NoteState = { state, dispatch };
  return (
    <NotesContext.Provider value={NoteState}>{children}</NotesContext.Provider>
  );
};
