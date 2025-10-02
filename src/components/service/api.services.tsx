import {useEffect, useState} from "react";

type UrlProps = {
  url: string;
}

export default function DataFetcher({ url }: UrlProps) {
  const [data, setData] = useState<unknown[]>([])

 useEffect( () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const values = Array.isArray(json) ? json : Object.values(json)[0]
        setData(values as unknown[])
      })
  }, [url])

  return (
    <pre style={{padding: 10, overflow: "auto" }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}