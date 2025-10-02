import DataFetcher from "../service/api.services.tsx";

export default function CommentsJsonPlaceholder () {
  return (
    <div style={{marginTop: '50px'}}>
    <h2>Comments from JSONPlaceholder</h2>
      <DataFetcher url="https://jsonplaceholder.typicode.com/comments"/>

    </div>
  )
}