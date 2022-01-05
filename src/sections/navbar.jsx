import {
  Flex,
  Heading,
  HStack,
  Button,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, LockIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import config from "../config";
import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import PostCollectionModal from "./PostCollectionModal";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<SunIcon />, <MoonIcon />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginWithGoogle, user } = useFirebaseAuth();

  return (
    <Flex
      py={2}
      px={[2, 4, 4, 40]}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      className="navbar"
    >
      <Heading size={"md"} color={"gray.100"}>
        {config.title}
      </Heading>
      <HStack spacing={2}>
        <Tooltip hasArrow label="Login">
          <Button
            size={"sm"}
            bg="red.500"
            fontWeight={"bold"}
            color={"gray.50"}
            icon={<LockIcon />}
            onClick={loginWithGoogle}
          >
            Login
          </Button>
        </Tooltip>
        <Tooltip hasArrow label="Post a new NFT collecltion">
          <Box>
            <Button
              size="sm"
              bg={"red.500"}
              fontWeight={"bold"}
              color={"gray.50"}
              onClick={onOpen}
            >
              Post Collection
            </Button>
            <PostCollectionModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          </Box>
        </Tooltip>
        <IconButton
          size={"sm"}
          aria-label="Search database"
          icon={colorModeIcon}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
};

export default Navbar;
