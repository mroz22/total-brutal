import CoverImage from "./cover-image";
import Link from "next/link";
import type AuthorType from "../interfaces/author";
import Authors from "./authors";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: AuthorType[];
  slug: string;
};

const PostPreview = ({ title, coverImage, date, author, slug }: Props) => {
  return (
    <div>
      <div>
        <h3>
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline text-sm"
          >
            {date}
            {"\n"}
            {title}
          </Link>
        </h3>
        <Authors authors={author} />
      </div>

      <div>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </div>
  );
};

export default PostPreview;
