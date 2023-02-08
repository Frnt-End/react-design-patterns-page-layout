import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
`;

export const TopSectionStyle = styled.div`
  flex: 1 100%;
  height: 10vh;
  background: #dc9596;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: calc(16px + 10 * ((100vw - 320px) / 680));
    color: #231c1c;
  }
`;

export const LeftSectionStyle = styled.div`
  flex: 1;
  height: 80vh;
  background: #6a8eae;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: calc(16px + 10 * ((100vw - 320px) / 680));
    color: white;
  }
`;

export const RightSectionStyle = styled.div`
  flex: 1;
  height: 80vh;
  background: #57a773;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: calc(16px + 10 * ((100vw - 320px) / 680));
    color: white;
  }
`;

export const FootertSectionStyle = styled.div`
  flex: 1 100%;
  height: 10vh;
  background: #fefadc;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: calc(16px + 10 * ((100vw - 320px) / 680));
    color: #231c1c;
  }
`;
