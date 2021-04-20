import { styled } from "../stitches.config.js";

const Container = styled("div", {
  color: "$blue500",
});
const Resume = styled("div", {});

const Line = styled("h1", {
  fontFamily: `'Cardo', sans-serif`,
  color: "$blue500",
});

const List = styled("ul", {
  fontFamily: `'JetBrains Mono', monospace`,
  color: "$grey300",
});

const Work = () => {
  return (
    <Container>
      <Resume>
        <Line>
          Software engineer having fun learning web development and building
          apps
        </Line>
        <List>
          <li>Languages: Javascript, TypeScript, C#, Rust</li>
          <li>Frameworks/libs: React, Vue, wasm with Rust and C#(Blazor).</li>
        </List>
        <Line>
          I have built apps for Vodafone, Orange, Governamental applications,
          Monitar, AmplificA
        </Line>
      </Resume>
    </Container>
  );
};

export default Work;
