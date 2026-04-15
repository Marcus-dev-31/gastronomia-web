import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutMarcos from "@/components/sections/AboutMarcos";
import YouTubeVideos from "@/components/sections/YouTubeVideos";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import Testimonials from "@/components/sections/Testimonials";
import Advisory from "@/components/sections/Advisory";
import Newsletter from "@/components/sections/Newsletter";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ScrollReveal>
        <AboutMarcos />
      </ScrollReveal>
      <ScrollReveal>
        <YouTubeVideos />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedCourses />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <Advisory />
      </ScrollReveal>
      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>
    </>
  );
}