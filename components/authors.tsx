import Author from './author'
import type AuthorType from '../interfaces/author';

const Authors = ({ authors }: { authors: AuthorType[]} ) => {
  console.log('authors', authors);
  return (
    <div className='break-keep'>
      <span className='text-sm'>(C)</span>
      {authors.map((a, index) => {
        return (
          <span key={index} >
        <Author link={a.link} name={a.name} />
        {index < authors.length - 1 && <span className='text-sm'>, </span>}
        </span>

        )
      })}    
    </div>
  )
}

export default Authors
