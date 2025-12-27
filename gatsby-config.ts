import type { GatsbyConfig } from "gatsby";

const trackingId = process.env.GATSBY_GA_MEASUREMENT_ID;

const plugins: GatsbyConfig["plugins"] = [
  "gatsby-plugin-mdx",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: "./src/pages/",
    },
    __key: "pages",
  },
  "gatsby-plugin-use-query-params",
];

if (trackingId) {
  plugins.push({
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [trackingId],
    },
  });
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Web Tools`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: "/web-tools",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins,
};

export default config;
