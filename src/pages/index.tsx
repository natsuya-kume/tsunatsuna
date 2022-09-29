import type { NextPage } from "next";
import Home from "@/features/home/components/Home";
import Container from "@/components/layouts/container/Container";

const HomePage: NextPage = () => {
  return (
    <Container>
      <Home
        title="NATSUYA'S PORTFOLIO"
        subtitle="Let's take a look on my work."
        imageOn
      />
    </Container>
  );
};
export default HomePage;
