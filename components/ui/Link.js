import NextLink from 'next/link';

export default function Link ({ to, external = false, extraClassName = "", children, ...props }) {
  return (
    <NextLink href={to} passHref>
      <a className={`underline ${extraClassName}`} { ...props }>
        { children }
      </a>
    </NextLink>
  )
}
