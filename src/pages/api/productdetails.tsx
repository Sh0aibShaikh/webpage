import type { NextApiRequest, NextApiResponse } from "next"
import { MyHTTP } from "../../services/httpClient"
import { withSessionRoute } from "../../utils/withSession"
// import { JsonResponse } from "../../services/types/types"

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    let httpClient = new MyHTTP(req, res)

    console.log("Request Transaction", req.body)

    const response: any = await httpClient.productDetails.productDetails()

    await req.session.save()
    res.status(200).json(response)
  }
}

export default withSessionRoute(handler)
