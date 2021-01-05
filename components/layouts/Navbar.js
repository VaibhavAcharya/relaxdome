export default function Navbar () {
  return (
    <header className="flex items-center justify-center sm:justify-start space-x-2">
      <span>
        <img src="/favicon.svg" alt="Logo" width={32} height={32} className="h-auto w-8 sm:w-12" />
      </span>
      <h1 className="text-lg sm:text-3xl font-black">Relaxdome</h1>
    </header>
  )
}