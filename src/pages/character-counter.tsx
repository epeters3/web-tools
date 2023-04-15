import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const CharacterCounterPage: React.FC<PageProps> = () => {
  const [text, setText] = React.useState("");
  return (
    <main>
      <h1>Character Counter</h1>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>Character count: {text.length}</p>
    </main>
  );
};

export default CharacterCounterPage;

export const Head: HeadFC = () => <title>Character Counter</title>;
