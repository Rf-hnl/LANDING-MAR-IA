import { useState, useCallback } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export const useFormSubmission = (collectionName: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (formData: any) => {
    setLoading(true);
    setError(null);

    try {
      // Agregar timestamp y datos de visita
      const submissionData = {
        ...formData,
        timestamp: Timestamp.now(),
        visitDate: new Date().toISOString(),
      };

      // Guardar en Firestore
      await addDoc(collection(db, collectionName), submissionData);
      return { success: true };
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
      return { success: false, error: 'Error al enviar el formulario' };
    } finally {
      setLoading(false);
    }
  }, [collectionName]);

  return { handleSubmit, loading, error };
};
