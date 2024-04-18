import { createSlice } from "@reduxjs/toolkit";
import {
  ARTICLE_SOURCES,
  Article,
  NewsAPIResponse,
  GuardianResponse,
  MEDIA_TYPE,
  NYTResponse,
} from "./article.types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { AppDispatch } from "@/store";

interface ArticleState {
  loading: boolean;
  articles: Article[];
  paginationMetaData: {
    hits?: number;
    offset?: number;
    limit?: number;
  };
}

const initialState: ArticleState = {
  loading: false,
  articles: [],
  paginationMetaData: {},
};

export const getArticles =
  (
    limit: number,
    page: number,
    category: string,
    search: string,
    source: string
  ) =>
  async (dispatch: AppDispatch) => {
    let mappedData: Article[] = [];
    let paginationData = null;

    if (source === ARTICLE_SOURCES.NYT) {
      dispatch(setLoading(true));
      let url = `${
        import.meta.env.APP_NYTIMES_API_URL
      }/?offset=${limit}&page=${page}&api-key=${
        import.meta.env.APP_ARTICLE_NYTIMES_API_KEY
      }`;

      if (search !== "") {
        url = `${url}&q=${search}`;
      } else if (category !== "") {
        url = `${url}&fq=section_name:(${category})`;
      }
      const res = await axios.get<NYTResponse>(url);
      console.log("response", res);
      mappedData = res.data.response.docs.map((article) => {
        const partialImageUrl = article.multimedia?.find(
          (item) => item.type === MEDIA_TYPE.IMAGE
        )?.url;

        return {
          headline: article.headline.main,
          pub_date: article.pub_date,
          news_desk: article.news_desk,
          section_name: article.section_name,
          _id: article._id,
          lead_paragraph: article.lead_paragraph,
          source: article.source,
          image: partialImageUrl
            ? `http://www.nytimes.com/${partialImageUrl}`
            : null,
        };
      });

      paginationData = {
        hits: res.data.response.meta.hits,
        offset: res.data.response.meta.offset,
        limit: limit,
      };
    } else if (source === ARTICLE_SOURCES.GUARDIAN) {
      dispatch(setLoading(true));

      let searchValue = search !== "" ? search : "pegasus";

      let url = `${import.meta.env.APP_NEWS_DATA_API}?apikey=${
        import.meta.env.APP_NEWS_DATA_API_KEY
      }&q=${searchValue}&language=en`;

      const res = await axios.get<GuardianResponse>(url);
      console.log("response of RAPID API NEWS  ", res);
      mappedData = res.data.results.map((article) => {
        return {
          headline: article.title,
          pub_date: article.pubDate,
          news_desk: article.news_desk,
          section_name: article.category[0],
          _id: article.article_id,
          lead_paragraph: article.sentiment,
          source: article.source_id,
          image: article.image_url,
        };
      });
    } else if (source === ARTICLE_SOURCES.NEWS_API) {
      dispatch(setLoading(true));

      let searchValue = search !== "" ? search : "bitcoin";

      let url = `${import.meta.env.APP_NEWS_API_URL}?q=${searchValue}&apiKey=${
        import.meta.env.APP_NEWS_API_KEY
      }`;

      if (category !== "") {
        url = `${url}&fq=section_name:(${category})`;
      }
      const res = await axios.get<NewsAPIResponse>(url);

      mappedData = res.data.articles.map((article) => {
        return {
          headline: article.title,
          pub_date: article.publishedAt,
          news_desk: article.news_desk,
          section_name: article.author,
          _id: uuidv4(),
          lead_paragraph: article.content,
          source: article.source.name,
          image: article.urlToImage,
        };
      });
    }

    try {
      dispatch(
        setArticles({
          articles: mappedData,
          paginationMetaData: paginationData,
        })
      );

      dispatch(setLoading(false));
    } catch (error) {
      console.error("errors", error);
      dispatch(setLoading(false));
    }
  };

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setArticles: (state, action) => {
      state.articles = action.payload.articles;
      state.paginationMetaData = action.payload.paginationMetaData;
    },
  },
});

export const { setLoading, setArticles } = articleSlice.actions;

export default articleSlice.reducer;
