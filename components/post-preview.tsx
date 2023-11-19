import CoverImage from './cover-image'
import Link from 'next/link'
import type AuthorType from '../interfaces/author'
import Authors from './authors';

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: AuthorType[]
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  author,
  slug,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between" style={{ 'borderTop': '2px black solid'}}>
      
      <div className="flex flex-col md:max-w-sm">
       <h3 className="text-3xl mb-3 leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline text-sm"
          >
            {date} 
            {'\n'}
            {title}
          </Link>
        </h3>
        <Authors authors={author} />
      </div>

      <div className='md:max-w-4xl'>
          <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

    </div>
  )
}

export default PostPreview
