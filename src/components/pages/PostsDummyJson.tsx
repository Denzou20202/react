import DataFetcher from "../service/api.services.tsx";

export default function PostsDummyJson () {
  return (

    <div style={{marginTop: '50px'}}>
    <h2>Posts from DummyJson</h2>
      <DataFetcher url="https://dummyjson.com/posts"/>
    </div>
  )
}
