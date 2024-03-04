import BestSellers from '@/components/public/BestSellers'
import CategoriesSection from '@/components/public/CategoriesSection'
import PurchaseSteps from '@/components/public/PurchaseSteps'

export default function Home() {
  return (
    <div className='flex flex-col items-center w-full overflow-hidden'>
        <CategoriesSection />
        <BestSellers />
        <PurchaseSteps />
    </div>
  )
}
