import AboutMarcos from "@/components/sections/AboutMarcos";
import Advisory from "@/components/sections/Advisory";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import Hero from "@/components/sections/Hero";
import Newsletter from "@/components/sections/Newsletter";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import YouTubeVideos from "@/components/sections/YouTubeVideos";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutMarcos />
      <YouTubeVideos />
      <FeaturedCourses />
      <Testimonials />
      <Advisory />
      <Newsletter />
    </>
  );
}
