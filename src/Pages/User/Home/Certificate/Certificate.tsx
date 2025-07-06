import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const Certificate = () => {
  const certificateImages = [
    {
      image: "https://i.ibb.co/dwwLjVKd/UX-32-C18710.jpg",
      title: "UX Design",
    },
    {
      image: "https://i.ibb.co/YBZcGwXJ/UX-32-A18711.jpg",
      title: "UX Design",
    },
    {
      image: "https://i.ibb.co/0VrRDV5D/Nayan-Sarkar-php-laravel-2-C15808.jpg",
      title: "Web Development with PHP & Laravel",
    },
    {
      image: "https://i.ibb.co/yc3kVM1V/Nayan-Sarkar-php-laravel-2-A15809.jpg",
      title: "Web Development with PHP & Laravel",
    },
    {
      image: "https://i.ibb.co/WWFfv96B/certificate.png",
      title: "Responsive Web Design",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Calculate how many items per slide
  const getItemsPerSlide = () => {
    return window.innerWidth < 768 ? 1 : 3;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => {
        const totalSlides = Math.ceil(
          certificateImages.length / getItemsPerSlide()
        );
        return (prev + 1) % totalSlides;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const width = container.offsetWidth;
      container.scrollTo({
        left: slideIndex * width,
        behavior: "smooth",
      });
    }
  }, [slideIndex]);
  return (
    // <div className="w-full overflow-hidden">
    //   <h1 className="text-2xl font-bold text-white mb-10">Certificate</h1>

    //   <div className="relative">
    //     <div
    //       ref={containerRef}
    //       className="flex overflow-x-hidden transition-all duration-500 scroll-smooth"
    //     >
    //       {certificateImages.map((item, idx) => (
    //         <div key={idx} className="flex-shrink-0 w-full md:w-1/3 px-2">
    //           <div className="bg-[#1f1f1f] p-4 rounded-lg shadow text-center">
    //             <img
    //               src={item.image}
    //               alt={item.title}
    //               className="w-full h-64 object-cover rounded"
    //             />
    //             <p className="mt-2 text-white font-medium">{item.title}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div>
      <Marquee pauseOnHover={true} autoFill={true}>
        {certificateImages.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-full ">
            <div className="bg-[#1f1f1f] p-4 rounded-lg shadow text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded"
              />
              <p className="mt-2 text-white font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Certificate;
