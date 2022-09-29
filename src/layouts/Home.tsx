import Card from "../components/card";
import whale from "../assets/images/whale.webp";
import styled, { CSSObject } from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NewsList } from "../services/news";
const dummyData = {
  id: Math.random(),
  image: whale,
  title: "راهنمای دریافت معرفی نامه",
  time: "5",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
};
const Home: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    NewsList().then((res) => {
      console.log(res.data.results);
      setData(res.data.results);
    });
  }, []);
  const navigate = useNavigate();
  return (
    <Container>
      <div className="titles">
        <div className="all-articles">نمایش همه</div>
        <div>مفالها</div>
      </div>
      <div className="cards">
        {data.map((data: any) => (
          <Card
            key={data.id}
            image={dummyData.image}
            title={data.category.name}
            time={dummyData.time}
            description={data.description}
            onClick={() => {
              navigate(`/articles/${data.id}`);
            }}
            children={undefined}
          ></Card>
        ))}
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
    "@media (max-width:700px)": {
      "&>.cards": {
        justifyContent: "center",
      },
    },
    "&>.titles": {
      width: "100%",
      padding: "10px ",
      display: "flex",
      justifyContent: "space-between",
      "&>.all-articles": {
        cursor: "pointer",
      },
    },
  }),
);
