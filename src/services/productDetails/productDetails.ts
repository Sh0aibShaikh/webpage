import ky from "ky"

// type Response = {
//   id: number
//   message: string
// }
const productDetails = async (httpClient: typeof ky) => {
  return httpClient.get("ProductsDeals.json").json()
}
export default productDetails
