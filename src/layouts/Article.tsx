import Card from "../components/card";
import whale from "../assets/images/whale.webp";
import styled, { CSSObject } from "@emotion/styled";
const dummyData = {
  image: whale,
  title: "راهنمای دریافت معرفی نامه",
  time: "5",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
};

const Article: React.FC = () => {
  return (
    <Container>
      <Card
        image={dummyData.image}
        title={dummyData.title}
        time={dummyData.time}
        description={dummyData.description}
        onClick={() => {
          console.log("id");
        }}
        children={undefined}
      ></Card>
      <Card
        image={dummyData.image}
        title={dummyData.title}
        time={dummyData.time}
        description={dummyData.description}
        onClick={() => {
          console.log("id");
        }}
        children={undefined}
      ></Card>
      <Card
        image={dummyData.image}
        title={dummyData.title}
        time={dummyData.time}
        description={dummyData.description}
        onClick={() => {
          console.log("id");
        }}
        children={undefined}
      ></Card>
      <Card
        image={dummyData.image}
        title={dummyData.title}
        time={dummyData.time}
        description={dummyData.description}
        onClick={() => {
          console.log("id");
        }}
        children={undefined}
      ></Card>
    </Container>
  );
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
