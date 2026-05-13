import type { FC } from "react";
import { HMCodingLogo } from "./HMCodingLogo";

export type HMLogoProps = {
  className?: string;
  /**
   * Navbar: theme-aware wordmark + icon.
   * Hero: single transparent treatment for gradient hero (use with `placement="hero"`).
   */
  variant?: "responsive" | "hero";
};

/** Default header lockup — readable, not oversized */
const navLockupDefault =
  "h-11 w-auto max-w-[260px] sm:h-12 sm:max-w-[290px]";

/** Hero — subtle presence, balanced with headline column */
const heroLockupDefault =
  "w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] opacity-[0.98]";

/**
 * HM Coding brand logo — thin wrapper around {@link HMCodingLogo} for nav vs hero placement.
 */
const HMLogo: FC<HMLogoProps> = ({ className, variant = "responsive" }) => {
  if (variant === "hero") {
    const box = className?.trim() ? className : heroLockupDefault;
    return (
      <span className={`relative inline-block aspect-[450/160] ${box}`}>
        <span className="block h-full w-full">
          <HMCodingLogo tone="hero" className="h-full w-full" />
        </span>
      </span>
    );
  }

  const navBox = className?.trim() ? className : navLockupDefault;

  return (
    <span className={`relative inline-block aspect-[450/160] ${navBox}`}>
      <span className="block h-full w-full dark:hidden">
        <HMCodingLogo tone="nav-light" className="h-full w-full" />
      </span>
      <span className="absolute inset-0 hidden h-full w-full dark:block">
        <HMCodingLogo tone="nav-dark" className="h-full w-full" />
      </span>
    </span>
  );
};

export default HMLogo;
