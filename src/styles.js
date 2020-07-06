import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header-container {
    display: flex;

    h1 {
      margin: 15px 0;
    }

    .node-logo {
      width: 40px;
      margin: 0 10px 0 15px;
    }

    .react-logo {
      width: 58px;
      height: 55px;
      margin-top: 7px;
    }
  }

  .cards-container {
    display: flex;

    .card {
      display: flex;
      overflow: scroll;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 300px;
      height: 400px;
      margin: 0 10px;
      border-radius: 15px;
      box-shadow: -2px 2px 7px gray;

      h2 {
        margin: 10px;
      }

      h3 {
        margin-top: 10px;
      }

      .box-action {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 5px 0 40px;

        input {
          padding: 8px;
          border-radius: 5px;
          border: 2px solid gray;
        }
      }

      .todo-container {
        display: flex;
        padding: 10px;
        width: 250px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 2px solid gray;

        p {
          margin: -3px 0 0 8px;
        }
      }
    }
  }

  @media (max-width: 650px) {
    height: auto;

    .header-container {
      h1 {
        font-size: 1.3em;
        margin-top: 23px;
      }

      .node-logo {
        width: 30px;
      }

      .react-logo {
        width: 43px;
        margin-top: 14px;
      }
    }

    .cards-container {
      flex-direction: column;

      .card {
        margin-bottom: 35px;
      }
    }
  }
`;
