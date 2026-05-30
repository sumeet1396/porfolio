import JsonLd from "@/components/JsonLd";
import PortfolioShell from "@/components/PortfolioShell";
import profileData from "@/data/profile.json";
import skillsData from "@/data/skills.json";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";
import type {
  Profile,
  SkillsData,
  ExperienceData,
  ProjectsData,
} from "@/types";

const profile = profileData as Profile;
const { skills } = skillsData as SkillsData;
const { experience } = experienceData as ExperienceData;
const { projects } = projectsData as ProjectsData;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sumeetrane.dev";

export default function Home() {
  return (
    <>
      <JsonLd profile={profile} skillNames={skills.map((s) => s.name)} siteUrl={siteUrl} />
      <PortfolioShell
        profile={profile}
        skills={skills}
        experience={experience}
        projects={projects}
      />
    </>
  );
}
