import Head from 'next/head';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Your Game Title</title>
      </Head>

      {/* Logo Bar */}
      <div className='logo-bar'>
        <img src="/pawth_logo.png" alt="Pawth Logo" />
      </div>

      {/* Menu */}
      <div className='menu'>
        <Link href="/new-game" className='menu-button'>
          New Game
        </Link>
        <Link href="/bear-heroes" className='menu-button'>
          Bear Heroes
        </Link>
        <Link href="/help" className='menu-button'>
          Help
        </Link>
      </div>
    </div>
  );
};

export default Home;
