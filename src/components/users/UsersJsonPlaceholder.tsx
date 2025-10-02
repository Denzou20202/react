import DataFetcher from "../service/api.services.tsx";

export default function UsersJsonPlaceholder() {

  return (
    <div style={{marginTop: '50px'}}>
      <h2>Users from JSONPlaceholder</h2>
      <DataFetcher url="https://jsonplaceholder.typicode.com/users" />;
    </div>

    )
}