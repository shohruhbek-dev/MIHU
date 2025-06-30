import UzbekistanMap from "../../components/UzbekistanMap";
import SocialMedias from "../../components/socialMedias";
import VirtualReception from "../../components/about";
import HeroCarousel from "../../components/mainPic";
import LatestNews from "../../components/latestNews";
export default function Home() {


  return (
    <section className="py-4 px-4">

      <div className="w-[100%] m-auto h-[100vh] ">
        <HeroCarousel />
      </div>

      <LatestNews />

      <SocialMedias />
      <VirtualReception />
      <UzbekistanMap className="w-full h-auto" />
    </section>
  );
}
