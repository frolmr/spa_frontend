import { combineReducers } from "redux"
import posts from "./posts"
import pages from "./pages"
import user from "./user"

const rootReducer = combineReducers({ posts, pages, user })

export default rootReducer
