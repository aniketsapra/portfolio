import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutSection from "./components/About";
import LeftNav from "./components/LeftNav";
import ProjectsSection from "./components/Project";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      <LeftNav />
    <div className="container mx-auto px-20 py-4">  
      <HeroSection /> 
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </div>
      <Footer />
    </main>
  );
}
