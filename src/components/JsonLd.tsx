import type { Profile } from "@/types";

interface JsonLdProps {
  profile: Profile;
  siteUrl: string;
}

export default function JsonLd({ profile, siteUrl }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bio,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    url: siteUrl,
    sameAs: [
      profile.social.linkedin,
      profile.social.github,
      profile.social.leetcode,
    ],
    knowsAbout: profile.skills,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
