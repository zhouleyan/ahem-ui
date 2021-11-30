import { useRef } from 'react';

export function useIsRendering(): boolean {
  let isRendering = useRef(true);
  console.log(isRendering);
  return false;
}
