// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
    ],
  },
  {
    title: "Theme Settings",
    href: "/theme-settings",
    noLink: true,
    items: [
      { title: "General Settings", href: "/generalSettings" },
      { title: "Header & Navigation", href: "/headerNavigation" },
      { title: "Footer Configuration", href: "/footerConfiguration" },
      { title: "Typography & Colors", href: "/typographyColors" },
    ]
  },
  {
    title: "Sections",
    href: "/sections",
    noLink: true,
    items: [
      { title: "Hero Section", href: "/heroSection" },
    ]
  },
  {
    title: "Support",
    href: "/support",
    noLink: true,
    items: [
      { title: "Contact Support", href: "/contactSupport" },
      { title: "FAQs", href: "/faqs" },
    ]
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
