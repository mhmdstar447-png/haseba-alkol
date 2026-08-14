import './globals.css'

export const metadata = {
  title: 'حاسبة الكل',
  description: 'منصة شاملة للحاسبات الدقيقة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  )
}
