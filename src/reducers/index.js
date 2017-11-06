import { combineReducers } from "redux"
import posts from "./posts"
import pages from "./pages"
import user from "./user"
import { intlReducer } from "react-intl-redux"

const rootReducer = combineReducers({ posts, pages, user, intl: intlReducer })

export default rootReducer
