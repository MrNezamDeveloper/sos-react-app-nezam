import Card from "../components/card";
import styled, { CSSObject } from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsList } from "../services/news";

const Home: React.FC = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNewsList().then((res) => {
      setData(res.data.results);
    });
  }, []);

  return (
    <Container>
      <div className="titles">
        <div className="all-articles">نمایش همه</div>
        <div className="articles">مقاله ها</div>
      </div>
      <div className="cards">
        {data.map((data: any) => (
          <Card
            key={data.id}
            image={data.image}
            title={data.category.name}
            time={`${Math.floor(Math.random() * 10 + 1)}`}
            description={data.description}
            onClick={() => {
              navigate(`/articles/${data.id}`);
            }}
            children={undefined}
          ></Card>
        ))}
      </div>
      <div className="btn">
        <div>بیشتر</div>
      </div>
    </Container>
  );
};
export default Home;

const Container = styled.div(
  (): CSSObject => ({
    padding: "10px 40px ",
    "&>.cards": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },

    "&>.titles": {
      width: "100%",
      padding: "10px ",
      display: "flex",
      justifyContent: "space-between",
      "&>.all-articles": {
        cursor: "pointer",
        color: "blue",
      },
      "&>.articles": {
        fontWeight: "bold",
      },
    },
    "&>.btn": {
      width: "100%",
      display: "none",
      alignItems: "center",
      justifyContent: "center",
      "&>div": {
        padding: "7px 40px",
        textAlign: "center",
        borderRadius: "5px",
        border: "1px solid blue",
        color: "blue",
        cursor: "pointer",
      },
    },
    "@media (max-width:1000px)": {
      "&>.cards": {
        justifyContent: "space-evenly",
      },
    },
    "@media (max-width:700px)": {
      "&>.cards": {
        justifyContent: "center",
      },
      "&>.titles": {
        justifyContent: "flex-end",
      },
      "&>.titles>.all-articles": {
        display: "none",
      },
      "&>.btn": {
        display: "flex",
      },
    },
  }),
);
