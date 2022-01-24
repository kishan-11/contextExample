import { createStore } from "redux"
import rootReducer from "./Reducer/root"

const store = createStore(rootReducer)

// state = {
//   profile: {
//     a: {},
//     b: {}
//   },
//   home: {
//     x: {},
//     y: {}
//   }
// }

// dispatch
// getState

export default store
