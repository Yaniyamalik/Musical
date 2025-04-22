
import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Whychosseus from "@/components/Whychosseus";
import Testimonalcards from "@/components/Testimonalcards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/ [0.96] antialised bg-grid-white/[0.02]">
   <Herosection/>
   <FeaturedCourses/>
   <Whychosseus/>
   <Testimonalcards/>
   <UpcomingWebinars/>
   <Instructors/>
   <Footer/>
   </main>
  );
}
 