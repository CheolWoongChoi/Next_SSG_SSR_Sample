import { useRouter } from "next/router";

function IndexPage() {
  const router = useRouter();

  const goSsgPage = () => {
    router.push("/ssg");
  };

  const goSsrPage = () => {
    router.push("/ssr");
  };

  const goCsrPage = () => {
    router.push("/csr");
  };

  return (
    <div>
      <ul>
        <li onClick={goSsgPage}>Go SSG-Page</li>
        <br />
        <li onClick={goSsrPage}>Go SSR-Page</li>
        <br />
        <li onClick={goCsrPage}>Go CSR-Page</li>
      </ul>
    </div>
  );
}

export default IndexPage;
