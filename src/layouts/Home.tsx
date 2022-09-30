import Card from "../components/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsList } from "../services/news";
import { Container } from "./home.style";

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
