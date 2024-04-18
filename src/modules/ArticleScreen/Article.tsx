import { useEffect, useState } from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import ReactPaginate from "react-paginate";

import { getArticles } from "@/store/main/article/articleSlice";
import { useDebounce } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/store";

import ArticleCard from "./components/ArticleCard";
import SearchSection from "./components/SearchSection";
import PaginationLoader from "./components/PaginationLoader";
import ArticleSkeltonLoader from "./components/ArticleSkeltonLoader";
import usePersistedState, {
  PERSISTED_STATE_KEYS,
} from "@/hooks/usePersistedState";
import { ARTICLE_SOURCES } from "@/store/main/article/article.types";

const limit = 10;

const Article = () => {
  const dispatch = useAppDispatch();
  const [source, setSource] = useState<ARTICLE_SOURCES>(ARTICLE_SOURCES.NYT);
  const { loading, articles, paginationMetaData } = useAppSelector(
    (state) => state.article
  );

  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = usePersistedState<string>(
    PERSISTED_STATE_KEYS.ARTICLE_CATEGORY,
    ""
  );

  const debouncedSearch = useDebounce(search, 500);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const pageCount = paginationMetaData?.hits
    ? Math.ceil(paginationMetaData?.hits / limit)
    : 0;

  useEffect(() => {
    setPageNumber(0);
  }, [debouncedSearch, selectedCategory]);

  useEffect(() => {
    dispatch(
      getArticles(limit, pageNumber, selectedCategory, debouncedSearch, source)
    );
  }, [debouncedSearch, pageNumber, selectedCategory, source]);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const selectedFunc = (value: string) => {
    setSearch("");
    setSelectedCategory(value);
  };

  const ClearFilterData = () => {
    setSearch("");
    setSelectedCategory("");
    localStorage.clear();
  };

  return (
    <div className="flex flex-col py-5">
      <div>
        <div className="w-full flex justify-center items-center">
          {/* <img src={newyorklogo1} className="h-14 w-30" alt="" /> */}
        </div>
        <SearchSection
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSource={setSource}
          source={source}
          clearFilter={ClearFilterData}
          selectFunc={(data) => selectedFunc(data)}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/5">
          <div>
            {loading ? (
              <div>
                <ArticleSkeltonLoader />
              </div>
            ) : (
              <div>
                {articles?.map((article) => {
                  return (
                    <div key={article._id}>
                      <ArticleCard article={article} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {articles.length > 0 && (
            <div className="mt-4">
              {loading ? (
                <>
                  <PaginationLoader />
                </>
              ) : (
                <div className="flex justify-center">
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    forcePage={pageNumber}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="w-full md:w-2/5 flex justify-center items-start p-5 ">
          <div className="bg-gradient-to-r from-lightBlue  to-primary  rounded-md text-white shadow-md">
            <div className="backdrop-blur-sm bg-white/30 rounded-md p-5">
              <ChatBubbleLeftRightIcon className="h-10 w-10" />
              <div className="flex flex-col gap-2 mt-5">
                <div className="font-bold text-xl">Weekly newsletter</div>
                <div className="text-sm">
                  We will keep you updated when the best new article pops up on
                  this platform
                </div>
              </div>
              <input
                type="text"
                placeholder="Enter your mail id "
                className="w-full px-2 py-3 mt-6 text-xs rounded-md"
              />
              <label htmlFor="" className="text-sm">
                Subscribe to our newsletter
              </label>
              <div className="rounded-md transform transition cursor-pointer duration-500 hover:scale-110 px-4 py-2 text-center items-center w-full text-primary bg-white mt-1">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
