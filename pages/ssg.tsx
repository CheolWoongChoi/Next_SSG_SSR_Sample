import { useRouter } from "next/router";

interface Props {
  testValue: number;
}

export default function SsgPage({ testValue }: Props) {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h3>This is SSG-Page</h3>
      <p>{testValue}</p>
      <p onClick={goHome}>Go Home</p>
    </div>
  );
}

export async function getStaticProps() {
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
