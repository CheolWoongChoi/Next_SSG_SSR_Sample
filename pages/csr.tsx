import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CsrPage() {
  const router = useRouter();
  const [todo, setTodo] = useState();

  const goHome = () => {
    router.push("/");
  };

  const setFetchedTodo = async () => {
    const randomId = Math.floor(Math.random() * 100);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${randomId}`
    );
    const todo = await res.json();

    setTodo(todo);
  };

  useEffect(() => {
    setFetchedTodo();
  }, []);

  return (
    <div>
      <h3>This is CSR-Page</h3>
      <p>{JSON.stringify(todo)}</p>
      <p onClick={goHome}>Go Home</p>
    </div>
  );
}
