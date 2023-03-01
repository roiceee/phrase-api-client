/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

interface HeadWrapperProps {
    title?: String;
}
export default function HeadWrapper({title}: HeadWrapperProps) {
    return (
    <Head>
        <title>{!title || title.length === 0 ? "Phrase API"  : title + " | Phrase API"}</title>
        <meta name="description" content="API for quotes and jokes and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/icon.ico" />
    </Head>)
};
