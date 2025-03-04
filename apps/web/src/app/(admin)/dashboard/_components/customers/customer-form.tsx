import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { Customer } from '@/types/customer'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

interface CustomerFormProps {
  action: (formData: FormData) => void
  customer?: Customer
  children?: React.ReactNode
}

export default function CustomerForm({
  action,
  customer,
  children,
}: CustomerFormProps) {
  return (
    <>
      <form action={action}>
        <div className="mb-4 grid lg:grid-cols-[1fr_300px] gap-4 items-start">
          <div className="space-y-4">
            <Card>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      name="firstName"
                      defaultValue={customer?.firstName}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      name="lastName"
                      defaultValue={customer?.lastName}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    defaultValue={customer?.email}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="space-y-4"></CardContent>
          </Card>
        </div>

        <Separator />

        <div className="flex items-center justify-end gap-2">{children}</div>
      </form>
    </>
  )
}
