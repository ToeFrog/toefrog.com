import Image from "next/image";
import AuthorStyles from "@styles/Author.module.css";
import TypographyStyles from "@styles/Typography.module.css";

function renderTwitter(username) {
  return (
    <a
      className={`${TypographyStyles.inlineLink} ${AuthorStyles.author__linkText}`}
      href={`https://twitter.com/${username}`}
      target="_blank"
      rel="nofollow"
    >
      Twitter
    </a>
  );
}

function renderTwitch(username) {
  return (
    <a
      className={`${TypographyStyles.inlineLink} ${AuthorStyles.author__linkText}`}
      href={`https://twitch.tv/${username}`}
      target="_blank"
      rel="nofollow"
    >
      Twitch
    </a>
  );
}

function renderGitHub(username) {
  return (
    <a
      className={`${TypographyStyles.inlineLink} ${AuthorStyles.author__linkText}`}
      href={`https://github.com/${username}`}
      target="_blank"
      rel="nofollow"
    >
      GitHub
    </a>
  );
}

function renderWebsite(url) {
  return (
    <a
      className={`${TypographyStyles.inlineLink} ${AuthorStyles.author__linkText}`}
      href={url}
      target="_blank"
      rel="nofollow"
    >
      Website
    </a>
  );
}

export default function Author(props) {
  console.log(`Author: ${props}`);

  const { author } = props;
  const hasLinks =
    author.twitter ||
    author.twitch ||
    author.github;
    // author.websiteUrl;
  return (
    <>
      <div className={AuthorStyles.author}>
        <div className={AuthorStyles.author__imgContainer}>
          <Image
            className={AuthorStyles.author__img}
            src={`${author.image.url}?w=350`}
            alt={author.image.description}
            height={author.image.height}
            width={author.image.width}
          />
        </div>
        <div className={AuthorStyles.author__detailsContainer}>
          <h2 className={AuthorStyles.author__name}>{author.name}</h2>
          <p className={AuthorStyles.author__description}>
            {author.shortBio}
          </p>
          {hasLinks && (
            <div className={AuthorStyles.author__links}>
              {author.twitter && renderTwitter(author.twitter)}
              {author.twitch && renderTwitch(author.twitch)}
              {author.github && renderGitHub(author.github)}
              {/* {author.websiteUrl && renderWebsite(author.websiteUrl)} */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
