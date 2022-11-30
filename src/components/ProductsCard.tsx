import { Box, GridItem, Image, Text, Link, Flex } from "@chakra-ui/react"
import React from "react"
import { productsDataTypes } from "../services/types/types"

export default function ProductsCard(props: productsDataTypes) {
  const {
    id,
    image,
    description,
    ratingStars,
    reviewCount,
    price,
    originalPrice,
    discountDetails,
    dealOfTheDay,
    isFreeDelievery,
    isFullFilled,
  } = props
  return (
    <Box mx={{ base: "2.5", md: "0" }}>
      <GridItem w="100%" mt="5" key={id}>
        <Box p="1.5" position="relative" w="100%" minH="327px" mb="1">
          <Link>
            <Box
              top="0"
              left="0"
              bottom="0"
              right="0"
              width="100%"
              z-index="100"
              height="100%"
              margin="0 auto"
              position="absolute"
              bgImage="radial-gradient(0% 100%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.03) 100%)"
            />
            <Image src={image} />
          </Link>
        </Box>
        <Link
          noOfLines={2}
          fontSize="sm"
          lineHeight="tall"
          overflow="hidden"
          fontWeight="medium"
          textDecoration="none"
          display="-webkit-box"
          textOverflow="ellipsis"
          _hover={{ color: "orange.300" }}
        >
          {description}
        </Link>
        <Flex alignItems="end" my="1">
          <Box
            w="20"
            h="3.5"
            bgSize="512px 512px"
            bgRepeat="no-repeat"
            bgPosition={ratingStars}
            bgImage="https://m.media-amazon.com/images/S/sash/ouR9NRElwmzAIev.png"
          />
          <Text ml="1" h="2" color="gray.100" fontSize="xs" lineHeight="none">
            {reviewCount}
          </Text>
        </Flex>
        <Flex fontWeight="bold" fontSize="xs" alignItems="center">
          <Text
            p="1.5"
            color="contrast.200"
            borderRadius="sm"
            bgColor={discountDetails.length > 0 ? "red.500" : "unset"}
            mr="1.5"
            my="1.5"
          >
            {discountDetails}
          </Text>
          <Text color="red.500">{dealOfTheDay ? "Deal of the Day" : ""}</Text>
        </Flex>
        <Text fontSize="2xl">
          ₹{price}
          <Box color="gray.100" fontSize="xs" ml="1" as="span">
            M.R.P.:{" "}
            <Box textDecoration="line-through" as="span">
              ₹{originalPrice}
            </Box>
          </Box>
        </Text>
        <Flex alignItems="center">
          {isFullFilled ? (
            <Flex
              pt="1"
              pb="0.5"
              px="1.5"
              bgColor="gray.600"
              alignItems="center"
              position="relative"
              borderRadius="2px 0 0 2px"
            >
              <Box
                _before={{
                  content: `""`,
                  position: "absolute",
                  right: "-5px",
                  top: "0",
                  borderStyle: "dashed",
                  borderWidth: "6px",
                  borderColor: "rgba(255,255,255,0)",
                  borderTop: "6px solid #3e4650",
                  width: "0",
                  height: "0",
                  fontSize: "0",
                  lineHeight: "0",
                  transform: "translate3d(0,0,0)",
                  borderLeftWidth: "0",
                  borderTopWidth: "10px",
                }}
              />
              <Box
                h="3.5"
                w="3.5"
                bgSize="512px 256px"
                bgRepeat="no-repeat"
                bgPosition="-240px -184px"
                bgImage="https://m.media-amazon.com/images/S/sash/E6vgqiIirWgGb3f.png"
              />
              <Text
                fontSize="xs"
                ml="1"
                color="contrast.200"
                letterSpacing="wider"
              >
                Fulfilled
              </Text>
              <Box
                _after={{
                  content: `""`,
                  position: "absolute",
                  right: "-5px",
                  bottom: "0",
                  borderStyle: "dashed",
                  borderWidth: "6px",
                  borderColor: "rgba(255,255,255,0)",
                  borderBottom: "6px solid #3e4650",
                  width: "0",
                  height: "0",
                  fontSize: "0",
                  lineHeight: "0",
                  transform: "translate3d(0,0,0)",
                  borderTopWidth: "0",
                  borderLeftWidth: "0",
                  borderBottomWidth: "10px",
                }}
              />
            </Flex>
          ) : null}
          {isFreeDelievery ? (
            <Box
              whiteSpace="nowrap"
              color="gray.100"
              fontSize="xs"
              ml="0.5"
              fontWeight="bold"
            >
              FREE Delivery.
              <Link
                ml="0.5"
                as="span"
                color="green.400"
                _hover={{
                  color: "orange.300",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Details
              </Link>
            </Box>
          ) : (
            ""
          )}
        </Flex>
      </GridItem>
    </Box>
  )
}
