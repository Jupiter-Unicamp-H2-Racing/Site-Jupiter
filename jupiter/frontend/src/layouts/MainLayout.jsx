import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ParticleField from '../components/ParticleField/ParticleField';

export default function MainLayout() {
  return (
    <>
      <ParticleField />
      <div className="app-shell">
        <Header />
        <main className="page">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
