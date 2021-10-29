import Image from "./Image";
import { Box } from "@chakra-ui/react";

const baseStyle = {
  display: "flex",
  margin: "10px auto",
  alignItems: "center",
  justifyContent: "center",
};

const Key = ({ name, onClick, size, stem }) => {
  const handleClick = () => onClick(name);
  const maxSize = size > 75 ? 75 : size;
  const height = maxSize * 1.25;
  const width = stem ? maxSize * 2 : maxSize * 1.25;
  const style = size
    ? {
        ...baseStyle,
        height: height,
        width: width,
      }
    : baseStyle;
  return (
    <button onClick={handleClick} className="key" style={style}>
      <Box>
        <Image name={name} size={maxSize} />
      </Box>
    </button>
  );
};

export default Key;
