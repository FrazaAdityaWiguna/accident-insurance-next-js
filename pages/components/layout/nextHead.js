import Head from "next/head";

export default function NextHead({ title, description }) {
  return (
    <Head>
      <title>Reg. Klaim {title && `- ${title}`}</title>
      <meta
        name="description"
        content={description ? description : "Asuransi Nomor 1 di dunia"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
