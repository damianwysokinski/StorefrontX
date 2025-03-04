import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="h-full flex-col items-center justify-center flex">
      <Spinner />
    </div>
  )
}
