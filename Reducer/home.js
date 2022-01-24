const initialState = {
  x: {},
  y: {}
}

export default function homeReducer(state = initialState, action) {
  console.log('inside reducer', action)
  switch(action.type) {
    case 'SAVE_HOME_PAGE_X_DATA': {
      const { x } = action.payload
      return {
        ...state,
        x
      }
    }
    case 'REMOVE_HOME_PAGE_DATA': {
      return {
        ...state,
        x: {},
        y: {}
      }
    }
    default:
      return state
  }
}
