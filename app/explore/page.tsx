import type { Metadata } from "next";
import { Landing } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Practice with purpose",
  description: "Explore Testify AI exams, adaptive practice, and the Testify Alarm.",
};

export default function ExplorePage() { return <Landing />; }
