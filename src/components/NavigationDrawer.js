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

import LessonsAccordion from "./LessonsAccordion";

const linkStyle = {
  width: "100%",
  padding: "2px 16px 2px 16px",
};

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
              <LessonsAccordion onClose={onClose} />
              {user && (
                <>
                  <ChakraLink
                    as={Link}
                    to="/attempts"
                    onClick={onClose}
                    style={linkStyle}
                  >
                    Previous Attempts
                  </ChakraLink>
                  <ChakraLink
                    as={Link}
                    to="/settings"
                    onClick={onClose}
                    style={linkStyle}
                  >
                    Settings
                  </ChakraLink>
                </>
              )}
              <ChakraLink
                as={Link}
                to="/acknowledgments"
                onClick={onClose}
                style={linkStyle}
              >
                Acknowledgments
              </ChakraLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
