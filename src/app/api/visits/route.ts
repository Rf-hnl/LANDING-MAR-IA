import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { path } = await req.json();
    
    console.log('API: Guardando visita para path:', path);

    await addDoc(collection(db, 'visits'), {
      path,
      timestamp: Timestamp.now(),
    });

    console.log('API: Visita guardada exitosamente');
    return NextResponse.json({ message: 'Visit recorded' }, { status: 200 });
  } catch (error) {
    console.error('Error recording visit:', error);
    return NextResponse.json({ message: 'Error recording visit' }, { status: 500 });
  }
}
