import { useEffect, useState } from "react"
import { updateVotes } from "../src/utils/api"
import { useParams } from "react-router-dom"

function Votes() {

    const [votes, setVotes] = useState(0)
    const { article_id } = useParams()

    useEffect(()=>{
        updateVotes(article_id).then((data)=>{
            console.log(data)
        })
    })
}

export default Votes