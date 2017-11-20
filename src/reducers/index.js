import { combineReducers } from "redux"
import posts from "./posts"
import pages from "./pages"
import user from "./user"
import intl from "./intl"

const rootReducer = combineReducers({ posts, pages, user, intl })

export default rootReducer
