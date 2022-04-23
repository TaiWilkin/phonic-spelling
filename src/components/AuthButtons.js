import { Button, HStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../reducers/auth";
import { content } from "../data";

const AuthButtons = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignout = () => dispatch(signout());

  if (user === null) return null;

  if (user) {
    return (
      <HStack>
        <Button onClick={handleSignout} colorScheme={content.color}>
          Sign out
        </Button>
      </HStack>
    );
  }

  return (
    <HStack>
      <Button as={Link} to="/register" colorScheme={content.color}>
        Register
      </Button>
      <Button as={Link} to="/signin" colorScheme={content.color}>
        Sign in
      </Button>
    </HStack>
  );
};

export default AuthButtons;
