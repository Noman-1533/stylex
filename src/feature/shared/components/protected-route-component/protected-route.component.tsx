import { PropsWithChildren } from "react";
import { useAuthedUser } from "../../../../provider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const { authenticated } = useAuthedUser();
  return authenticated ? children : <Navigate to={"/login"} replace />;
}
