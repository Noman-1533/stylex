import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, ProductCarousel, Title } from "../feature";
import Price from "../feature/shared/components/price-component/price.component";
import Rating from "../feature/shared/components/rating-component/rating.component";
import { CustomImage } from "../feature";

export default function Demo() {
  const carouselData = [
    {
      id: "1",
      imageURL:
        "https://img.freepik.com/free-photo/essential-oil-bottle-green-leaves_23-2148115795.jpg",
      title: "Essential Oil - Aromatherapy",
      rating: 4.7,
      price: 350,
      discount: 10.0,
    },
    {
      id: "2",
      imageURL:
        "https://img.freepik.com/free-photo/shampoo-bottle-beauty-skincare_23-2148551037.jpg",
      title: "Organic Herbal Shampoo",
      rating: 4.3,
      price: 500,
      discount: 0,
    },
    {
      id: "3",
      imageURL:
        "https://img.freepik.com/free-photo/white-cream-container-beauty-skincare_23-2148551034.jpg",
      title: "Moisturizing Face Cream",
      rating: 0.8,
      price: 600,
      discount: 15.0,
    },
    {
      id: "4",
      imageURL:
        "https://img.freepik.com/free-photo/body-lotion-beauty-cosmetic_23-2148551040.jpg",
      title: "Body Lotion - Shea Butter",
      rating: 4.6,
      price: 450,
      discount: 0,
    },
    {
      id: "5",
      imageURL:
        "https://img.freepik.com/free-photo/hair-oil-bottle-beauty-skincare_23-2148551035.jpg",
      title: "Argan Hair Oil",
      rating: 4.4,
      price: 400,
      discount: 7.0,
    },
    {
      id: "6",
      imageURL:
        "https://img.freepik.com/free-photo/eye-cream-beauty-skincare_23-2148551033.jpg",
      title: "Anti-Aging Eye Cream",
      rating: 4.9,
      price: 700,
      discount: 20.0,
    },
    {
      id: "7",
      imageURL:
        "https://img.freepik.com/free-photo/hydrating-serum-bottle-beauty-skincare_23-2148551036.jpg",
      title: "Hydrating Serum",
      rating: 4.5,
      price: 550,
      discount: 10.0,
    },
    {
      id: "8",
      imageURL:
        "https://img.freepik.com/free-photo/skin-cleansing-foam-beauty-skincare_23-2148551027.jpg",
      title: "Skin Cleansing Foam",
      rating: 4.2,
      price: 300,
      discount: 5.0,
    },
    {
      id: "9",
      imageURL:
        "https://img.freepik.com/free-photo/cosmetic-jar-beauty-skincare_23-2148551028.jpg",
      title: "Day Cream with SPF 30",
      rating: 4.3,
      price: 400,
      discount: 10.0,
    },
    {
      id: "10",
      imageURL:
        "https://img.freepik.com/free-photo/lip-balm-container-beauty-skincare_23-2148551029.jpg",
      title: "Lip Balm - Natural",
      rating: 4.6,
      price: 150,
      discount: 5.0,
    },
  ];

  const handleClick = () => {
    alert("clicked");
  };
  return (
    <>
      <div className="ml-5 mt-6">
        <div>
          <Button
            label="View all"
            rounded="FULL"
            width="w-full md:w-36 lg:w-40"
            customStyles="mb-2"
            backgroundColor="bg-blue-500 hover:bg-blue-700"
            color="text-white"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
        <div>
          <Rating rating={3.5} maxRating={5} />
        </div>
        <div>
          <Price price={250} discount={20} />
        </div>
        <div>
          <Price price={250} />
        </div>
        <div>
          <CustomImage
            imageURL="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ-YkNTuyN_ywdjgT8ksFFw2-zCdIl_OB4_c9Of2pB7IiW2arxnOB-_uZmlgYgLyTLxinIXEAttKDHVEvgiK14"
            size="w-96 h-72"
            rounded="XL"
            childrenXPosition="CENTER"
            childrenYPosition="MIDDLE"
            childBackground="bg-gray-200"
          >
            <b className="font-extrabold text-xl">This is text</b>
          </CustomImage>
        </div>
        <div>
          <Title font="font-extrabold" fontSize="text-5xl">
            This is 5xl
          </Title>
          <Title font="font-extrabold" fontSize="text-3xl">
            This is 3xl
          </Title>
          <Title font="font-extrabold" fontSize="text-xl">
            This is xl
          </Title>
          <Title font="font-extrabold" fontSize="text-md">
            This is md
          </Title>
          <Title font="font-extrabold" fontSize="text-sm">
            This is sm
          </Title>
        </div>
        <div>
          <Card
            id="1"
            imageURL="https://img.freepik.com/free-vector/cosmetic-realistic-vector-background_88138-57.jpg"
            title="Green Tea skincare"
            rating={4.5}
            price={400}
            discount={7.9}
          />
        </div>
        <div>
          <ProductCarousel
            products={carouselData}
            carouselTitle="Custom Carousel"
            showMoreButton={true}
            buttonText="Show more"
            onClickButton={() => console.log("show more clicked")}
          />
        </div>
      </div>
    </>
  );
}
