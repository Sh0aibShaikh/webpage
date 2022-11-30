import React, { useEffect, useState } from "react"
import { SortBy, DepartmentList, ProductsCard } from "."
import { Box, Flex, Show, Hide, Grid, Spinner } from "@chakra-ui/react"
import ky from "ky"
import { productsDataTypes } from "../services/types/types"
import ReactPaginate from "react-paginate"

export default function ProductsList() {
  const [featureList, setFeatureList] = useState(false)
  const [departMentList, setDepartMentList] = useState(false)
  const [ProductsData, setProductsData] = useState<productsDataTypes[]>()
  const [itemOffset, setItemOffset] = useState(0)
  const [slectPage, setSelectPage] = useState(1)

  const endOffset = itemOffset + 5
  const pageLength = ProductsData?.length
  const pageCount = pageLength! / 5
  const currentItems = ProductsData?.slice(itemOffset, endOffset)

  const featureListHandler = () => {
    if (featureList) {
      setFeatureList(false)
    } else {
      setFeatureList(true)
      setDepartMentList(false)
    }
  }
  const departmentHandler = () => {
    if (departMentList) {
      setDepartMentList(false)
    } else {
      setDepartMentList(true)
      setFeatureList(false)
    }
  }

  useEffect(() => {
    productDealsHandler()
  }, [])

  const [Loader, setLoader] = useState(false)
  const productDealsHandler = async () => {
    const response = await ky
      .get("/api/productdetails")
      .json<productsDataTypes[]>()
    setProductsData(response)
    setLoader(true)
  }

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 5) % ProductsData!.length
    setItemOffset(newOffset)
    setSelectPage(event.selected + 1)
  }

  return (
    <Box h="100%" w="100%" m="0 auto" bgColor="contrast.200" py="5">
      {/* Desktop */}
      {Loader ? (
        <Box
          mb="5"
          display="flex"
          borderBottom={{ base: "1px solid", md: "0" }}
          borderColor="gray.250"
        >
          <DepartmentList
            departMentList={departMentList}
            setDepartMentList={setDepartMentList}
            departmentHandler={departmentHandler}
          />
          <Box
            w="-webkit-fill-available"
            borderLeft={{ base: "0", md: "2px solid #eaeded" }}
            px={{ base: "1.5", md: "5" }}
            pb="5"
          >
            <Flex justifyContent="space-between">
              <Box display={{ base: "none", md: "block" }} fontSize="sm">
                {slectPage} of 2 pages
              </Box>
              <SortBy
                featureList={featureList}
                setFeatureList={setFeatureList}
                featureListHandler={featureListHandler}
              />
            </Flex>
            <Show above="md">
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                }}
                gap={{ base: 8, md: 3 }}
              >
                {currentItems?.map((products: productsDataTypes) => (
                  <ProductsCard
                    key={products.id}
                    id={products.id}
                    image={products.image}
                    description={products.description}
                    ratingStars={products.ratingStars}
                    reviewCount={products.reviewCount}
                    price={products.price}
                    originalPrice={products.originalPrice}
                    discountDetails={products.discountDetails}
                    dealOfTheDay={products.dealOfTheDay}
                    isFreeDelievery={products.isFreeDelievery}
                    isFullFilled={products.isFullFilled}
                  />
                ))}
              </Grid>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                pageCount={pageCount}
                nextClassName={"nextBtn"}
                previousLabel="< Previous"
                onPageChange={handlePageClick}
                activeClassName={"activePage"}
                disabledClassName={"disabledBtn"}
                previousClassName={"previousBtn"}
                pageClassName={"pagination-page "}
                containerClassName={"pagationWrapper"}
              />
            </Show>
          </Box>
        </Box>
      ) : (
        <Spinner
          size="xl"
          top="50%"
          left="50%"
          speed="0.65s"
          thickness="4px"
          color="blue.300"
          position="fixed"
          emptyColor="gray.200"
        />
      )}
      {/* Mobile */}
      <Hide above="md">
        {Loader ? (
          <Box>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={{ base: 2, md: 3 }}
            >
              {currentItems?.map((products: productsDataTypes) => (
                <ProductsCard
                  key={products.id}
                  id={products.id}
                  image={products.image}
                  description={products.description}
                  ratingStars={products.ratingStars}
                  reviewCount={products.reviewCount}
                  price={products.price}
                  originalPrice={products.originalPrice}
                  discountDetails={products.discountDetails}
                  dealOfTheDay={products.dealOfTheDay}
                  isFreeDelievery={products.isFreeDelievery}
                  isFullFilled={products.isFullFilled}
                />
              ))}
            </Grid>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next >"
              pageCount={pageCount}
              pageRangeDisplayed={5}
              nextClassName={"nextBtn"}
              previousLabel="< Previous"
              onPageChange={handlePageClick}
              activeClassName={"activePage"}
              disabledClassName={"disabledBtn"}
              previousClassName={"previousBtn"}
              pageClassName={"pagination-page "}
              containerClassName={"pagationWrapper"}
            />
          </Box>
        ) : (
          <Spinner
            size="xl"
            top="50%"
            left="50%"
            speed="0.65s"
            thickness="4px"
            color="blue.300"
            position="fixed"
            emptyColor="gray.200"
          />
        )}
      </Hide>
    </Box>
  )
}
