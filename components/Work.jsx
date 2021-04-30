import Link from "next/link";
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
  "& a": {
    color: "$blue500",
  },
  "& em": {
    color: "$yellow500",
  },
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
          <li>
            Frameworks/libs: ❤️ React, Vue, wasm with Rust and C#(Blazor).
          </li>
        </List>
        <List>
          <em>React.js / Next.js</em>
          <li>
            Weather app:{" "}
            <Link href="https://ofrades-weather.vercel.app">Weather</Link>
          </li>
          <li>
            Search tweets from users:{" "}
            <Link href="https://gentle.vercel.app">Gentle</Link>
          </li>
          <em>Blazor</em>
          <li>
            Online book shop:{" "}
            <Link href="http://offic.herokuapp.com">Bootra</Link>
          </li>
          <li>
            Online text editor to interact with github files:{" "}
            <Link href="http://bootra.herokuapp.com">Offic</Link>
          </li>
          <em>Vanilla</em>
          <li>
            Where the journey started:{" "}
            <Link href="https://tesourofieis.com">Tesouro dos Fiéis</Link>
          </li>
        </List>
        <Line>
          I have also built pro apps for Vodafone, Orange, Governamental
          applications, Monitar, AmplificA
        </Line>
      </Resume>
    </Container>
  );
};

export default Work;
