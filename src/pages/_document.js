import Navbar from '@/components/Navbar/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <body className='bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
