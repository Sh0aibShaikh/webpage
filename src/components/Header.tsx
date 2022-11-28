import { Box, Image, Flex, Link } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box bgColor="gray.500" py="2.5" px="2.5">
      <Box display={{ base: "block", md: "flex" }} alignItems="center">
        <Link textDecoration="none" _hover={{}}>
          <Flex alignItems="center" mt="2" position="relative">
            <Image bgColor="gray.500" w="28" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <Box color="contrast.200" mb="2.5">
              .in
            </Box>
            <Box position="absolute" top="20px" left="88px" color="gray.300" fontWeight="bold" fontSize="sm">
              Prime
            </Box>
          </Flex>
        </Link>
        <Box ml={{ base: "", md: "6" }} mt={{ base: "2.5", md: "none" }} fontSize="2xl" color="contrast.200">
          High Performance Handpicked Laptops and Desktop Computers
        </Box>
      </Box>
    </Box>
  );
}
