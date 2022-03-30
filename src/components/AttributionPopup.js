import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";

const AttributionPopup = ({
  attributions,
  setAttributions,
  isOpen,
  onClose,
}) => {
  const handleClose = () => {
    setAttributions([]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Alternate audio sources</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List spacing={3}>
            {attributions.map(({ id, attributionUrl, attributionText }) => (
              <ListItem key={id}>
                <Link href={attributionUrl} key={id}>
                  {attributionText}
                </Link>
              </ListItem>
            ))}
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AttributionPopup;
