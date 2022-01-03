import {
  Flex,
  Heading,
  HStack,
  Button,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import config from "../config";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<SunIcon />, <MoonIcon />);

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
        <Tooltip hasArrow label="Post a new NFT collecltion">
          <Button
            size="sm"
            bg={"red.500"}
            fontWeight={"bold"}
            color={"gray.50"}
          >
            Post Collection
          </Button>
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
