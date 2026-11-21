// Site-wide settings that aren't stored in the database.
// Override any of these with VITE_* variables in .env.local (or your host's
// environment settings), or just edit the defaults below.
import defaultAvatar from "./assets/avatar-placeholder.svg";

const env = import.meta.env;

export const siteConfig = {
  // Shown in the footer copyright and as the avatar alt text.
  name: env.VITE_SITE_NAME || "Your Name",
  // Text logo in the top-left of the header.
  logoText: env.VITE_SITE_LOGO || "Portfolio",
  // Replace src/assets/avatar-placeholder.svg with your own image, or point
  // VITE_AVATAR_URL at a hosted image.
  avatar: env.VITE_AVATAR_URL || defaultAvatar,
  avatarTooltip: env.VITE_AVATAR_TOOLTIP || "",
};
