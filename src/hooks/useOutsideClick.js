import { useEffect } from 'react';

export const useOutsideClick = (ref, handleOutsideClick) => {
  useEffect(() => {
    function handleOutsideClickWrapper(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleOutsideClick();
      }
    }
    document.addEventListener('mousedown', handleOutsideClickWrapper);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClickWrapper);
    };
  }, [ref, handleOutsideClick]);
};
