import { useState, useEffect } from "react";
import {
  Container,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CustomLink from "./CustomLink";
import { register, signin } from "../reducers/auth";
import { content } from "../data";

const Auth = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let history = useHistory();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    if (user) {
      history.push(state?.from || "/");
    }
  }, [user, history, state?.from]);

  const handleSignin = () => dispatch(signin(email, password));
  const handleRegister = () => dispatch(register(email, password));

  if (user === null) return null;

  return (
    <Container>
      <VStack pt={4} spacing={4}>
        <Switch>
          <Route path="/signin">
            <Text fontSize="xl">Sign in</Text>
          </Route>
          <Route path="/register">
            <Text fontSize="xl">Register</Text>
          </Route>
        </Switch>
        <Text>
          Accounts for either of the sibling sites,{" "}
          <Link to="https://mcguffey.web.app" color={`${content.color}.500`}>
            Phonic Spelling
          </Link>{" "}
          or{" "}
          <Link
            to="https://phonic-spelling.web.app"
            color={`${content.color}.500`}
          >
            McGuffey Spelling
          </Link>
          , can be used here.
        </Text>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Switch>
          <Route path="/signin">
            <>
              <Button onClick={handleSignin}>Sign in</Button>
              <CustomLink
                text="Register instead."
                link="/register"
                color={`${content.color}.500`}
              />
            </>
          </Route>
          <Route path="/register">
            <>
              <Button onClick={handleRegister}>Register</Button>
              <CustomLink
                text="Sign in instead."
                link="/signin"
                color={`${content.color}.500`}
              />
            </>
          </Route>
        </Switch>
      </VStack>
    </Container>
  );
};

export default Auth;
