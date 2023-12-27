import { useEffect, useState } from "react";

function useClient() {
  const clientState = useState<boolean>(false);
  useEffect(() => {
    clientState[1](true);
  }, []);

  return clientState;
}

export default useClient;