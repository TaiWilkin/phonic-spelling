import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link as ChakraLink,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import lessons from "../data/lessons";
import LessonLink from "./LessonLink";

const NavigationDrawer = () => {
  const { user } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Phonic Spelling</DrawerHeader>

          <DrawerBody>
            <VStack>
              <ChakraLink as={Link} to="/lessons" onClick={onClose}>
                Home
              </ChakraLink>
              <ChakraLink as={Link} to="/acknowledgments" onClick={onClose}>
                Acknowledgments
              </ChakraLink>
              {user && (
                <ChakraLink as={Link} to="/attempts" onClick={onClose}>
                  Previous Attempts
                </ChakraLink>
              )}
              {Object.keys(lessons).map((l) => (
                <LessonLink l={l} onClose={onClose} key={l} />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
