import * as simpleIcons from "simple-icons";

type IconData = { path: string; title: string };

function lookupIcon(slug: string): IconData | null {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof simpleIcons;
  const icon = simpleIcons[key] as IconData | undefined;
  return icon ?? null;
}

/**
 * Renders a simple-icons brand mark by slug (see src/data/skills.ts for
 * where slugs come from). Icons are monochrome (currentColor) by default
 * so they stay consistent with the site's theme instead of a mismatched
 * wall of brand colors.
 */
export function SimpleIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const icon = lookupIcon(slug);
  if (!icon) return null;

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
