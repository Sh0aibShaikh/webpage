export type productsDataTypes = {
  id: number
  image: string
  description: string
  ratingStars: string
  reviewCount: string
  price: string
  originalPrice: string
  discountDetails: string
  dealOfTheDay: boolean
  isFreeDelievery: boolean
  isFullFilled: boolean
}

export type DepartmentListType = {
  departmentHandler: () => void
  departMentList: boolean
  setDepartMentList: (value: boolean) => void
}
