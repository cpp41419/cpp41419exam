'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/data/categories';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home } from 'lucide-react';

export function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <ScrollArea className="h-full px-1"> {/* Added px-1 to match sidebar header/footer padding */}
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            asChild
            isActive={pathname === '/'}
            className="w-full justify-start"
            tooltip="Home"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {categories.map((category) => {
          const href = `/questions/${category.slug}`;
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <SidebarMenuItem key={category.slug}>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                className="w-full justify-start"
                tooltip={category.name}
              >
                <Link href={href}>
                  {/* Consider adding icons per category if available/desired */}
                  <span>{category.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </ScrollArea>
  );
}
