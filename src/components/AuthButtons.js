import { Button, Link as ChakraLink, HStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../reducers/auth";

const AuthButtons = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleSignout = () => dispatch(signout());

  if (user === null) return null;

  if (user) {
    return (
      <HStack>
        <Button onClick={handleSignout} colorScheme="teal">
          Sign out
        </Button>
      </HStack>
    );
  }

  return (
    <HStack>
      <ChakraLink as={Link} to="/register" color="teal">
        Register
      </ChakraLink>
      <Button as={Link} to="/signin" colorScheme="teal">
        Sign in
      </Button>
    </HStack>
  );
};

export default AuthButtons;
