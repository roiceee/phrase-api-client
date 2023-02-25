import Head from "next/head";

interface HeadWrapperProps {
    title: String;
}
export default function HeadWrapper({title}: HeadWrapperProps) {
    return (
    <Head>
        <title>{title} | Phrase API</title>
        <meta name="description" content="API for quotes and jokes and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/icon.ico" />
    </Head>)
};
