import styled, { CSSObject } from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleNews } from "../services/singleNews";

const Article: React.FC = () => {
  const { articleId } = useParams<string>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    console.log(articleId);
    setLoading(true);
    articleId &&
      SingleNews(articleId).then((data: any) => {
        console.log(data.data.category.name);
        setLoading(false);
        setData(data.data);
      });
  }, [articleId]);

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <Container>
        <p></p>
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
