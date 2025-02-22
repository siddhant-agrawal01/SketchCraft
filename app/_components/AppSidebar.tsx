import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Component,
  CreditCard,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Workspace",
    url: "/dashboard",
    icon: Briefcase,
  },
  {
    title: "Design",
    url: "/design",
    icon: Component,
  },
  {
    title: "Credits",
    url: "/credits",
    icon: CreditCard,
  },
];

export function AppSidebar() {
  const path = usePathname();
  console.log(path);
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-4">
          <Image
            src={"./logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="w-full h-full"
          />
          <h2 className="text-sm text-gray-400 text-center">Build Awesome</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-5">
              {items.map((item, index) => (
                <a
                  href={item.url}
                  key={index}
                  className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg
                                 ${path == item.url && "bg-blue-100" }
                                 `}
                >
                    
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              ))}
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
