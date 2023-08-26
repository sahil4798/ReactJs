//our-domain.com/news

import { Freagment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>This is NewsPage </h1>
      <ul>
        <li>
          <Link href="/news/n-1">New1</Link>
        </li>
        <li>
          <Link href="/news/n-2">New2</Link>
        </li>
        <li>
          <Link href="/news/n-3">New3</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
