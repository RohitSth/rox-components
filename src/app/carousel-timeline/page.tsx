import { TimelineCarousel } from "@/components/rox-components/carousel/carousel-timeline";

const timelineData = [
  {
    year: 2020,
    events: [
      {
        id: "2020-01",
        date: "2020.01",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay created an omnichannel that aggregates Covid-19 pandemic prevention and control information and services to assist in containing the spread of the virus.",
      },
      {
        id: "2020-02",
        date: "2020.02",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay introduced cross-border e-payment services in Hong Kong and Macau in April 2020. AlipayHK, the Hong Kong-based e-wallet, became the third cross-border e-wallet to be introduced in Macau.",
      },
      {
        id: "2020-03",
        date: "2020.03",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          'Alipay\'s "Spring Blossoms" consumption voucher program officially kicked off, with the Guangxi government issuing 100 million yuan worth of consumption vouchers via Alipay to encourage spending.',
      },
      {
        id: "2020-04",
        date: "2020.04",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay launched a new initiative to support small businesses affected by the pandemic.",
      },
      {
        id: "2020-05",
        date: "2020.05",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay expanded its international presence by partnering with more overseas merchants.",
      },
    ],
  },
  {
    year: 2021,
    events: [
      {
        id: "2021-01",
        date: "2021.01",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay introduced new AI-powered features to enhance user experience.",
      },
      {
        id: "2021-02",
        date: "2021.02",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay's annual transaction volume reached a new record high.",
      },
      {
        id: "2021-03",
        date: "2021.03",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay launched a green initiative to promote sustainable practices among users and merchants.",
      },
      {
        id: "2021-04",
        date: "2021.04",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description: "Added another event for 2021",
      },
      {
        id: "2021-05",
        date: "2021.05",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description: "Added another event for 2021",
      },
    ],
  },
  {
    year: 2022,
    events: [
      {
        id: "2022-01",
        date: "2022.01",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay introduced blockchain-based solutions for supply chain finance.",
      },
      {
        id: "2022-02",
        date: "2022.02",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay expanded its rural digitalization program to more provinces in China.",
      },
      {
        id: "2022-03",
        date: "2022.03",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description:
          "Alipay launched new features to support cross-border e-commerce.",
      },
      {
        id: "2022-04",
        date: "2022.04",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description: "Added another event for 2022",
      },
      {
        id: "2022-05",
        date: "2022.05",
        image:
          "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
        description: "Added another event for 2022",
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="size-full relative flex justify-center items-center">
      <div className="container mx-auto">
        <TimelineCarousel data={timelineData} />
      </div>
    </div>
  );
}
