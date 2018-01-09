import messages from './msgs'

export default {
  posts: [
    {
      id: 1,
      title: 'Good luck',
      body: 'May the Force be with you',
      username: 'Yoda'
    },
    {
      id: 2,
      title: 'Reproach',
      body: 'You understimate the power of the Dark Side',
      username: 'Darth Vader'
    }
  ],
  pages: {
    total_pages: 1,
    current_page: 1
  },
  user: {
    key: 'g0vn0'
  },
  intl: {
    locale: 'en-US',
    messages: messages['en-US']
  }
}
