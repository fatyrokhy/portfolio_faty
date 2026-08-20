import { usePortfolio } from './hooks/usePortfolio';
import { ThemeProvider } from './hooks/useTheme.jsx';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function Portfolio() {
  const { data, loading } = usePortfolio();
  if (loading) return <Loader />;

  return (
    <>
      <Navbar name={data?.profile?.name} />
      <main>
        <Hero profile={data?.profile} stats={data?.stats} />
        <Projects projects={data?.projects} />
        <Skills skills={data?.skills} />
        <Contact profile={data?.profile} />
      </main>
      <Footer profile={data?.profile} />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
