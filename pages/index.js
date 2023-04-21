import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/search/genesis-1");
  });
  return (
    <div className="">
      <Head>
        <title>Bible Assistant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
