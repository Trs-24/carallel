import Library from "@/components/library/library"
import Layout from "@/components/ui/layout/layout"
import { readJsonFile } from "@/lib/localdata"

const LibraryPage = () => {
    const data = readJsonFile("/public/json/store.json")

    const { posts } = data

    return (
        <Layout title="Library">
           <Library posts={posts}/>
        </Layout>
    )
}

export default LibraryPage