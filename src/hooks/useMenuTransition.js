import { useState, useEffect } from "react";

export function useMenuTransition(isOpen, delay = 400) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      setShouldRender(true); // 👈 Cuando abres el menú, lo montamos inmediatamente
    } else {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
      // 👈 Cuando cierras el menú, esperamos 'delay' ms antes de desmontarlo
    }

    return () => clearTimeout(timeoutId); // 👈 Limpieza si el componente se desmonta rápido
  }, [isOpen, delay]);

  return shouldRender;
}