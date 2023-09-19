import axios from "axios"
import { stringify } from "querystring"

export async function GET(req: Request) {
    const url = new URL(req.url)
    const href = url.searchParams.get('url')

    if (!href) {
        return new Response('Invalid href', { status: 400 })
    }

    const res = await axios.get(href)

    const titleMatch = res.data.match(/<title>(.*?)<\/title>/)
    const title = titleMatch ? titleMatch[1] : ''

    const desctiptionMatch = res.data.match(/<meta name='description' content='(.*?)'/)
    const description = desctiptionMatch ? desctiptionMatch[1] : ' '

    const imagematch = res.data.match(/<meta property='og:image' content:'(.*?)'/)
    const imageUrl = imagematch ? imagematch[1] : ''

    return new Response(
        JSON.stringify({
            success: 1,
            meta: {
                title,
                description,
                image: {
                    url: imageUrl
                }
            }
        })
    )


}