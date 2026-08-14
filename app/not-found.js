import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">عذراً، الصفحة غير موجودة!</h2>
      <p className="text-slate-600 mb-6">الصفحة التي تبحث عنها قد تكون حُذفت أو غير متوفرة حالياً.</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        العودة للرئيسية
      </Link>
    </div>
  )
}
