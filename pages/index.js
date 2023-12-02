import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cara Pesan Makanan Online di Ayomakan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cara Pesan Makanan Online di Ayomakan" />
        <p className="description">
          Get started Cara Pesan Makanan Online di Ayomakan
        </p>
        <h2>Cara Pesan Makanan Online di Ayomakan</h2>
          <p>Anda dapat <a href="https://sidikul.com/pesan-makanan-online/" target="_blank">pesan makanan online</a> di Ayomakan melalui langkah-langkah berikut:</p>
          <p>1. Buka website Ayomakan di browser Anda.</p>
          <p>2. Cari dan pilih restoran atau menu favorit Anda.</p>
          <p>3. Geser ke bawah dan klik "Pesan" untuk memilih makanan yang diinginkan.</p>
          <p>Anda tidak perlu mengunduh aplikasi khusus, karena layanan pesan makanan online Ayomakan dapat diakses langsung melalui website mereka.&nbsp;</p>
          <p>Dengan fitur-fitur yang mereka tawarkan, Anda dapat menikmati kemudahan dalam memesan makanan favorit Anda tanpa ribet.</p>
      </main>

      <Footer />
    </div>
  )
}
