import styled, { CSSObject } from "@emotion/styled";

export const Container = styled.div(
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
  