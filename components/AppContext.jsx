import React, { useReducer } from 'react'
import { createContext } from 'react'

export const NotesContext = createContext()

const initialState = {
    isAuthenticated: false,
    user: null,
    notes: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "AddNote":
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }

        case "USER_ACTIVE":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }

        case "NO_USER":
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
    
        default:
            break;
    }
}


export const AppContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const NoteState = {state, dispatch}
  return (
    <NotesContext.Provider value={NoteState}>
        {children}
    </NotesContext.Provider>
  )
}
