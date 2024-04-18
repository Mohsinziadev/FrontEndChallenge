import { Article } from "@/store/main/article/article.types";
import { useNavigate } from "react-router-dom";

const cardTags = ["Tag1", "Tag2", "Tag3"];

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = (props: ArticleCardProps) => {
  const {
    headline,
    lead_paragraph,
    pub_date,
    news_desk,
    section_name,
    source,
    image,
    _id,
  } = props.article;

  const dateObj = new Date(pub_date);
  const navigate = useNavigate();
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const details = () => {
    navigate("/articleDetails", { state: { data: _id } });
  };

  return (
    <div
      onClick={details}
      className="flex  gap-4 cursor-pointer transform transition duration-500 hover:scale-110"
    >
      <div className="w-full flex py-4 flex-col">
        <div className="shadow-md hover:border hover:border-primary p-4 gap-4 flex flex-col rounded-sm">
          <div className="">
            <div className="flex gap-4">
              <img
                src={
                  image ??
                  "https://sothebysinstitute.com/wp-content/uploads/2018/12/New-York-City-Architecture-Header_highlight.jpg"
                }
                className="h-20 w-20 object-cover rounded-sm"
                alt=""
              />

              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <div className="text-md">{headline}</div>
                  <div className="flex gap-6">
                    <div className="text-sm">{news_desk}</div>
                    <div className="text-sm">Source :{source}</div>
                  </div>
                </div>
                <div>
                  <div className="hidden md:flex text-sm">{section_name}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="line-clamp-2 text-xs">{lead_paragraph}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              {cardTags.map((index) => {
                return (
                  <button
                    key={index}
                    className="px-2 py-1 hover:text-white bg-gray-200 hover:bg-gradient-to-r from-lightBlue  to-primary rounded-md text-xs"
                  >
                    Remote
                  </button>
                );
              })}
            </div>
            <div className="text-sm">{formattedDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
