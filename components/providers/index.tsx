import { NuqsAdapter } from "nuqs/adapters/next/app";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return <NuqsAdapter>{children}</NuqsAdapter>;
};

export default Providers;
