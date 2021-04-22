import { styled } from "../stitches.config.js";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { EnvelopeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Icon = styled("a", {
  backgroundColor: "$green600",
  color: "$grey800",
  border: "none",
  cursor: "pointer",
  padding: "0 1rem",
  "&:hover": {
    color: "$blue700",
  },
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
});

const Social = () => {
  return (
    <Container>
      <Icon href="mailto:info@ofrades.com">
        <AccessibleIcon.Root label="Mail">
          <EnvelopeOpenIcon />
        </AccessibleIcon.Root>
      </Icon>
      <Icon href="https://github.com/ofrades">
        <AccessibleIcon.Root label="GitHub">
          <GitHubLogoIcon />
        </AccessibleIcon.Root>
      </Icon>
    </Container>
  );
};

export default Social;
