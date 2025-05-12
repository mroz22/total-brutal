import Author from "./author";
import type AuthorType from "../interfaces/author";

const Authors = ({ authors }: { authors: AuthorType[] }) => {
  return (
    <div
      style={{
        fontSize: "0.8em",
        color: "black",
        fontWeight: "bold",
        marginTop: "0.5em",
      }}
    >
      <span className="text-sm">autor: </span>
      {authors.map((a, index) => {
        return (
          <span key={index}>
            <Author link={a.link} name={a.name} />
            {index < authors.length - 1 && <span className="text-sm">, </span>}
          </span>
        );
      })}
    </div>
  );
};

export default Authors;
