import styled, { CSSObject } from "@emotion/styled";

export const Container = styled.div(
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
  