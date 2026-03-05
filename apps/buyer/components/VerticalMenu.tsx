import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer";
import { Button } from "@workspace/ui/components/button";

interface MenuItem {
  title: string;
  href: string;
  description: string;
  value: string;
}

interface VerticalMenuProps {
  logo: {
    img: string;
    text: string;
    href: string;
  };
  menuItems: MenuItem[];
}

interface VerticalMenuAccordiaonProps {
  menuItems: MenuItem[];
}

export function VerticalMenuAccordiaon({
  menuItems,
}: VerticalMenuAccordiaonProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="shipping"
      className="max-w-lg "
    >
      {/* <AccordionItem value="shipping">
        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight
          shipping. Free shipping on international orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours
          during business days.
        </AccordionContent>
      </AccordionItem>
      */}

      {menuItems.map((item, index) => {
        return (
          <AccordionItem value={item.value} key={index}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export function VerticalMenu({ menuItems }: VerticalMenuProps) {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="md:hidden">Open</DrawerTrigger>
      <DrawerContent className="md:hidden">
        <DrawerHeader>
          <DrawerTitle>Guild Cart</DrawerTitle>
          <DrawerDescription>Praise the Sun!</DrawerDescription>
          <VerticalMenuAccordiaon menuItems={menuItems} />
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
