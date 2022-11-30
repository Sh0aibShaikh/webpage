import React from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Select, Button, Text, Flex, Show, Hide } from "@chakra-ui/react";

type SortByType = {
  featureListHandler: () => void;
  featureList: boolean;
  setFeatureList: (value: boolean) => void;
};
export default function SortBy(props: SortByType) {
  const featuredList = ["Price: Low to High", "Price: High to Low", "Avg. Customer Review", "Newest Arrivals"];

  return (
    <Box>
      <Show above="md">
        <Select
          pr="0"
          h="30px"
          _focus={{}}
          fontSize="sm"
          _focusVisible={{}}
          bgColor="gray.200"
          boxShadow="selectBox"
          borderColor="gray.250"
          placeholder="Sort By:Featured"
        >
          <option value="LowtoHigh">Price: Low to High</option>
          <option value="HightoLow">Price: High to Low</option>
          <option value="CustomerReview">Avg. Customer Review</option>
          <option value="NewestArrivals">Newest Arrivals</option>
        </Select>
      </Show>
      <Hide above="md">
        <Box>
          <Button
            h="8"
            px="2.5"
            w="auto"
            _hover={{}}
            _focus={{}}
            _active={{}}
            fontSize="sm"
            pos="relative"
            bgColor="unset"
            border="1px solid"
            _focusVisible={{}}
            lineHeight="short"
            fontWeight="normal"
            borderColor="gray.250"
            onClick={props.featureListHandler}
          >
            Featured
            <TriangleDownIcon ml="1.5" w="2.5" />
          </Button>
          <Box
            mt="5"
            px="3.5"
            w="100%"
            left="0"
            zIndex="1"
            position="fixed"
            borderTop="1px solid"
            borderColor="gray.200"
            bgColor="contrast.200"
            display={props.featureList ? "block" : "none"}
          >
            <Box
              left="0"
              right="0"
              top="100%"
              bottom="0"
              zIndex="-1"
              width="100%"
              height="100vh"
              bgColor="gray.50"
              position="absolute"
              onClick={() => props.setFeatureList(false)}
              display={props.featureList ? "block" : "none"}
            />
            <Box mb="5" borderBottom="1px solid" borderColor="gray.200">
              <Text mt="2.5" mb="1.5" fontWeight="normal" fontSize="2xl">
                Featured
              </Text>
              <Flex flexWrap="wrap" mb="3">
                {featuredList.map((products: string, index: number) => (
                  <Button
                    key={index}
                    h="8"
                    mr="1"
                    px="2.5"
                    my="0.5"
                    w="auto"
                    _hover={{}}
                    _focus={{}}
                    _active={{}}
                    fontSize="sm"
                    bgColor="unset"
                    border="1px solid"
                    _focusVisible={{}}
                    fontWeight="normal"
                    lineHeight="short"
                    borderColor="gray.250"
                  >
                    {products}
                  </Button>
                ))}
              </Flex>
            </Box>
            <Box textAlign="right">
              <Button
                _hover={{}}
                _focus={{}}
                _active={{}}
                fontSize="xs"
                bgColor="unset"
                color="green.400"
                fontWeight="normal"
                _focusVisible={{}}
                letterSpacing="wide"
              >
                Show results
              </Button>
            </Box>
          </Box>
        </Box>
      </Hide>
    </Box>
  );
}
