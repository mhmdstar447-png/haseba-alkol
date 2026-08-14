import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-center text-sm text-slate-500">
      <div className="container mx-auto px-4 space-y-4">
        <div className="flex justify-center gap-6">
          <Link href="/privacy" className="hover:underline">سياسة الخصوصية</Link>
          <Link href="/about" className="hover:underline">عن الموقع</Link>
          <Link href="/contact" className="hover:underline">تواصل معنا</Link>
        </div>
        <p>© {new Date().getFullYear()} حاسبة الكل — جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
