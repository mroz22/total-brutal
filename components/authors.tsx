import Author from './author'
import type AuthorType from '../interfaces/author';

const Authors = ({ authors }: { authors: AuthorType[]} ) => {
  console.log('authors', authors);
  return (
    <>
    {authors.map((a, index) => {
      return <Author link={a.link} name={a.name} key={index} />
    })}    
    </>
  )
}

export default Authors
