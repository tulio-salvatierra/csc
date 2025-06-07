import { useState, useEffect } from "react";

export function useMenuTransition(isOpen, delay = 400) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      setShouldRender(true);
    } else {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen, delay]);

  return shouldRender;
}