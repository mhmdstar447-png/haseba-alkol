export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-100">
      <h1 className="text-3xl font-bold mb-6 text-slate-800 text-center">تواصل معنا</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">الاسم الكامل</label>
          <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="اكتب اسمك هنا" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
          <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="name@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">الرسالة</label>
          <textarea rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="اكتب استفسارك أو اقتراحك هنا..."></textarea>
        </div>
        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
          إرسال الرسالة
        </button>
      </form>
    </div>
  )
}
