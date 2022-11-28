import React, { useState } from "react";
import { SortBy, DepartmentList } from "../components";
import { Box, Flex, Show, Hide } from "@chakra-ui/react";

export default function ProductDetails() {
  const [departMentList, setDepartMentList] = useState(false);
  const [featureList, setFeatureList] = useState(false);

  const featureListHandler = () => {
    if (featureList) {
      setFeatureList(false);
    } else {
      setFeatureList(true);
      setDepartMentList(false);
    }
  };
  const departmentHandler = () => {
    if (departMentList) {
      setDepartMentList(false);
    } else {
      setDepartMentList(true);
      setFeatureList(false);
    }
  };
  return (
    <Box h="100%" w={{ base: "100%", md: "90%" }} m="0 auto" bgColor="contrast.200" py="5">
      <Box mb="5" display="flex" borderBottom="1px solid" borderColor="gray.250">
        <DepartmentList departMentList={departMentList} departmentHandler={departmentHandler} />
        <Box
          w="-webkit-fill-available"
          borderLeft={{ base: "0", md: "2px solid #eaeded" }}
          px={{ base: "1.5", md: "5" }}
          pb="5"
        >
          <Flex justifyContent="space-between">
            <Box display={{ base: "none", md: "block" }} fontSize="sm">
              1 of 3 pages
            </Box>
            <SortBy featureList={featureList} featureListHandler={featureListHandler} />
          </Flex>
          <Show above="md">
            <Box>Other Product</Box>
          </Show>
        </Box>
      </Box>
      <Hide above="md">1231231231</Hide>
    </Box>
  );
}
