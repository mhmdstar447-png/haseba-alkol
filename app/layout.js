import './globals.css'

export const metadata = {
  title: 'حاسبة الكل — All-in-One Calculators',
  description: 'منصة شاملة للحاسبات الطبية، المالية، والرياضية الدقيقة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
