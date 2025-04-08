import {
  SettingsIcon,
  NewsIcon,
  CreditCardIcon,
  StarIcon,
} from "@/assets/icons";

export const NAVIGATION_BAR_LIST = [
  {
    id: 1,
    title: "trading_pools",
    url: "/trading-pools",
    icon: SettingsIcon,
  },
  {
    id: 2,
    title: "me_pools",
    url: "/me-pools",
    icon: CreditCardIcon,
  },
  {
    id: 3,
    title: "quotes",
    url: "/quotes",
    icon: StarIcon,
  },
  {
    id: 4,
    title: "about_us",
    url: "/about-us",
    icon: NewsIcon,
  },
];
