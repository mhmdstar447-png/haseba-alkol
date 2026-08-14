import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl text-emerald-600 flex items-center gap-2">
          🧮 حاسبة الكل
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-emerald-600 transition">الرئيسية</Link>
          <Link href="/about" className="hover:text-emerald-600 transition">من نحن</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition">اتصل بنا</Link>
        </nav>
      </div>
    </header>
  )
}
