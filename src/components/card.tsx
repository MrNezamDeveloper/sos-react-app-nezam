import styled, { CSSObject } from "@emotion/styled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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

const Container = styled.div(
  (): CSSObject => ({
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "400px",
    width: "300px",
    border: "1px solid blue",
    margin: "10px",
    borderRadius: "15px",
    padding: "10px",
    "&>.image": {
      width: "100%",
      height: "45%",
      borderRadius: "10px",
      overflow: "hidden",
    },
    "&>.time": {
      color: "gray",
      display: "flex",
      "&>.minute": {
        margin: "0 5px",
      },
    },

    "&>.desc": {
      color: "gray",
      display: "-webkit-box",
      WebkitLineClamp: "3",
      textOverflow: "ellipsis",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      direction: "rtl",
    },
    "&>.more-conainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      width: "100%",
      "&>.more": {
        padding: "7px 40px",
        textAlign: "center",
        borderRadius: "5px",
        border: "1px solid blue",
        color: "blue",
        cursor: "pointer",
      },
    },
  }),
);
