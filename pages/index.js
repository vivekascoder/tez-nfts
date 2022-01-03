import { Container } from "@chakra-ui/react";
import Navbar from "../src/sections/navbar";
import NftList from "../src/sections/nftlist";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <NftList />
      </Container>
    </div>
  );
};

export default Home;
