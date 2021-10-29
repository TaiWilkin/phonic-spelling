import { Link } from "react-router-dom";
import { Link as ChakraLink, Box } from "@chakra-ui/react";

const CustomLink = ({ text, link, ...props }) => {
  return (
    <Box m="5">
      <ChakraLink as={Link} to={link} {...props}>
        {text}
      </ChakraLink>
    </Box>
  );
};

export default CustomLink;
