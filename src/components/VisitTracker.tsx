"use client";

import { useEffect } from "react";

export default function VisitTracker() {
  useEffect(() => {
    const recordVisit = async () => {
      try {
        const fullPath = window.location.pathname + window.location.hash;
        console.log('Registrando visita:', fullPath);
        await fetch('/api/visits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path: fullPath }),
        });
      } catch (error) {
        console.error('Error recording visit:', error);
      }
    };

    // Record initial visit
    recordVisit();

    // Listen for hash changes (for anchor links on the same page)
    const handleHashChange = () => {
      recordVisit();
    };

    window.addEventListener('hashchange', handleHashChange);

    // Clean up event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return null;
}