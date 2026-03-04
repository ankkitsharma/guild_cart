"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import { MenuItem } from "./Navbar";
import { ChevronRight } from "lucide-react";

interface HorizontalMenuProps {
  menuItems: MenuItem[];
}

export function HorizontalMenu({ menuItems }: HorizontalMenuProps) {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Horizontal Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* {menuItems.map((item, index) => {
          return (
            <NavigationMenuItem className="hidden md:flex" key={index}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href ?? ""}
                  >
                    {item.childrens && item?.childrens?.length <= 1
                      ? item.description
                      : item.childrens?.map((child, index) => {
                          return (
                            <NavigationMenu
                              className="hidden md:flex"
                              key={index}
                            >
                              <NavigationMenuTrigger>
                                {child.title}
                              </NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                  <ListItem
                                    key={child.title}
                                    title={child.title}
                                    href={child.href ?? ""}
                                  ></ListItem>
                                </ul>
                              </NavigationMenuContent>
                            </NavigationMenu>
                          );
                        })}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
          );
        })} */}
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.childrens && item.childrens.length > 0 ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.childrens
                      .filter((child) => child !== undefined)
                      .map((child, childIndex) => (
                        <ListItem key={childIndex} item={child} />
                      ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  href={item.href ?? "#"}
                  className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// function ListItem({
//   title,
//   children,
//   href,
//   ...props
// }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
//   return (
//     <li {...props}>
//       <NavigationMenuLink asChild>
//         <Link href={href}>
//           <div className="flex flex-col gap-1 text-sm">
//             <div className="leading-none font-medium">{title}</div>
//             <div className="line-clamp-2 text-muted-foreground">{children}</div>
//           </div>
//         </Link>
//       </NavigationMenuLink>
//     </li>
//   );
// }

function ListItem({
  item,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { item: MenuItem }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  if (!item) {
    return null;
  }

  const handleMouseEnter = () => {
    // Clear any pending timeout to close the menu
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Delay before closing the submenu
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150); // 150ms delay
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // If item has children, render with hover-triggered submenu
  if (item.childrens && item.childrens.length > 0) {
    return (
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="flex items-center justify-between select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
          <div className="text-sm font-medium leading-none">{item.title}</div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Submenu that appears on hover */}
        {isHovered && (
          <div className="absolute left-full top-0 ml-1 z-50">
            <ul className="grid w-[200px] gap-1 p-2 bg-popover border rounded-md shadow-md">
              {item.childrens
                .filter((child) => child !== undefined)
                .map((child, index) => (
                  <ListItem key={index} item={child} />
                ))}
            </ul>
          </div>
        )}
      </li>
    );
  }

  // Leaf node - render as a link
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={item.href ?? "#"}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{item.title}</div>
          {item.description && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
