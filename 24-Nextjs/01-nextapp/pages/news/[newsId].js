//our-domain.com/news

import { useRouter } from "next/router";

const InfoPage = () => {
  const router = useRouter();
  const id = router.query.newsId;
  console.log(id);
  return <h1>This is InfoPage {id}</h1>;
};

export default InfoPage;
