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
      <div></div>

      <div>
        <h3
          style={{
            fontSize: "0.8em",
            position: "relative",

            top: "6.5em",
            left: "5.5em",

            backgroundColor: "white",
            display: "inline-block",
            padding: "0 0.1rem",
            textDecoration: "none",
          }}
        >
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
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </div>
  );
};

export default PostPreview;
