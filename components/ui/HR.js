export default function HR ({ extraClassName, ...props }) {
  return (
    <hr className={`my-2 border-t-2 border-green-500 ${extraClassName}`} { ...props } />
  )
}