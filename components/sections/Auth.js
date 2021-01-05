import Button from "../ui/Button";

export default function Auth () {
  return (
    <section className={`md:w-1/2 p-4 flex flex-col items-center justify-center text-center bg-green-100 space-y-6`}>
      <h2 className="text-4xl font-black flex flex-col">
        <span>👋</span>
        <span>Get started <i>using</i></span>
      </h2>
      <span className="flex flex-col items-center justify-center space-y-2">
        <Button>Google</Button>
        <p className="text-sm">
          By clicking the button above, you comply with our terms and conditions.
        </p>
      </span>
    </section>
  )
}