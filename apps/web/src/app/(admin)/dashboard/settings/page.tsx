import PageTitle from '../_components/shared/page-title'
import PageHeader from '../_components/shared/page-header'

export const metadata = {
  title: 'StorefrontX - Settings',
}

export default async function Page() {
  return (
    <>
      <PageHeader>
        <PageTitle title="Settings" />
      </PageHeader>
    </>
  )
}
