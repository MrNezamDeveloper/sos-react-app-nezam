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
        console.log(data.data);
        setDataArticle(data.data);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [articleId]);

  console.log(dataArticle);
  if (loading) {
    console.log("lodanig:true");
    return (
      <Container>
        <p>loading...</p>
      </Container>
    );
  } else {
    console.log("loading:false");
    console.log(dataArticle);
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

const Container = styled.div(
  (): CSSObject => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: "10px",
    padding: "10px",
    border: "1px solid blue",
    width: "90%",
    margin: "20px auto",

    "&>.img": {
      width: "48%",
      "&>img": {
        width: "100%",
        borderRadius: "10px",
        objectFit: "cover",
        objectPosition: "center",
      },
    },
    "&>.text": {
      width: "48%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "end",
      "&>.title": {
        textAlign: "right",
        fontSize: "18px",
        fontWeight: "bold",
      },
      "&>.description": {
        textAlign: "right",
        marginTop: "50px",
      },
      "&>.footer": {
        display: "flex",
        width: "100%",
        alignItems: "center",
        marginTop: "50px",
        justifyContent: "space-between",
      },
    },
    "@media (max-width:800px)": {
      flexDirection: "column",
      "&>.img": {
        width: "100%",
      },
      "&>.text": {
        width: "100%",
      },
    },
    "@media (max-width:500px)": {
      "&>.text>.description": {
        marginTop: "10px",
      },
    },
  }),
);
