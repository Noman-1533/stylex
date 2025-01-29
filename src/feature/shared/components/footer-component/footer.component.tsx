import { FooterChildProps } from "../../models";
import BrandLogo from "../brand-logo-component/brand-logo.component";
import Title from "../title-component/title.component";
import Subscribe from "./subscribe.component";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const footerData: FooterChildProps[] = [
    {
      title: "COMPANY",
      childItems: [
        {
          itemName: "About Us",
          itemNavigationUrl: "/about-us",
        },
        {
          itemName: "Our Mission",
          itemNavigationUrl: "/mission",
        },
        {
          itemName: "Our Team",
          itemNavigationUrl: "/team",
        },
        {
          itemName: "Contact Us",
          itemNavigationUrl: "/contact",
        },
      ],
    },
    {
      title: "HELP",
      childItems: [
        {
          itemName: "FAQ",
          itemNavigationUrl: "/faq",
        },
        {
          itemName: "Troubleshooting",
          itemNavigationUrl: "/troubleshoot",
        },
        {
          itemName: "Support Forum",
          itemNavigationUrl: "/forum",
        },
        {
          itemName: "Contact Support",
          itemNavigationUrl: "/support",
        },
      ],
    },
    {
      title: "FAQ",
      childItems: [
        {
          itemName: "General Questions",
          itemNavigationUrl: "/faq/general",
        },
        {
          itemName: "Billing Questions",
          itemNavigationUrl: "/faq/billing",
        },
        {
          itemName: "Technical Questions",
          itemNavigationUrl: "/faq/technical",
        },
      ],
    },
    {
      title: "RESOURCES",
      childItems: [
        {
          itemName: "Blog",
          itemNavigationUrl: "/blog",
        },
        {
          itemName: "Tutorials",
          itemNavigationUrl: "/tutorials",
        },
        {
          itemName: "API Documentation",
          itemNavigationUrl: "/api-docs",
        },
        {
          itemName: "Community Forum",
          itemNavigationUrl: "/community",
        },
      ],
    },
  ];
  return (
    <div className="relative pt-40 pb-10 mt-48 bg-gray-200">
      <span className="absolute -top-32 md:-top-24 lg:-top-28 w-[98vw]  ">
        <Subscribe />
      </span>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-[94%] mx-auto gap-4 mt-6 sm:mt-4">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-3">
          <BrandLogo brandName="StyleX" />
          <Title color="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            quos deleniti natus.
          </Title>
          <span className="flex gap-2 items-center">
            <AiFillTwitterCircle className="text-3xl text-white bg-black rounded-full" />
            <FaFacebook className="text-3xl " />
            <FaInstagram className="text-3xl " />
            <FaGithub className="text-3xl" />
          </span>
        </div>

        {footerData.map((singleFooterData) => (
          <FooterChild
            key={singleFooterData.title}
            title={singleFooterData.title}
            childItems={singleFooterData.childItems}
          />
        ))}
      </div>
    </div>
  );
}

function FooterChild({ title, childItems }: FooterChildProps) {
  const handleNavigation = (url: string) => {
    console.log("navigating", url);
  };
  return (
    <div className="my-1 flex flex-col  ">
      <Title font="font-semibold" extraClasses="mb-3">
        {title}
      </Title>
      <span className="flex flex-col gap-3">
        {childItems.map((item) => (
          <a
            key={`${title}-${item.itemName}`}
            className="text-gray-500 cursor-pointer"
            onClick={() => handleNavigation(item.itemNavigationUrl)}
          >
            {item.itemName}
          </a>
        ))}
      </span>
    </div>
  );
}
