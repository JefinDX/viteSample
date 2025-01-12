// import ImageCarousel from "./components/ImageCarousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Img } from "react-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageGrid from "./components/ImageGrid";
import SurveyForm from "./components/SurveyForm";

const images = [
  {
    src: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/9/q3COO3aU_b6370614155949e98132520de9f44e27.jpg",
    alt: "Image 1",
    title: "Image 1",
  },
  {
    src: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/9/3KfhgLCP_39efaf7abbc24f228c9561b3a7ee5304.jpg",
    alt: "Image 2",
    title: "Image 2",
  },
  {
    src: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/9/MeJ1Taai_78b4fdb1bbe24778808543080fa6ccae.jpg",
    alt: "Image 3",
    title: "Image 3",
  },
  {
    src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/yeoUJy1S_4e79c54bdd174052a9abcfac1d2a8bbd.png",
    alt: "Image 4",
    title: "Image 4",
  },
  {
    src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png",
    alt: "Image 5",
    title: "Image 5",
  },
  {
    src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png",
    alt: "Image 6",
    title: "Image 6",
  },
  {
    src: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/9/q3COO3aU_b6370614155949e98132520de9f44e27.jpg",
    alt: "Image 1",
    title: "Image 1",
  },
  {
    src: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/9/3KfhgLCP_39efaf7abbc24f228c9561b3a7ee5304.jpg",
    alt: "Image 2",
    title: "Image 2",
  },
  {
    src: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/9/MeJ1Taai_78b4fdb1bbe24778808543080fa6ccae.jpg",
    alt: "Image 3",
    title: "Image 3",
  },
  {
    src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/yeoUJy1S_4e79c54bdd174052a9abcfac1d2a8bbd.png",
    alt: "Image 4",
    title: "Image 4",
  },
  {
    src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png",
    alt: "Image 5",
    title: "Image 5",
  },
  {
    src: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png",
    alt: "Image 6",
    title: "Image 6",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* <ImageCarousel /> */}

      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Ads</TabsTrigger>
          <TabsTrigger value="password">Surveys</TabsTrigger>
          <TabsTrigger value="rewards">Deals</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-10">
              {images.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-2 w-36 h-36">
                    <Img
                      src={image.src}
                      alt={image.alt}
                      // width={300}
                      // height={200}
                      className="w-auto h-auto"
                    />
                  </CardContent>
                  <CardFooter className="p-4"></CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <SurveyForm />
        </TabsContent>
        <TabsContent value="rewards">
          <ImageGrid />
        </TabsContent>
      </Tabs>
    </main>
  );
}
