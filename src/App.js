import React from "react";
import { Accordion } from "./components/Accordion";

const items = [
  {
    id: "dfgsdfgh",
    label: "Introduction",
    content:
      "Welcome to my website! Here you can find information about my work and projects.",
  },
  {
    id: "sdhcv",
    label: "About Me",
    content:
      "I am a software engineer with experience in web development and machine learning. I enjoy coding and learning new technologies.",
  },
  {
    id: "sdjhgakjhdbxd",
    label: "Projects",
    content:
      "Some of my recent projects include a social media platform, a recommender system, and a chatbot. Check out my GitHub for more details!",
  },
];

export const App = () => {
  return (
    <>
      <Accordion items={items} />
    </>
  );
};
