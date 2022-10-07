import { useRouter } from "next/router";

interface Props {
  testValue: number;
  todo: any;
}

export default function SsrPage({ testValue, todo }: Props) {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h3>This is SSR-Page</h3>
      <p>{testValue}</p>
      <p>{JSON.stringify(todo)}</p>
      <p onClick={goHome}>Go Home</p>
    </div>
  );
}

export async function getServerSideProps() {
  const randomId = Math.floor(Math.random() * 100);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${randomId}`
  );
  const todo = await res.json();
  const testValue = Math.random();

  return {
    props: {
      testValue,
      todo,
    },
  };
}
