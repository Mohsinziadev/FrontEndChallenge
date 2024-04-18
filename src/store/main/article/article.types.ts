export enum MEDIA_TYPE {
  IMAGE = "image",
}

interface Multimedia {
  url: string;
  type: MEDIA_TYPE;
}

interface NYTArticle {
  headline: {
    main: string;
  };
  pub_date: string;
  news_desk: string;
  section_name: string;
  _id: string;
  lead_paragraph: string;
  source: string;
  multimedia?: Multimedia[];
}

export interface NYTResponse {
  response: {
    docs: NYTArticle[];
    meta: {
      hits: number;
      offset: number;
      limit: number;
    };
  };
}

interface GuardianArticle {
  title: string;
  pubDate: string;
  article_id: string;
  news_desk: string;
  sentiment: string;
  lead_paragraph: string;
  category: string[];
  source_id: string;
  image_url: string | null;
}

export interface GuardianResponse {
  results: GuardianArticle[];
}

interface NewsAPIArticle {
  title: string;
  publishedAt: string;
  news_desk: string;
  author: string;
  content: string;
  source: {
    name: string;
  };
  urlToImage: string | null;
}

export interface NewsAPIResponse {
  articles: NewsAPIArticle[];
}

export interface Article {
  headline: string;
  pub_date: string;
  image?: string | null;
  news_desk: string;
  section_name: string;
  _id: string;
  lead_paragraph: string;
  source: string;
}

export interface LoaderItemWidth {
  xsWidth: string;
  width: string;
}

export enum ARTICLE_SOURCES {
  NYT = "nyt",
  GUARDIAN = "guardian",
  NEWS_API = "news_api",
}
