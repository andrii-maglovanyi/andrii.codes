import React, { createContext, useReducer } from "react"

export const SET_EXPORT_TYPE = "SET_EXPORT_TYPE"

const initialState = {
  exportType: "brief",
}

export const context = {
  state: initialState,
  dispatch: () => {},
}

const Store = createContext(context)

const applyExportType = (state, action) => ({
  ...state,
  exportType: action.payload,
})

const StateProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case SET_EXPORT_TYPE: {
        return applyExportType(state, action)
      }
      default:
        return state
    }
  }, initialState)

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}

export { Store, StateProvider }
