import Link from "../components/ui/Link";

export default function _404 () {
  return (
    <div className="space-y-4">
      <h2 className="text-6xl font-black">404!</h2>
      <p className="text-lg">The page you requested was not found!</p>
      <Link to="/" extraClassName="font-black">Go to home</Link>.
    </div>
  )
}