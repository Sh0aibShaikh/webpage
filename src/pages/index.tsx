import { Box } from "@chakra-ui/react";
import React from "react";
import { Header, ProductDetails } from "../components";

export default function Home() {
  return (
    <Box bgColor="gray.200" h="100%">
      <Header />
      <ProductDetails />
    </Box>
  );
}
