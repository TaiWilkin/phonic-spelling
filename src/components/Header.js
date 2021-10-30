import { HStack, Heading, Spacer } from "@chakra-ui/react";

import NavigationDrawer from "./NavigationDrawer";
import AuthButtons from "./AuthButtons";
import VoiceSelector from "./VoiceSelector";

const Header = () => (
  <HStack p="10px" bg="black">
    <NavigationDrawer />
    <Heading pl="5" color="white" size="lg">
      Phonic Spelling
    </Heading>
    <Spacer />
    <VoiceSelector />
    <AuthButtons />
  </HStack>
);

export default Header;
