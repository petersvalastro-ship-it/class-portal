import { createFileRoute } from "@tanstack/react-router";
import EntrepreneurshipApp from "@/components/EntrepreneurshipApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Young Entrepreneur Academy | Learn Business Basics" },
      {
        name: "description",
        content:
          "Interactive glossary, profit calculators, practice scenarios, and a venture simulator to teach entrepreneurship fundamentals.",
      },
      { property: "og:title", content: "Young Entrepreneur Academy" },
      {
        property: "og:description",
        content:
          "Learn entrepreneurship with an interactive glossary, calculators, scenarios, and a venture simulator.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <EntrepreneurshipApp />;
}
