import messages from '../messages'
import { flattenMessages } from "../utils"

const locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US'

export default {
  posts: [],
  pages: {},
  user: {},
  intl: {
    locale: locale,
    messages: flattenMessages(messages[locale])
  }
}
