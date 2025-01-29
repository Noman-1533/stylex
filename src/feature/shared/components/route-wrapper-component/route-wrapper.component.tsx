import { PropsWithChildren } from "react";
import { useAuthedUser } from "../../../../provider";
import { useCartContext } from "../../../cart/components/cart-container-component/cart-container.component";
import Loader from "../loader-component/loader.component";

export default function RouteWrapper({ children }: PropsWithChildren) {
  const { loading: authLoading } = useAuthedUser();
  const { loading: cartsLoading } = useCartContext();
  if (authLoading || cartsLoading) return <Loader />;
  return children;
}
