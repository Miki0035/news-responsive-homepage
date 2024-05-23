type cardData = {
  image: string;
  number: string;
  title: string;
  desc: string;
};

type newData = {
  title: string;
  desc: string;
};

export const cardData: cardData[] = [
  {
    image: new URL("assets/images/image-retro-pcs.jpg", import.meta.url).href,
    number: "01",
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
  },
  {
    image: new URL("assets/images/image-top-laptops.jpg", import.meta.url).href,
    number: "02",
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
  },
  {
    image: new URL("assets/images/image-gaming-growth.jpg", import.meta.url)
      .href,
    number: "03",
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
  },
];

export const newData: newData[] = [
  {
    title: " Hydrogen VS Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
