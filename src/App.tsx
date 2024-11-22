import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Demo from "./demo/demo";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Demo />
    </QueryClientProvider>
  );
}

export default App;
