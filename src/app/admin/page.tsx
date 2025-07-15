'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import Chart from 'chart.js/auto';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function AdminPanel() {
  const [formData, setFormData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    dailyVisits: 0,
    weeklyVisits: 0,
  });
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/admin/login');
      }
    });

    // Cargar datos iniciales
    loadFormData();
    loadStats();

    return () => unsubscribe();
  }, [router]);

  const loadFormData = async () => {
    try {
      const q = query(collection(db, 'formSubmissions'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFormData(data);
      setLoading(false);
    } catch (err) {
      setError('Error al cargar los datos');
    }
  };

  const loadStats = async () => {
    try {
      const q = query(collection(db, 'formSubmissions'));
      const querySnapshot = await getDocs(q);
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);

      const data = querySnapshot.docs.map(doc => doc.data());
      
      setStats({
        totalSubmissions: data.length,
        dailyVisits: data.filter(d => 
          new Date(d.visitDate).getTime() >= today.getTime()
        ).length,
        weeklyVisits: data.filter(d => 
          new Date(d.visitDate).getTime() >= weekAgo.getTime()
        ).length,
      });
    } catch (err) {
      setError('Error al cargar las estadísticas');
    }
  };

  // Crear gráficas
  useEffect(() => {
    if (!loading && formData.length > 0) {
      const ctx = document.getElementById('visitsChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({length: 7}, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (6 - i));
              return date.toLocaleDateString();
            }),
            datasets: [{
              label: 'Visitas Diarias',
              data: Array.from({length: 7}, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() - (6 - i));
                return formData.filter(f => 
                  new Date(f.visitDate).toLocaleDateString() === date.toLocaleDateString()
                ).length;
              }),
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
          }
        });
      }
    }
  }, [loading, formData]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Envíos</h2>
          <p className="text-3xl font-bold text-blue-600">{stats.totalSubmissions}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Visitas Diarias</h2>
          <p className="text-3xl font-bold text-green-600">{stats.dailyVisits}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Visitas Semanales</h2>
          <p className="text-3xl font-bold text-purple-600">{stats.weeklyVisits}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Gráfica de Visitas</h2>
        <canvas id="visitsChart"></canvas>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Formularios Recibidos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b">Fecha</th>
                <th className="px-6 py-3 border-b">Nombre</th>
                <th className="px-6 py-3 border-b">Email</th>
                <th className="px-6 py-3 border-b">Mensaje</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-4">{new Date(item.visitDate).toLocaleString()}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
