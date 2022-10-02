import styled from "@emotion/styled";

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>Oops!</h1>
      <h3>We can't seem to find the page </h3>
      <h3>you are looking for.</h3>
    </Container>
  );
};

export default NotFound;

const Container = styled.div(() => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));
