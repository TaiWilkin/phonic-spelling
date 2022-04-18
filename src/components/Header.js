import { HStack, Heading, Spacer } from "@chakra-ui/react";

import NavigationDrawer from "./NavigationDrawer";
import AuthButtons from "./AuthButtons";
import VoiceSelector from "./VoiceSelector";

const Header = () => (
  <HStack p="10px" bg="black">
    <NavigationDrawer />
    <Heading pl="5" color="white" size="md">
      Phonic Spelling
    </Heading>
    <Spacer />
    <VoiceSelector isHidden />
    <AuthButtons />
  </HStack>
);

export default Header;
