import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Web Tools</h1>
      <Link to="/character-counter">Character Counter</Link>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Web Tools</title>;
