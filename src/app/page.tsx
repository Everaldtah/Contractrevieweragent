import { FileSearch, AlertTriangle, CheckCircle, Clock, ArrowRight } from 'lucide-react'

export default function Home() {
  const features = [
    { icon: FileSearch, title: 'Analyze Contracts', desc: 'Upload any contract for instant analysis' },
    { icon: AlertTriangle, title: 'Risk Detection', desc: 'Identify unusual or risky clauses' },
    { icon: CheckCircle, title: 'Compliance Check', desc: 'Compare against legal standards' },
    { icon: Clock, title: 'Save Hours', desc: 'Review contracts in minutes, not hours' },
  ]

  const pricing = [
    { name: 'Basic', price: '$99', features: ['10 contracts/mo', 'Standard analysis', 'Email support'] },
    { name: 'Professional', price: '$249', features: ['50 contracts/mo', 'Advanced analysis', 'Priority support', 'Custom rules'] },
    { name: 'Enterprise', price: '$499', features: ['Unlimited contracts', 'API access', 'Dedicated support', 'Custom training'] },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileSearch className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold">ContractReview AI</span>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg font-medium">
            Try Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Review Contracts in <span className="text-emerald-400">Minutes</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            AI-powered contract analysis. Identify risks, unusual clauses, and compliance issues instantly.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-xl font-medium flex items-center gap-2">
              Upload Contract <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <f.icon className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan, i) => (
              <div key={i} className="rounded-2xl p-8 bg-white/5 border border-white/10">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-lg font-medium border border-white/20 hover:bg-white/5">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 ContractReview AI. Built for TheClawVault.</p>
        </div>
      </footer>
    </main>
  )
}
