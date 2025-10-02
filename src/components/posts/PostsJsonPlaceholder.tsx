import DataFetcher from "../service/api.services.tsx";

export default function PostsJsonPlaceholder () {
  return (
    <div style={{marginTop: '50px'}}>
    <h2>Posts from JSONPlaceholder</h2>
    <DataFetcher url="https://jsonplaceholder.typicode.com/posts"/>
    </div>
  )
}