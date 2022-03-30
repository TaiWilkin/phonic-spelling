import { useEffect, useState } from "react";
import {
  Spinner,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

const WORDNIK_SEARCH =
  "https://us-central1-phonic-spelling.cloudfunctions.net/wordnik/";

const Audio = ({ word, setAttributions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [audioURLs, setAudioURLs] = useState([]);
  const [audioWord, setAudioWord] = useState(word);
  const [error, setError] = useState(false);

  useEffect(() => {
    setAttributions([]);
  }, [word, setAttributions]);

  const audioCount = audioURLs.length;
  useEffect(() => {
    if (!isOpen || !word) return;
    if (word === audioWord && (!!error || !!audioCount)) return;

    setAudioURLs([]);
    setAudioWord(word);
    axios
      .get(`${WORDNIK_SEARCH}${word}`)
      .then(({ data }) => {
        if (data.length) {
          setError(false);
          setAudioURLs(data);
          setAttributions(data);
          setAudioWord(word);
        }
      })
      .catch((error) => {
        setError(error?.response?.data || "Audio not available.");
      });
  }, [word, isOpen, audioCount, audioWord, error, setAttributions]);

  if (!word || !setAttributions) return null;

  return (
    <>
      <Button style={{ flex: 1 }} onClick={onOpen}>
        Play alternate audio
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Alternate audio</ModalHeader>
          <ModalCloseButton />
          {audioURLs.length && !error ? (
            audioURLs.map(({ fileUrl, attributionText, id }, i) => (
              <ModalBody key={id}>
                <audio controls autoPlay={i === 0}>
                  <source src={fileUrl} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </ModalBody>
            ))
          ) : error ? (
            <ModalBody>
              <Text>{error}</Text>
            </ModalBody>
          ) : (
            <ModalBody>
              <Spinner />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Audio;
