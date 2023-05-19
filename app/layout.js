import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Sucious',
  description: 'A facebook like app for Web3, where the user has control',
  viewport: "width=device-width, initial-scale=1",
  generator: "Hugo 0.108.0",

}


export default function RootLayout({ children }) {



  return (
    <html lang="en" className="h-100">
      <body className="d-flex h-100 text-center text-bg-dark ">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
