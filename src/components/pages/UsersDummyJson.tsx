import DataFetcher from "../service/api.services.tsx";

export default function UsersDummyJson() {
  return (
    <div style={{marginTop: '50px'}}>
    <h2>Users from DummyJson</h2>
    <DataFetcher url="https://dummyjson.com/users"/>
    </div>
  )
}