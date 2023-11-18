import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between" style={{ 'borderTop': '2px black dashed'}}>
      <div className="flex flex-col">
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
        <div>
        {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
        </div>
        
        <div>
        <Avatar name={author.name} picture={author.picture} />

      </div>
    </div>
    <div className='md:w-5/6 max-w-3xl'>
        <CoverImage slug={slug} title={title} src={coverImage} />
    </div>
       
    </div>
  )
}

export default PostPreview
