import styled, { CSSObject } from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ISingleNews } from "../models/singleNews";
import { getSingleNews } from "../services/singleNews";

const Article: React.FC = () => {
  const [dataArticle, setDataArticle] = useState<ISingleNews>();
  const [loading, setLoading] = useState<boolean>(false);
  const { articleId } = useParams<string>();

  useEffect(() => {
    setLoading(true);
    getSingleNews(articleId)
      .then((data) => {
        console.log(data.data)
        setDataArticle(data.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [articleId]);


  console.log(dataArticle)
  if (loading) {
    console.log("lodanig:true");
    return (
      <Container>
        <p>loading...</p>
      </Container>
    );
  } else {
    console.log("loading:false");
    console.log(dataArticle)
    return (
      <Container>
        <p>{dataArticle && dataArticle.title}</p>
        <p>{dataArticle && dataArticle.category.name}</p>
      </Container>
    );
  }
};

export default Article;

const Container = styled.div(
  (): CSSObject => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  }),
);
