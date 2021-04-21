import { styled } from "../stitches.config.js";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";

const StyledTrigger = styled(Popover.Trigger, {
  backgroundColor: "$green600",
  color: "$grey800",
  border: "none",
  cursor: "pointer",
});

const StyledContent = styled(Popover.Content, {
  borderRadius: 3,
  padding: "20px",
  fontSize: 14,
  backgroundColor: "$grey800",
  color: "$grey100",
});

const StyledArrow = styled(Popover.Arrow, {
  fill: "$dark",
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
      <Popover.Root>
        <StyledTrigger>
          <AccessibleIcon.Root label="Mail">
            <EnvelopeOpenIcon />
          </AccessibleIcon.Root>
        </StyledTrigger>
        <StyledContent>
          <h3>ofrades email</h3>
          <p>info@ofrades.com</p>
          <StyledArrow />
        </StyledContent>
      </Popover.Root>
    </Container>
  );
};

export default Social;
