import { useEffect } from "react";

export function useWindow(event, funcion) {
  useEffect(() => {
    //https://lapalabradeldia.com/images/logo_32x32.png
    window.addEventListener(event, funcion);

    return () => {
      window.removeEventListener(event, funcion);
    };
  });
}