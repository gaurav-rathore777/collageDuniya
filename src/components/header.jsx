import Hero from '../pages/Hero';
import Navbar from './Navbar';

const Header = () => {
  return (
  <>
    <header style={{ background: '#222222', padding: '1rem' }}>
      <h1 className='text-white opacity-17'>CollageDuniya App</h1>
      <Navbar />
    </header>
      <Hero/>
  </>
  );
};

export default Header;
