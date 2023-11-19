import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}


const MoreStories = ({ posts }: Props) => {
  console.log(posts)

  return (
    <section>
      <div>
        {posts.sort(function (a, b) {
          if (a.slug < b.slug) {
            return -1;
          }
          if (a.slug > b.slug) {
            return 1;
          }
          return 0;
        }).map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
