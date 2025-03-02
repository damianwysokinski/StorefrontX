export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-4 lg:px-6 py-2.5">
      <div className="mx-auto max-w-screen-xl">
        <p className="text-center">
          Copyright ©{new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
