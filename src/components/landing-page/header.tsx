'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '@/public/icons/deskiconagain.svg';
// import { DeskIconAgain } from '@/public/icons/deskiconagain';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const routes = [
  { title: 'Features', href: '#features' },
  { title: 'Reasources', href: '#resources' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Testimonials', href: '#testimonial' },
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '#',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '#',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const Header = () => {
  const [path, setPath] = useState('#products');
  return (
    <header
      className="p-4 px-8
      flex
      justify-center
      items-center
  "
    >
      <Link
        href={'/'}
        className="w-full flex gap-2
        justify-left items-center"
      >
        <Image src={Logo} alt="Deskera Logo" width={25} height={25} />
        <span
          className="font-semibold
          dark:text-white
        "
        >
          Deskera AI
        </span>
      </Link>
      <NavigationMenu className="h-1/3 hidden md:block">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#resources')}
              className={cn({
                'dark:text-white': path === '#resources',
                'dark:text-white/40': path !== '#resources',
                'font-normal': true,
                'text-sm': true,
              })}
            >
              Industry
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul
                className="grid
                gap-3
                p-6
                md:w-[600px]
                ld:w-[600px]
                lg:grid-cols-[.75fr_1fr]
                "
              >
                <ListItem href="#" title="Industrial Manufacturing">
                  Seamless production planning, Real-time inventory tracking,
                  Efficient materials management, Cost control and visibility,
                  Financial insights and reporting{' '}
                </ListItem>
                <ListItem href="#" title="Electronics Manufacturing">
                  Component traceability and sourcing, Integrated BOM and
                  production management, Quality control and inspection, On-time
                  delivery and reduced lead times, Supply chain optimization and
                  risk mitigation{' '}
                </ListItem>
                <ListItem href="#" title="Apparel & Footwear">
                  Demand forecasting and production planning, Inventory
                  optimization and lean manufacturing, Cost control and
                  profitability, Order fulfillment and logistics management,
                  Customer relationship management (CRM)
                </ListItem>
                <ListItem href="#" title="Food & Beverage">
                  Seamless inventory management, Traceability and compliance,
                  HACCP and FSMA compliance, Recipe and formulation management,
                  Production planning and scheduling{' '}
                </ListItem>
                <ListItem href="#" title="Automotive Manufacturing">
                  Just-in-time (JIT) inventory management, Quality control and
                  testing, Supply chain collaboration, Regulatory compliance,
                  Production efficiency and cost reduction{' '}
                </ListItem>
                <ListItem href="#" title="Chemicals & Pharmaceuticals">
                  Strict batch tracking and traceability, Regulatory compliance
                  and documentation, Process optimization and yield improvement,
                  Safety and environmental management, Recipe and formulation
                  management{' '}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath('#pricing')}
              className={cn({
                'dark:text-white': path === '#pricing',
                'dark:text-white/40': path !== '#pricing',
                'font-normal': true,
                'text-sm': true,
              })}
            >
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[500px]  gap-3 p-4  md:grid-row-2  ">
                <ListItem title="Blog" href={'#'}>
                  Learn how to scale your business
                </ListItem>
                <ListItem title={'Developers'} href={'#'}>
                  Integrate Deskera into your apps
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuContent>
              <ul
                className="grid w-[400px]
              gap-3
              p-4 h-[400px]
              md:w-[500px]
              md:grid-cols-2 
              lg:w-[600px]
              "
              >
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), {
                'dark:text-white': path === '#testimonials',
                'dark:text-white/40': path !== '#testimonials',
                'font-normal': true,
                'text-sm': true,
              })}
            >
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <aside
        className="flex
        w-full
        gap-2
        justify-end
      "
      >
        <Link href={'/login'}>
          <Button variant={'secondary'} className="text-xs whitespace-nowrap">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button variant={'default'} className="text-xs whitespace-nowrap">
            Sign Up
          </Button>
        </Link>
      </aside>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'group block select-none space-y-1 font-medium leading-none'
          )}
          {...props}
        >
          <div className="text-white text-sm font-medium leading-none">
            {title}
          </div>
          <p
            className="group-hover:text-white/70
            line-clamp-2
            text-sm
            leading-snug
            text-white/40
          "
          >
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = 'ListItem';
