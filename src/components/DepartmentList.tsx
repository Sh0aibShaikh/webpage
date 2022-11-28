import React from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { ListItem, Link, Text, Box, UnorderedList, Button, Flex, Show, Hide } from "@chakra-ui/react";

export default function DepartmentList(props: any) {
  const productsList = ["Computers & Accessories", "Electronics", "Clothing & Accessories", "Home & Kitchen"];

  return (
    <Box>
      <Show above="md">
        <Text px="5" mb="1" fontSize="sm" fontWeight="bold">
          Department
        </Text>
        <UnorderedList listStyleType="none" m="0">
          {productsList.map((products: string, index: number) => (
            <ListItem px="5" key={index}>
              <Link fontSize="sm" lineHeight="5" textDecoration="none" _hover={{}}>
                {products}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Show>
      <Hide above="md">
        <Box ml="1.5">
          <Button
            h="8"
            px="2.5"
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
            onClick={props.departmentHandler}
          >
            Department
            <TriangleDownIcon ml="1.5" w="2.5" />
          </Button>
          <Box
            mt="5"
            px="3.5"
            w="100%"
            left="0"
            position="fixed"
            borderTop="1px solid"
            borderColor="gray.200"
            bgColor="contrast.200"
            display={props.departMentList ? "block" : "none"}
          >
            <Box mb="5" borderBottom="1px solid" borderColor="gray.200">
              <Text mt="2.5" mb="1.5" fontWeight="normal" fontSize="2xl">
                Department
              </Text>
              <Flex mb="3">
                {productsList.map((products: string, index: number) => (
                  <Button
                    key={index}
                    h="8"
                    mr="1"
                    px="2.5"
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
