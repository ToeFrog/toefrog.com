import SocialLinksStyles from "@styles/SocialLinks.module.css";
import Discord from "./svgs/discord";
import Twitch from "./svgs/twitch";
import Twitter from "./svgs/twitter";
import GitHub from "./svgs/github";
import Feed from "./svgs/feed";
import { Config } from "@utils/Config";

const socialLinksList = [
  {
    name: "Discord",
    url: "https://discord.gg/GQbXUVCneJ",
    ariaLabel: "Join The Pond community on Discord",
    svg: <Discord />,
  },
  {
    name: "GitHub",
    url: "https://github.com/ToeFrog",
    ariaLabel: "Browse code on GitHub",
    svg: <GitHub />,
  },
  {
    name: "Twitch",
    url: "http://live.toefrog.com",
    ariaLabel: "Join ToeFrog on Twitch",
    svg: <Twitch />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/TheToeFrog",
    ariaLabel: "Follow ToeFrog on Twitter",
    svg: <Twitter />,
  },
  {
    name: "RSS Feed",
    url: "feed.xml",
    ariaLabel: `View the RSS feed of ${Config.site.domain}`,
    svg: <Feed />,
  },
];

export default function SocialLinks(props) {
  const { fillColor } = props;

  return (
    <div className={SocialLinksStyles.socialLinks}>
      <ul className={SocialLinksStyles.socialLinks__list}>
        {socialLinksList.map((link) => (
          <li
            className={SocialLinksStyles.socialLinks__listItem}
            key={link.name}
          >
            <a
              className={SocialLinksStyles.socialLinks__listItemLink}
              style={{ color: fillColor }}
              href={link.url}
              aria-label={link.ariaLabel}
              target="_blank"
              rel="nofollow"
            >
              {link.svg}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
