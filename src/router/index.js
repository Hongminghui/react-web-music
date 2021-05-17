

import MHDiscover from '@/pages/discover'
import MHFriend from '@/pages/friend'
import MHMine from '@/pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    component: MHDiscover,
  },
  {
    path: '/discover',
    component: MHDiscover,
  },
  {
    path: '/friend',
    component: MHFriend,
  },
  {
    path: '/mine',
    component: MHMine,
  },
]

export default routes