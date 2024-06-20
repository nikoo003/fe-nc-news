import { useState } from "react"
import ArticleCards from "./article-cards"

function ArticlesList(){
    const [articles, setArticles] = useState([])

    return(
        <section>
            <ArticleCards articles={articles} setArticles={setArticles}/>
        </section>
    )
}

export default ArticlesList