import React from "react"
import type { NextPage } from "next"
import { Box } from "@chakra-ui/react"
import { ProductsList, Header } from "~/src/components"

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <ProductsList />
    </Box>
  )
}

export default Home
