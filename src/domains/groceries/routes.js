// De routes voor het groceries-domein

import Overview from './pages/Overview.vue'
import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'

const routes = [
  { path: '/',  redirect: '/groceries' },
  { path: '/groceries', component: Overview, name: 'groceries.overview' },
  { path: '/groceries/create', component: Create, name: 'groceries.create'  },
  { path: '/groceries/edit/:id', component: Edit, name: 'groceries.edit'  },
]

export default routes;
