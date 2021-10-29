import Key from "./Key";
import { Wrap, WrapItem, Tooltip } from "@chakra-ui/react";

const Keyboard = ({
  keys,
  handleKeyPress,
  stem,
  tooltip = "Click the keys to type.",
}) => (
  <Tooltip
    label={tooltip}
    aria-label={tooltip}
    placement="bottom-end"
    openDelay={1000}
    hasArrow
  >
    <Wrap
      justify="center"
      p="5px"
      bg="rgba(0, 0, 0, 0.1)"
      border="1px solid rgba(0, 0, 0, 0.2)"
      minHeight="75px"
      m="10px"
      spacing="10px"
    >
      {keys.map((key) => (
        <WrapItem key={key}>
          <Key
            name={key}
            onClick={handleKeyPress}
            size={Math.round(75 / (keys.length / 9))}
            stem={stem}
          />
        </WrapItem>
      ))}
    </Wrap>
  </Tooltip>
);

export default Keyboard;
