import { ARTICLE_SOURCES } from "@/store/main/article/article.types";

export const loaderWidths = [
  { xsWidth: "70px", width: "100px" },
  { xsWidth: "30px", width: "40px" },
  { xsWidth: "30px", width: "40px" },
  { xsWidth: "30px", width: "40px" },
  { xsWidth: "70px", width: "100px" },
];

export const categories = ["World", "Sports", "Technology", "US"];
export const CATEGORIES_LIST = [
  { label: "Newyork Times", value: ARTICLE_SOURCES.NYT },
  { label: "Guardian", value: ARTICLE_SOURCES.GUARDIAN },
  { label: "News API", value: ARTICLE_SOURCES.NEWS_API },
];
