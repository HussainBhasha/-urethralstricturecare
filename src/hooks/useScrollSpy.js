import { useCallback, useEffect, useRef, useState } from 'react';

export function useScrollSpy(ids, options = {}) {
  const [activeId, setActiveId] = useState('');
  const observer = useRef(null);

  const clearObserver = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }
  }, []);

  useEffect(() => {
    clearObserver();

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0,
        ...options
      }
    );

    elements.forEach((el) => observer.current.observe(el));

    return clearObserver;
  }, [ids, options, clearObserver]);

  return activeId;
}
