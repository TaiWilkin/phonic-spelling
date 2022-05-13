import { useState } from "react";
import { Wrap, WrapItem, Tooltip, Input } from "@chakra-ui/react";
import Key from "./Key";

const Keyboard = ({
  keys,
  handleKeyPress,
  stem,
  tooltip = "Click the keys to type.",
}) => {
  const [filter, setFilter] = useState("");
  const keySize = Math.round(75 / (keys.length / 9));
  const filteredKeys = keys.filter((k) => k.includes(filter));

  const onKeyPress = (name) => {
    handleKeyPress(name);
    setFilter("");
  };

  return (
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
        width="100%"
        flex="1"
        spacing="10px"
        overflow="scroll"
      >
        {keys.length > 20 && (
          <Input
            variant="filled"
            bg="white"
            placeholder="Type to filter keys (some may be hidden)"
            size="sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        )}
        {filteredKeys.map((key) => (
          <WrapItem key={key}>
            <Key name={key} onClick={onKeyPress} size={keySize} stem={stem} />
          </WrapItem>
        ))}
      </Wrap>
    </Tooltip>
  );
};

export default Keyboard;
