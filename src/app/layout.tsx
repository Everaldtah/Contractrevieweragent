import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ContractReview AI - Legal Document Analysis',
  description: 'AI-powered contract review and risk analysis',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white">
        {children}
      </body>
    </html>
  )
}
