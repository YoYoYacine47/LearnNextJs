import { useRouter } from "next/dist/client/router";
import React from "react";

function Article() {
  const router = useRouter();

  // router.query.[id]  on the [id].js
  const articleId = router.query.id;
  // from the articleId we can fetch data form database

  return (
    <div>
      <h2> Article page </h2>
      <h3>article id : {router.query.id}</h3>
    </div>
  );
}

export default Article;
