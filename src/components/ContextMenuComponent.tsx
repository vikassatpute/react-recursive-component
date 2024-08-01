// components/ContextMenu.tsx
"use client";

import * as ContextMenu from "@radix-ui/react-context-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, ReactNode } from "react";

type MenuItemProps = {
  label: string;
  href?: string;
  children?: MenuItemProps[];
};

const menuItems: MenuItemProps[] = [
  {
    label: "File",
    children: [
      {
        label: "New",
        children: [
          { label: "Project", href: "/new/project" },
          { label: "File", href: "/new/file" },
        ],
      },
      { label: "Open", href: "/open" },
    ],
  },
  {
    label: "Edit",
    children: [
      {
        label: "Find",
        children: [
          { label: "Find in Files", href: "/edit/find-in-files" },
          { label: "Replace", href: "/edit/replace" },
        ],
      },
      { label: "Undo", href: "/edit/undo" },
    ],
  },
  { label: "View", href: "/view" },
];

const ContextMenuComponent: FC = () => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="w-full h-full flex items-center justify-center">
        <div className="p-4 rounded border w-60 h-40 border-dotted flex justify-center items-center">
          Right-click Me
        </div>
      </ContextMenu.Trigger>

      <ContextMenu.Portal>
        <ContextMenu.Content className="bg-gray-900  border border-gray-700 rounded shadow-lg p-2">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

const MenuItem: FC<MenuItemProps> = ({ label, href, children }) => {
  return children ? (
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger className="flex items-center justify-between text-sm px-2 py-1 hover:bg-gray-800 rounded">
        {label}
        <span className="ml-2">&gt;</span>
      </ContextMenu.SubTrigger>

      <ContextMenu.SubContent asChild>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="bg-gray-900 border border-gray-700 rounded shadow-lg p-2"
        >
          {children.map((child, index) => (
            <MenuItem key={index} {...child} />
          ))}
        </motion.div>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  ) : (
    <ContextMenu.Item>
      {href ? (
        <Link
          href={href}
          className="block text-sm px-2 py-1 hover:bg-gray-800 rounded"
        >
          {label}
        </Link>
      ) : (
        <span className="block text-sm px-2 py-1">{label}</span>
      )}
    </ContextMenu.Item>
  );
};

export default ContextMenuComponent;
