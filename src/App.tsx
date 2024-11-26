import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import Demo from "./demo/demo";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
