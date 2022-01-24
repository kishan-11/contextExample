const initialState = {
  a: {},
  b: {}
}

export default function profileReducer(state = initialState, action) {
  switch(action.type) {
    case 'SAVE_PROFILE_PAGE_DATA': {
      const { x, y } = action.payload
      return {
        ...state,
        a,
        b
      }
    }
    case 'REMOVE_PROFILE_PAGE_DATA': {
      return {
        ...state,
        a: {},
        b: {}
      }
    }
    default:
      return state
  }
}
