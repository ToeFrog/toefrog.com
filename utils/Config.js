/*
 * This Config object is used throughout the application to
 * personalise your code and preferences for how you would
 * like things to work.
 *
 * For example, use the Config object to configure your menu links
 * without editing HTML, or change the page size on /blog without
 * touching any of the functional code.
 *
 */

const SITE_URL = "https://toefrog.com";

export const Config = {
  site: {
    owner: "ToeFrog",
    title: "Build. Learn. Share. Repeat",
    domain: "toefrog.com",
    email: "chris@toefrog.com",
    feedDescription: "RSS Feed for toefrog.com",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "TheToeFrog",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/blog/[slug]",
    },
    buildRss: {
      url: `${SITE_URL}/buildrss`,
      slug: "/buildrss",
    },
    privacyPolicy: {
      url: `${SITE_URL}/privacy-policy`,
      slug: "/privacy-policy",
    },
    notFound: {
      url: SITE_URL,
      slug: "/404",
    },
  },
  pagination: {
    pageSize: 6,
    recentPostsSize: 3,
  },
  menuLinks: [
    {
      displayName: "Home",
      path: "/",
    },
    {
      displayName: "Blog",
      path: "/blog",
    },
  ],
};
