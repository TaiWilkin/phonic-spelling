import { Wrap } from "@chakra-ui/react";
import Phoneme from "./Phoneme";

const Textbox = ({ letters }) => (
  <Wrap
    justify="center"
    p="5px"
    border="1px solid rgba(0, 0, 0, 0.2)"
    minHeight="90px"
    m="10px"
    spacing="10px"
  >
    {letters.map((letter, i) => (
      <Phoneme name={letter} key={`${letter}-${i}`} />
    ))}
  </Wrap>
);

export default Textbox;
