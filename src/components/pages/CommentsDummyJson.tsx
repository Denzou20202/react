import DataFetcher from "../service/api.services.tsx";

export default function CommentsDummyJson () {
  return (
    <div style={{marginTop: '50px'}}>
    <h2>Comments from DummyJson</h2>
    <DataFetcher url="https://dummyjson.com/comments"/>
    </div>
  )
}