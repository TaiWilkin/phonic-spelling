import { useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";

import { getAudio } from "../reducers/audio";

const Audio = ({ word, setShowAttributions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const audio = useSelector((state) => state.audio);

  let audioURLs = [];
  let fetching = true;
  let error = null;
  if (audio[word]) {
    audioURLs = audio[word].audioURLs;
    fetching = audio[word].fetching;
    error = audio[word].error;
  }

  useEffect(() => {
    if (!isOpen || !word) return;

    setShowAttributions(true);
    dispatch(getAudio(word));
  }, [word, isOpen, dispatch, setShowAttributions]);

  if (!word) return null;

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
          {!fetching && !error ? (
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
