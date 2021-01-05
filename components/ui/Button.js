import { useRouter } from 'next/router';

export default function Button ({ extraClassName = "", outlined = false, to, onClick = (() => {}), children, ...props }) {
  const Router = useRouter();

  return (
    <button className={`leading-one px-4 py-1 ${outlined ? `border-2 border-black bg-white text-black` : `bg-black text-white`} text-lg flex items-center justify-center rounded-lg ${extraClassName}`} onClick={
      function () {
        onClick();
        if (to) {
          Router.push(to)
        }
      }
    } { ...props }>
      { children }
    </button>
  )
}