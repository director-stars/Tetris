import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
// import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import Tetris from './Tetris';
import styled from 'styled-components';

const BgWrapper = styled.div`
  background: white;
`

// import "@fontsource/inter";

function App() {
  // Pull the disclosure methods
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <BgWrapper>
      <ChakraProvider>
        <Layout>
          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
          <Tetris />
        </Layout>
        
      </ChakraProvider>
    </BgWrapper>
  );
}

export default App;
