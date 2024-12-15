import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
createBrowserRouter,
RouterProvider,
Route,
Link
} from 'react-router-dom' 
import Homepage from './Routes/Homepage.jsx'
import PostListPage from './Routes/PostListPage.jsx'
import SinglePostPage from './Routes/SinglePostPage.jsx'
import LoginPage from './Routes/LoginPage.jsx'
import Write from './Routes/Write.jsx'
import RegisterPage from './Routes/RegisterPage.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter ([
 {
  element : <MainLayout/>,
  children :[
    {
      path:"/",
      element:(
        <Homepage/>
      )
    },
    {
      path:"/posts",
      element:(
        <PostListPage/>
      )
    },
    {
      path:"/:slug",
      element:(
        <SinglePostPage/>
      )
    },
    {
      path:"/write",
      element:(
        <Write/>
      )
    },
    {
      path:"/login",
      element:(
        <LoginPage/>
      )
    },
    {
      path:"/register",
      element:(
        <RegisterPage/>
      )
    }
  ]
 }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
    
  </StrictMode>
);