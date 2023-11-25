import React from 'react'
import { RecoilRoot } from 'recoil'
import SideMenu from './components/SideMenu'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import TaskSummary from './features/tasks/components/TaskSummary'
import TaskList from './features/tasks/components/TaskList/TaskList'
import TaskProgress from './features/tasks/components/TaskProgress/TaskProgress'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <TaskSummary />
        <h1>Home</h1>
      </div>
    ),
    
  },
  {
    path: 'task-list',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <TaskList />
        <h1>Task List</h1>
      </div>
    ),
  },
  {
    path: 'task-progress',
    element: (
      <div style={{ display: 'flex' }}>
        <SideMenu /> {/* Ditambahkan */}
        <TaskProgress />
        <h1>Task Progress</h1>
      </div>
    ),
  },
])

function App(): JSX.Element {
  return (
    // Apit dengan RecoilRoot
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App