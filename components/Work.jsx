import { styled } from "../stitches.config.js";

const Container = styled("div", {
  color: "$blue500",
});
const Resume = styled("h3", {
  fontFamily: `'JetBrains Mono', monospace`,
  fontWeight: "700",
  color: "$green500",
});
const List = styled("ul", {});

const Work = () => {
  return (
    <Container>
      <Resume>
        Previously I have built apps for Vodafone, Orange, Governamental
        applications, Monitar, Amplifica
        <h5>With awesome technologies:</h5>
      </Resume>
      <List>
        <li>React</li>
        <li>Vue</li>
        <li>Angular</li>
        <li>Blazor</li>
        <li>Html</li>
        <li>Css</li>
      </List>
    </Container>
  );
};

export default Work;
