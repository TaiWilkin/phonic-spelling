import { useEffect, useState } from "react";
import {
  Spinner,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const GIPHY_SEARCH =
  "https://us-central1-phonic-spelling.cloudfunctions.net/giphy/";

const getRandomInt = (max) => Math.floor(Math.random() * max);

const GIF = ({ word }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!word) {
      setImg(null);
      setLoading(false);
      setError("Error loading GIF.");
      return;
    }
    if (!isOpen) return;
    setLoading(true);
    axios
      .get(`${GIPHY_SEARCH}${word}`)
      .then(({ data }) => {
        const item = getRandomInt(data.data.length);
        const gifData = data.data[item];
        setImg(gifData.images.fixed_height);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log("error: ", error);
        setImg(null);
        setLoading(false);
        setError("Error loading GIF.");
        return;
      });
  }, [word, isOpen]);

  if (!word) return null;

  const renderGif = () => {
    if (loading) return <Spinner />;
    if (error) return <Text>Error loading GIF.</Text>;
    if (!img) return null;
    return (
      <img src={img.url} alt={word} style={{ height: `${img.height}px` }} />
    );
  };

  return (
    <>
      <Button onClick={onOpen}>Show a related GIF</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Word Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{renderGif()}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GIF;
