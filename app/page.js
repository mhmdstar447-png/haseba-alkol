import { calculatorsData } from '@/lib/calculators'
import CategoryGrid from '@/components/CategoryGrid'
import SearchBar from '@/components/SearchBar'

export default function HomePage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-4 py-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800">
          حاسبة الكل — All-in-One Calculators
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          مجموعتك الشاملة من الأدوات والحاسبات الذكية: الطبية، المالية، والرياضية بدقة عالية.
        </p>
        <SearchBar />
      </div>

      <CategoryGrid calculators={calculatorsData} />
    </div>
  )
}
