import Image from "./Image";
import { Box } from "@chakra-ui/react";
import { toast } from "react-toastify";

import phonemes from "../data/phonemes";

const baseStyle = {
  display: "flex",
  margin: "10px auto",
  alignItems: "center",
  justifyContent: "center",
};

const Key = ({ name, onClick, size, stem }) => {
  const isVowel = name && phonemes[name]?.vowel;
  const border = isVowel ? "1px solid #81E6D9" : "";
  const handleClick = () => onClick(name);
  const maxSize = size > 75 ? 75 : size;
  const height = maxSize * 1.25;
  const width = stem ? maxSize * 2 : maxSize * 1.25;
  const style = size
    ? {
        ...baseStyle,
        height: height,
        width: width,
        border,
      }
    : { ...baseStyle, border };

  return (
    <button
      onClick={handleClick}
      onDragStart={() =>
        toast.error("Dragging not enabled. Click the phonemes to add them.", {
          autoClose: 3000,
          closeOnClick: true,
        })
      }
      className="key"
      style={style}
    >
      <Box>
        <Image name={name} size={maxSize} />
      </Box>
    </button>
  );
};

export default Key;
