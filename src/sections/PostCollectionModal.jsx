import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormLabel,
  FormControl,
  Input,
  ModalFooter,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";

const PostCollectionModal = ({ isOpen, onOpen, onClose }) => {
  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <FormControl>
            <FormLabel>Collection name</FormLabel>
            <Input ref={initialRef} placeholder="Collection name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Twitter link</FormLabel>
            <Input
              type={"url"}
              placeholder="https://twitter.com/vivekascoder"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Collection Image Url</FormLabel>
            <Input type={"url"} placeholder="https://obkt.com/demo.png" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Demo NFT url</FormLabel>
            <Input type={"url"} placeholder="https://obkt.com/demo.png" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Description" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PostCollectionModal;
