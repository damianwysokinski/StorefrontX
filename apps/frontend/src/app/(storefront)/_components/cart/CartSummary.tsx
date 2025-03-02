import { redirect } from 'next/navigation'

export default function CartSummary() {
  const handleCheckoutClick = () => {
    redirect('/checkout')
  }

  return (
    <div className="p-4 rounded-lg border border-gray-200">
      <div>
        <div>
          <div className="space-y-4 pb-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>Subtotal</div>
              <div>$0</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Discount</div>
              <div>$0</div>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <div>Grand total</div>
            <div className="text-xl">$0</div>
          </div>
        </div>

        <button
          onClick={handleCheckoutClick}
          className="cursor-pointer py-2.5 bg-black text-white rounded-lg w-full"
        >
          Checkout now
        </button>
      </div>
    </div>
  )
}
