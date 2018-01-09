import messages from '../msgs'

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
    messages: messages[locale]
  }
}
