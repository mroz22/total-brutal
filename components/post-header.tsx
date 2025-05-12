import Authors from "./authors";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type AuthorType from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: AuthorType[];
  excerpt: string;
  price: string;
  address: string;
  size: number;
};

const PostHeader = (props: Props) => {
  const symbol = ",";
  return (
    <div style={{ marginTop: "2em" }}>
      <PostTitle>{props.title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Authors authors={props.author} />
        {/* <div> {excerpt}</div> */}
      </div>
      <div style={{ margin: "2em 0", fontSize: "0.8em" }}>
        <div>
          {props.date}
          {symbol} {props.address}
          {symbol} {props.size} m2{symbol} {props.price}
        </div>
        {/* <table>
          <tbody>
            <tr>
              <td>adresa</td>
              <td>{props.address}</td>
            </tr>

            <tr>
              <td>velikost</td>
              <td>{props.size} m2</td>
            </tr>

            <tr>
              <td>cena</td>
              <td>{props.price}</td>
            </tr>

            <tr>
              <td>datum</td>
              <td>{props.date}</td>
            </tr>
          </tbody>
        </table> */}
      </div>
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      {/* <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Authors authors={author} />
        </div>

        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div> */}
    </div>
  );
};

export default PostHeader;
