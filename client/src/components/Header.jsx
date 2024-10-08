import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-stone-800">
      <div className="flex justify-between items-center  max-w-6xl mx-auto p-5">
        <Link to='/'>
        <h1 className="font-bold">Veri App</h1>
        </Link>
        <ul className="flex gap-10">
          <Link to='/'>
          <li>Home</li>
          </Link>
          <Link to='/about'>
          <li>About</li>
          </Link>          
          <Link to='sign-in'>
          <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>

  )
}
