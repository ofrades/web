import { styled } from "../stitches.config.js";

const Container = styled("div", {
  color: "$blue500",
});

const Title = styled("h1", {
  fontFamily: "$mono",
  fontStyle: "italic",
  color: "$red500",
});

const Resume = styled("div", {});

const Line = styled("h1", {
  fontFamily: "$serif",
  color: "$blue500",
});

const List = styled("ul", {
  fontFamily: "$mono",
  color: "$grey300",
});

const Work = () => {
  return (
    <Container>
      <Resume>
        <Title>💼 My journey</Title>
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
