import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'stream-chat-react/dist/css/v2/index.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter> {/*it means we can use any feature or application coming from react-router */}
        <QueryClientProvider client={queryClient}>
          <App/>
        </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
