import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Flex,
  VStack,
  Box,
  Heading,
  Text,
  AspectRatio,
  Image,
  IconButton,
  Divider,
  Button,
  ButtonGroup,
  Tooltip,
} from "@chakra-ui/react";
import db from "../db";
import { useState } from "react";

const NftDescription = ({ nft, show }) => {
  return (
    <Box display={show ? "block" : "none"} p={4}>
      <AspectRatio ratio={1}>
        <Image src={nft.demo} borderRadius={2} />
      </AspectRatio>
      {/* <Text>{nft.description}</Text> */}

      <Flex mt={2} alignItems={"center"} justifyContent={"space-between"}>
        <Button
          variant={"outline"}
          fontWeight={"extrabold"}
          textTransform={"uppercase"}
          fontSize={"xs"}
        >
          Twitter
        </Button>

        <ButtonGroup isAttached size={"sm"}>
          <Tooltip hasArrow label="Upvote this collection">
            <Button>✅</Button>
          </Tooltip>
          <Tooltip hasArrow label="Downvote this collection">
            <Button>❌</Button>
          </Tooltip>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

const NftItem = ({ nft }) => {
  const [show, setShow] = useState(false);
  return (
    <Box boxShadow={"base"}>
      <Flex
        direction={"row"}
        key={nft.id}
        w={"full"}
        p={4}
        alignItems={"center"}
      >
        <AspectRatio ratio={1} minW={54} mr={3}>
          <Image
            src={nft.image}
            alt={nft.name}
            //   boxSize={"50px"}
            borderRadius={"full"}
          />
        </AspectRatio>
        <VStack alignItems={"flex-start"} spacing={0}>
          <Heading size={"md"}>{nft.name}</Heading>
          <Text size="xs" fontWeight={"semibold"}>
            {nft.description}
          </Text>
        </VStack>
        <VStack>
          <IconButton
            icon={show ? <ArrowUpIcon /> : <ArrowDownIcon />}
            variant={"unstyled"}
            ml={2}
            onClick={() => {
              setShow(!show);
            }}
          >
            Hello
          </IconButton>{" "}
        </VStack>
      </Flex>
      <Divider />
      <NftDescription nft={nft} show={show} />
    </Box>
  );
};

const NftList = () => {
  return (
    <Flex mt={14} alignItems={"flex-start"} w={"full"}>
      <VStack alignItems={"flex-start"} w={"full"} spacing={4}>
        {db.map((nft) => {
          return <NftItem key={nft.id} nft={nft} />;
        })}
      </VStack>
    </Flex>
  );
};

export default NftList;
