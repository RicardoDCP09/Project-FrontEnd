import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Membership = React.lazy(() => import('./views/pages/membership/membership.js'))
const Classes = React.lazy(() => import('./views/pages/classes_management/classes.js'))
const User = React.lazy(() => import('./views/pages/users/users.js'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/membership', name: 'Membership', element: Membership },
  { path: '/classes', name: 'Classes', element: Classes },
  { path: '/user', name: 'Users', element: User },
]

export default routes
