import * as React from "react";
import { HeadFC, Link, PageProps, withPrefix } from "gatsby";

const links = [
  { path: "/character-counter", name: "Character Counter" },
  { path: "/time-tracker", name: "Time Tracker" },
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Web Tools</h1>
      {links.map(({ path, name }) => (
        <p>
          <Link to={path}>{name}</Link>
        </p>
      ))}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Web Tools</title>;
