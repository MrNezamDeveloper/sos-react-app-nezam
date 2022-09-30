import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ISingleNews } from "../models/singleNews";
import { getSingleNews } from "../services/singleNews";
import { Container } from "./article.style";

const Article: React.FC = () => {
  const [dataArticle, setDataArticle] = useState<ISingleNews>();
  const [loading, setLoading] = useState<boolean>(false);
  const { articleId } = useParams<string>();

  useEffect(() => {
    setLoading(true);
    getSingleNews(articleId)
      .then((data) => {
        setDataArticle(data.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [articleId]);

  if (loading) {
    return (
      <Container>
        <p>loading...</p>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="img">
          <img src={dataArticle && dataArticle.image} alt="" />
        </div>
        <div className="text">
          <p className="title">{dataArticle && dataArticle.title}</p>
          <p className="description">
            {dataArticle && dataArticle.description}
          </p>
          <div className="footer">
            <p>دسته بندی خبر : {dataArticle && dataArticle.category.name}</p>
            <p>نویسنده : {dataArticle && dataArticle.user.full_name}</p>
          </div>
        </div>
      </Container>
    );
  }
};

export default Article;
