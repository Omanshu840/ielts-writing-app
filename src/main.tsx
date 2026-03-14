import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import {Home} from '@/pages/home'
import {AttemptDetails} from '@/pages/attempt-details'
import './index.css'
import { AttemptEssay } from '@/pages/attempt-essay'
import { Band9Essays } from '@/pages/band9-essays'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/ielts-writing-app', element: <Home /> },
      { path: '/ielts-writing-app/attempt/:attemptId', element: <AttemptDetails /> },
      { path: '/ielts-writing-app/attempt-essay/:taskType', element: <AttemptEssay /> },
      { path: '/ielts-writing-app/band9-essays', element: <Band9Essays /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)