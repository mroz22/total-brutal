import Link from 'next/link'

type Props = {
  name: string
  link: string
}

const Author = ({ link, name }: Props) => {
  return (
    <Link href={link} className="hover:underline text-sm"> {name}</Link>
  )
}

export default Author
