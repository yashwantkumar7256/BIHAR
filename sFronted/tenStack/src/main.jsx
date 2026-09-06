import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AppRoutes from './Routes/AppRoutes.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
 <QueryClientProvider client={queryClient}>
      <AppRoutes/>
    </QueryClientProvider>
)
