import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routers/index.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient.ts'
import UserProvider from './data/context/userContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <UserProvider>
                <AppRouter />
            </UserProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
