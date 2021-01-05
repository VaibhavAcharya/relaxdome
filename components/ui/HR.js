import { BRAND_COLOR } from "../../consts";

export default function HR ({ extraClassName, ...props }) {
  return (
    <hr className={`my-2 border-t-2 border-${BRAND_COLOR}-500 ${extraClassName}`} { ...props } />
  )
}