import React from "react";
import { styled } from "../stitches.config.js";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { EnvelopeOpenIcon, CalendarIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";

const StyledTrigger = styled(Popover.Trigger, {
  backgroundColor: "gainsboro",
  border: "none",
});

const StyledContent = styled(Popover.Content, {
  borderRadius: 3,
  padding: "20px",
  fontSize: 14,
  backgroundColor: "gainsboro",
  color: "black",
});

const StyledArrow = styled(Popover.Arrow, {
  fill: "gainsboro",
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
  "& svg": { margin: "1rem" },
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
      <AccessibleIcon.Root label="Calendar">
        <CalendarIcon />
      </AccessibleIcon.Root>
    </Container>
  );
};

export default Social;
