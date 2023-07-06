import Container from "@/components/Container"
import FilterSection from "@/components/FilterSection"
import Products from "@/components/Products"

export default function AllPage() {
  return (
    <>
      <h2 className='text-center text-6xl font-bold mb-20'>Products</h2>
      <FilterSection />
      <Products />
    </>
  )
}
