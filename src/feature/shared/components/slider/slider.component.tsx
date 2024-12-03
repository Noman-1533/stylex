// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./slider.css";
// import { useQuery } from "@tanstack/react-query";
// import { getSliderData } from "./slider.api";
// import { QueryTime } from "../../enums";
// import { SliderData } from "./slider.type";
// import { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import { Swiper as SwiperCore } from "swiper/types";

// export default function Slider() {
//   const { data: SliderResponse } = useQuery({
//     queryKey: ["Slider-Banner"],
//     queryFn: getSliderData,
//     staleTime: QueryTime.STALE,
//   });
//   const navigate = useNavigate();

//   const [sliders, setSliders] = useState<SliderData[]>([]);
//   const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
//   const prevBtnRef = useRef<HTMLButtonElement>(null);
//   const nextBtnRef = useRef<HTMLButtonElement>(null);

//   const configImageUrl = (imageUrl: string) => {
//     const imageUrlRegex =
//       /^([a-zA-Z0-9/-]+)\/(medium|original|thumbnail)-[a-f0-9-]+\.([a-zA-Z0-9]+)$/;

//     if (imageUrlRegex.test(imageUrl)) {
//       return (
//         import.meta.env.VITE_BASE_URL +
//         `user/media/cdn/${encodeURIComponent(imageUrl)}`
//       );
//     } else {
//       return imageUrl;
//     }
//   };

//   const filterSliders = (width: number) => {
//     if (SliderResponse?.data) {
//       if (width >= 768) {
//         return SliderResponse.data.filter(
//           (slider) => slider.deviceType === "DESKTOP"
//         );
//       } else {
//         return SliderResponse.data.filter(
//           (slider) =>
//             slider.deviceType === "MOBILE" || slider.deviceType === "ALL"
//         );
//       }
//     }
//     return [];
//   };

//   useEffect(() => {
//     const updateSliders = () => {
//       setSliders(filterSliders(window.innerWidth));
//     };

//     updateSliders(); // Initial update
//     window.addEventListener("resize", updateSliders);

//     return () => {
//       window.removeEventListener("resize", updateSliders);
//     };
//   }, [SliderResponse]);

//   // Navigation buttons
//   function NavButton() {
//     return (
//       <>
//         <button
//           ref={prevBtnRef}
//           className="custom-prev"
//           onClick={() => swiperInstance?.slidePrev()} // Use stored Swiper instance
//         >
//           <FontAwesomeIcon icon={faAngleLeft} />
//         </button>
//         <button
//           ref={nextBtnRef}
//           className="custom-next"
//           onClick={() => {
//             swiperInstance?.slideNext();
//           }} // Use stored Swiper instance
//         >
//           <FontAwesomeIcon icon={faAngleRight} />
//         </button>
//       </>
//     );
//   }

//   return (
//     <div className="slider-container relative">
//       {sliders && (
//         <>
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={30}
//             loop={true}
//             navigation={{
//               prevEl: prevBtnRef.current,
//               nextEl: nextBtnRef.current,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             modules={[Autoplay, Pagination, Navigation]}
//             className="mySwiper"
//             onSwiper={(swiper) => setSwiperInstance(swiper)} // Set Swiper instance
//           >
//             {sliders.map((slider) => (
//               <SwiperSlide key={slider.id}>
//                 <div>
//                   <img
//                     src={configImageUrl(slider.imageUrl)}
//                     alt="Slider Image"
//                   />
//                   {slider.exploreLink.length > 0 && (
//                     <button
//                       onClick={() => navigate(slider.exploreLink)}
//                       className="btn-explore"
//                     >
//                       Explore More
//                     </button>
//                   )}
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </>
//       )}
//       <NavButton />
//     </div>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { useQuery } from "@tanstack/react-query";
import { getSliderData } from "./slider.api";
import { QueryTime } from "../../enums";
import { SliderData } from "./slider.type";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Swiper as SwiperCore } from "swiper/types";

export default function Slider() {
  const { data: SliderResponse } = useQuery({
    queryKey: ["Slider-Banner"],
    queryFn: getSliderData,
    staleTime: QueryTime.STALE,
  });
  const navigate = useNavigate();

  const [sliders, setSliders] = useState<SliderData[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  const configImageUrl = (imageUrl: string) => {
    const imageUrlRegex =
      /^([a-zA-Z0-9/-]+)\/(medium|original|thumbnail)-[a-f0-9-]+\.([a-zA-Z0-9]+)$/;

    if (imageUrlRegex.test(imageUrl)) {
      return (
        import.meta.env.VITE_BASE_URL +
        `user/media/cdn/${encodeURIComponent(imageUrl)}`
      );
    } else {
      return imageUrl;
    }
  };

  useEffect(() => {
    // setSliders(SliderResponse?.data as SliderData[]);
    const updateSliders = () => {
      if (window.innerWidth >= 768) {
        setSliders(
          SliderResponse?.data.filter(
            (slider) => slider.deviceType === "DESKTOP"
          ) as SliderData[]
        );
      } else {
        setSliders(
          SliderResponse?.data.filter(
            (slider) =>
              slider.deviceType === "MOBILE" || slider.deviceType === "ALL"
          ) as SliderData[]
        );
      }
    };

    updateSliders(); // Initial update
    window.addEventListener("resize", updateSliders);

    return () => {
      window.removeEventListener("resize", updateSliders);
    };
  }, [SliderResponse]);

  // Navigation buttons
  function NavButton() {
    return (
      <>
        <button
          ref={prevBtnRef}
          className="custom-prev"
          onClick={() => swiperInstance?.slidePrev()}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          ref={nextBtnRef}
          className="custom-next"
          onClick={() => {
            swiperInstance?.slideNext();
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </>
    );
  }

  return (
    <div className="slider-container relative">
      {sliders && (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={{
              prevEl: prevBtnRef.current,
              nextEl: nextBtnRef.current,
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onSwiper={(swiper) => setSwiperInstance(swiper)}
          >
            {sliders.map((slider) => (
              <SwiperSlide key={slider.id}>
                <div>
                  <img
                    src={configImageUrl(slider.imageUrl)}
                    alt="Slider Image"
                  />
                  {slider.exploreLink.length > 0 && (
                    <button
                      onClick={() => navigate(slider.exploreLink)}
                      className="btn-explore"
                    >
                      Explore More
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      <NavButton />
    </div>
  );
}
