import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import Demo from "./demo/demo";
import { Outlet } from "react-router-dom";
import { Header } from "./feature";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
