import { redirect } from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
// Esta página solo se muestra cuando la aplicación se crea estáticamente (salida: 'exportar')

export default function RootPage() {
  redirect('/en');
}