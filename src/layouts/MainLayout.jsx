import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
