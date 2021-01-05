export default function About () {
  return (
    <section className="md:w-1/2 flex flex-col space-y-2">
      <h2 className="text-4xl font-black">Short-lived <u>chat rooms</u>, quick & easy.</h2>
      <p className="text-lg">
        Log in to create short-lived chat rooms that can be joined by anyone using a generated link.
      </p>
      <div>
        <h3 className="text-xl font-black">Characteristics :</h3>
        <ul className="">
          <li>✨ Up to 50 participants.</li>
          <li>🔒 No chat logs are preserved after room deletion.</li>
          <li>⚡ Registration is not required to participate in the rooms.</li>
        </ul>
      </div>
    </section>
  )
}