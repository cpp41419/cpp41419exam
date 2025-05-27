import type { ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { AppLogo } from '@/components/core/AppLogo';
import { SidebarNavigation } from '@/components/navigation/SidebarNavigation';
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader className="p-4 border-b"> {/* Added padding and border */}
          <AppLogo />
        </SidebarHeader>
        <SidebarContent className="p-0"> {/* Removed default padding for ScrollArea */}
          <SidebarNavigation />
        </SidebarContent>
        <SidebarFooter className="p-4 border-t">
            <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="https://firebase.google.com/docs/app-hosting" target="_blank" rel="noopener noreferrer">
                    Powered by Firebase <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
            </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
          <SidebarTrigger className="md:hidden" />
          {/* Breadcrumbs or Page Title could go here */}
        </header>
        <main className="flex-1 p-4 md:p-6 space-y-6">
          {children}
        </main>
        <Toaster />
      </SidebarInset>
    </SidebarProvider>
  );
}
