import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-red-500 px-4 py-4'>
      <h1 >Vijay</h1>
      
      <div className='flex gap-5'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </div>
    </nav>
  );
};

export default Navbar;