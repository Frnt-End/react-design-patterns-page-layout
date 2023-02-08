import {
  Container,
  TopSectionStyle,
  RightSectionStyle,
  LeftSectionStyle,
  FootertSectionStyle,
} from "./PageLayout.styles";

function SplitScreen({ children }) {
  const [top, left, right, footer] = children;
  return (
    <Container>
      <TopSectionStyle>{top}</TopSectionStyle>
      <RightSectionStyle>{right}</RightSectionStyle>
      <LeftSectionStyle>{left}</LeftSectionStyle>
      <FootertSectionStyle>{footer}</FootertSectionStyle>
    </Container>
  );
}

export default SplitScreen;
