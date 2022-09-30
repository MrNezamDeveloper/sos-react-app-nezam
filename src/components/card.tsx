import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Container } from "./card.style";

interface CardProps {
  image: string;
  title: string;
  time: string;
  description: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  time,
  description,
  onClick,
  children,
}) => {
  return (
    <Container>
      <img className="image" src={image} alt="iamge about this news" />
      <h3 className="title">{title}</h3>
      <div className="time">
        <p>دقیقه</p>
        <p className="minute">{time}</p>
        <AccessTimeIcon />
      </div>
      <span className="desc">{description}</span>
      <div className="more-conainer">
        <div className="more" onClick={onClick}>
          ادامه
        </div>
      </div>
      {children}
    </Container>
  );
};

export default Card;
