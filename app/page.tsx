import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>
        Hello World
      </h1>
      <Link href="/quiz">Quiz Creation</Link>
      <ProductCard />
    </main>
  )
}
