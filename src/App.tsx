import { QueryClient, QueryClientProvider } from 'react-query';

import RootRoutes from './routes';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootRoutes />
    </QueryClientProvider>
  );
}

export default App;
