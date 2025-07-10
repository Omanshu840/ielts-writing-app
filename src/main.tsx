import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import {Home} from '@/pages/home'
import {AttemptDetails} from '@/pages/attempt-details'
import './index.css'
import { AttemptEssay } from '@/pages/attempt-essay'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'attempt/:attemptId', element: <AttemptDetails /> },
      { path: 'attempt-essay/:taskType', element: <AttemptEssay /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)