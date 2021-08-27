import React from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <div>
      <h2> NewsPage !!</h2>

      <a href="/news/a"> *a* Tag example : very slow</a>
      <Link href="/news/link"> *Link* Tag example : very fast</Link>
    </div>
  );
}

export default NewsPage;
