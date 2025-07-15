'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, query, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import Chart from 'chart.js/auto';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Users, Calendar, LogOut, Mail, User, RefreshCw } from 'lucide-react';

export default function AdminPanel() {
  const [formData, setFormData] = useState<any[]>([]);
  const [allVisitsData, setAllVisitsData] = useState<any[]>([]); // New state for raw visits data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    dailyVisits: 0,
    weeklyVisits: 0,
    totalVisits: 0,
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
      const formSubmissionsQuery = query(collection(db, 'formSubmissions'));
      const formSubmissionsSnapshot = await getDocs(formSubmissionsQuery);
      const formSubmissionsData = formSubmissionsSnapshot.docs.map(doc => doc.data());

      const visitsQuery = query(collection(db, 'visits'));
      const visitsSnapshot = await getDocs(visitsQuery);
      const visitsData = visitsSnapshot.docs.map(doc => doc.data());
      setAllVisitsData(visitsData); // Store raw visits data

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);

      setStats({
        totalSubmissions: formSubmissionsData.length,
        dailyVisits: visitsData.filter(d => {
          const visitDate = d.timestamp?.toDate ? d.timestamp.toDate() : new Date(d.timestamp || d.visitDate);
          return visitDate.getTime() >= today.getTime();
        }).length,
        weeklyVisits: visitsData.filter(d => {
          const visitDate = d.timestamp?.toDate ? d.timestamp.toDate() : new Date(d.timestamp || d.visitDate);
          return visitDate.getTime() >= weekAgo.getTime();
        }).length,
        totalVisits: visitsData.length,
      });
    } catch (err) {
      setError('Error al cargar las estadísticas');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/admin/login');
    } catch (err) {
      setError('Error al cerrar sesión');
    }
  };

  // Crear gráficas
  useEffect(() => {
    if (!loading && allVisitsData.length > 0) {
      const ctx = document.getElementById('visitsChart') as HTMLCanvasElement;
      if (ctx) {
        // Destroy existing chart instance if it exists
        const existingChart = Chart.getChart(ctx);
        if (existingChart) {
          existingChart.destroy();
        }

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({length: 7}, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (6 - i));
              return date.toLocaleDateString();
            }),
            datasets: Array.from(new Set(allVisitsData.map(d => d.path))).map((path, index) => {
              const colors = [
                'hsl(24, 95%, 53%)', // Orange
                'hsl(120, 70%, 50%)', // Green
                'hsl(240, 70%, 50%)', // Blue
                'hsl(300, 70%, 50%)', // Purple
                'hsl(60, 70%, 50%)',  // Yellow
                'hsl(0, 70%, 50%)',   // Red
                'hsl(180, 70%, 50%)', // Cyan
              ];
              const borderColor = colors[index % colors.length];
              const backgroundColor = borderColor.replace(')', ', 0.1)'); // Add transparency

              return {
                label: `Visitas en ${path === '/' ? 'Inicio' : path}`,
                data: Array.from({length: 7}, (_, i) => {
                  const date = new Date();
                  date.setDate(date.getDate() - (6 - i));
                  return allVisitsData.filter(d => {
                    const visitDate = d.timestamp?.toDate ? d.timestamp.toDate() : new Date(d.timestamp || d.visitDate);
                    return visitDate.toLocaleDateString() === date.toLocaleDateString() && d.path === path;
                  }).length;
                }),
                borderColor: borderColor,
                backgroundColor: backgroundColor,
                tension: 0.1
              };
            })
          }
        });
      }
    }
  }, [loading, allVisitsData]);

  // Crear gráfica de formularios
  useEffect(() => {
    if (!loading && formData.length > 0) {
      const ctx = document.getElementById('formsChart') as HTMLCanvasElement;
      if (ctx) {
        const existingChart = Chart.getChart(ctx);
        if (existingChart) {
          existingChart.destroy();
        }

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Array.from({length: 7}, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (6 - i));
              return date.toLocaleDateString();
            }),
            datasets: [{
              label: 'Formularios Diarios',
              data: Array.from({length: 7}, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() - (6 - i));
                return formData.filter(f => {
                  const submissionDate = f.timestamp?.toDate ? f.timestamp.toDate() : new Date(f.timestamp || f.visitDate);
                  return submissionDate.toLocaleDateString() === date.toLocaleDateString();
                }).length;
              }),
              backgroundColor: 'hsl(210, 40%, 40%)',
              borderColor: 'hsl(210, 40%, 50%)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  precision: 0
                }
              }
            }
          }
        });
      }
    }
  }, [loading, formData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Panel de Administración</h1>
          <div className="flex gap-4">
            <Button 
              onClick={async () => {
                setLoading(true);
                await loadFormData();
                await loadStats();
                setLoading(false);
              }} 
              variant="outline" 
              className="flex items-center gap-2"
              disabled={loading}
            >
              <RefreshCw className="h-4 w-4" />
              Refrescar Datos
            </Button>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive text-destructive rounded-lg">
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground light:gray-500">
                Total Envíos
              </CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground light:gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalSubmissions}</div>
              <p className="text-xs text-muted-foreground light:gray-500">
                Formularios recibidos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground light:gray-500">
                Visitas Diarias
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground light:gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.dailyVisits}</div>
              <p className="text-xs text-muted-foreground light:gray-500">
                Hoy
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground light:gray-500">
                Visitas Semanales
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground light:gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.weeklyVisits}</div>
              <p className="text-xs text-muted-foreground light:gray-500">
                Últimos 7 días
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Gráfica de Visitas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <canvas id="visitsChart" className="w-full h-64"></canvas>
          </CardContent>
        </Card>

        {/* Forms Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Gráfica de Formularios Recibidos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <canvas id="formsChart" className="w-full h-64"></canvas>
          </CardContent>
        </Card>

        {/* Forms Table */}
        <Card>
          <CardHeader>
            <CardTitle>Formularios Recibidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              {formData.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground light:gray-500">
                  No hay formularios recibidos aún
                </div>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 text-muted-foreground light:gray-500 font-medium">Fecha</th>
                      <th className="text-left py-3 px-4 text-muted-foreground light:gray-500 font-medium">Nombre</th>
                      <th className="text-left py-3 px-4 text-muted-foreground light:gray-500 font-medium">Email</th>
                      <th className="text-left py-3 px-4 text-muted-foreground light:gray-500 font-medium">Mensaje</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="py-3 px-4 text-foreground">
                          {new Date(item.timestamp?.toDate?.() || item.timestamp).toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-foreground">{item.name}</td>
                        <td className="py-3 px-4 text-foreground">{item.email}</td>
                        <td className="py-3 px-4 text-foreground max-w-xs truncate">
                          {item.message}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
