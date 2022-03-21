import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className="Card">
      
      <h1 className="text-3xl font-bold underline text-red">
        Hello world!
      </h1>
      
      <Link to="/">Back</Link>




    </div>
  );
}

export default Card;