import { HorizontalMenu } from "./HorizontalMenu";
import { VerticalMenu } from "./VerticalMenu";

export interface MenuItem {
  title: string;
  href?: string;
  description?: string;
  childrens?: MenuItem[];
}

const section_1: MenuItem = {
  title: "Section 1",
  childrens: [
    {
      title: "BlaBlah",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
  ],
};

const components: MenuItem = {
  title: "Components",
  childrens: [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
      childrens: [
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
      ],
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ],
};

const menuItems = [section_1, components, components];

export default function Navbar() {
  return (
    <>
      <HorizontalMenu menuItems={menuItems} />
      <VerticalMenu menuItems={menuItems} />
    </>
  );
}
