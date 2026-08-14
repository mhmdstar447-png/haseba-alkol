import Link from 'next/link'
import { calculators } from '@/data/calculators'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg px-4">
        <h1 className="text-4xl font-extrabold mb-4">حاسبة الكل — منصتك الشاملة للحسابات الدقيقة</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          احسب أدق المعدلات والبيانات الطبية، المالية، والرياضية بسهولة وسرعة في مكان واحد.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <Link 
            key={calc.slug} 
            href={`/calculators/${calc.slug}`}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3">
                {calc.category}
              </span>
              <h2 className="text-xl font-bold mb-2 text-slate-800">{calc.title}</h2>
              <p className="text-slate-600 text-sm">{calc.description}</p>
            </div>
            <div className="mt-4 text-blue-600 text-sm font-semibold flex items-center gap-1">
              افتح الحاسبة ⬅️
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
