import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Tools from "@/components/Tools";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Tools />
      <Pricing />
      <Testimonials />
      <Faq />
      <RegisterForm />
      <Footer />
    </div>
  );
}
