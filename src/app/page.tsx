import JsonLd from "@/components/JsonLd";
import PortfolioShell from "@/components/PortfolioShell";
import profileData from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import type { Profile, ProjectsData } from "@/types";

const profile = profileData as Profile;
const { projects } = projectsData as ProjectsData;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumeetrane.dev";

export default function Home() {
  return (
    <>
      <JsonLd profile={profile} siteUrl={siteUrl} />
      <PortfolioShell profile={profile} projects={projects} />
    </>
  );
}
