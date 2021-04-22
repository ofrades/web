import { styled } from "../stitches.config";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: "$blue700",
  height: "0.2rem",
});

export default Separator;
