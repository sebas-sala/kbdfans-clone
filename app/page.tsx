import Category from "@/components/Category";
import Categories from "../components/Categories";
import InstagramPostSection from "@/components/instagram-post-section";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className="pb-20 overflow-y-auto">
      <Container styles="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 h-96 pb-10">
        <Category
          text="Keycaps"
          img="https://cdn.shopify.com/s/files/1/1473/3902/files/purprite_ba_720x.jpg?v=1680582821"
          link="/collections/keycaps"
        />
        <Category
          text="Keyboard DIY kit"
          img="https://cdn.shopify.com/s/files/1/1473/3902/files/odin_75_720x.jpg?v=1680585767"
          link="/collections/keyboard"
        />
      </Container>
      <Categories />
      <InstagramPostSection />
    </main>
  );
}
