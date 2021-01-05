import HR from "../ui/HR";
import Link from "../ui/Link";

export default function Footer () {
  return (
    <footer className="flex flex-col">
      <HR extraClassName="mt-0 w-4/5 place-self-center md:w-3/5 md:place-self-auto" />
      <span className="flex items-center space-x-2">
        <Link to="/legal/policy">Policy</Link>
        <Link to="/legal/terms">Terms</Link>
      </span>
      <span className="font-black">&copy; Relaxdome</span>
    </footer>
  )
}