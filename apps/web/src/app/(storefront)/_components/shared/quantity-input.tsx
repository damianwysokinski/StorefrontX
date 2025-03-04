interface QuantityInputProps {
  id?: string
  quantity: number
  onQuantityChange: (newQuantity: number, id: string) => void
}

export default function QuantityInput({
  id,
  quantity,
  onQuantityChange,
}: QuantityInputProps) {
  if (!id) return

  const handleDecrease = () => {
    const newQuantity = quantity - 1
    onQuantityChange(newQuantity, id)
  }

  const handleIncrease = () => {
    const newQuantity = quantity + 1
    onQuantityChange(newQuantity, id)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value)
    onQuantityChange(newQuantity, id)
  }

  return (
    <div className="quantity-input inline-flex border border-gray-200 rounded-md w-24 h-[36px]">
      <button
        className="px-2.5 cursor-pointer text-center text-xl"
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        className="w-full text-center"
        type="number"
        value={quantity}
        onChange={handleInputChange}
      />
      <button
        className="px-2.5 cursor-pointer text-center text-xl"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  )
}
