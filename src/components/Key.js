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
  const isSilent = name && phonemes[name]?.silent;
  const border = isVowel ? "2px solid #81E6D9" : "";
  const handleClick = () => onClick(name);
  const constrainedSize = Math.min(Math.max(size, 25), 75);
  const height = constrainedSize * 1.25;
  let width = stem ? constrainedSize * 2 : constrainedSize * 1.25;
  let style = size
    ? {
        ...baseStyle,
        height: height,
        width: width,
        border,
      }
    : { ...baseStyle, border };
  if (isSilent) {
    style = { ...style, opacity: ".5" };
  }

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
        <Image name={name} size={constrainedSize} />
      </Box>
    </button>
  );
};

export default Key;
