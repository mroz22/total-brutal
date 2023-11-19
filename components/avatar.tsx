import Link from 'next/link'

type Props = {
  name: string
  link: string
}

const Avatar = ({ link, name }: Props) => {
  return (
    <Link href={link}  className="hover:underline text-sm"> {name}</Link>
    
  )
}

export default Avatar
