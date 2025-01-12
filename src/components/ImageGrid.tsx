import { Img } from "react-image";
import { Card, CardContent } from "@/components/ui/card";

// Define the structure of our image data
interface ImageData {
  src: string;
  alt: string;
}

// Sample image data
const images: ImageData[] = [
  {
    src: "https://images-static.nykaa.com/uploads/0ac07825-f25c-4146-bca2-f0b60d2e772a.jpg?tr=cm-pad_resize,w-450",
    alt: "Placeholder 1",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Deals/revealed/PC_Static_C_1X._CB552826943_.jpg",
    alt: "Placeholder 2",
  },
  {
    src: "https://images-eu.ssl-images-amazon.com/images/G/31/JanArt25/PC_Leadup_Hero_Lifestyle-2-2x_Deals._CB537660659_.jpg",
    alt: "Placeholder 3",
  },
];

export default function ImageGrid() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-2">
              <div className="relative w-full h-full pb-[75%]">
                <Img
                  src={image.src}
                  alt={image.alt}
                  //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover max-w-full max-h-full"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
