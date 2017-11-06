export const changeLocale = (locale, messages) => {
  return {
    type: 'CHANGE_LOCALE',
    locale,
    messages
  }
}
