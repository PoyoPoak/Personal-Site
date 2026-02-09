"use client";

import React from "react";
import { SiteFooter } from "@/ui/components/SiteFooter";
import { SiteNav } from "@/ui/components/SiteNav";

export default function FullSpecsPage() {
  return (
    <div className="container max-w-none flex w-full flex-col items-center bg-default-background min-h-screen">
      <SiteNav variant="simple" simpleLabel="full-specs" />

      <main className="flex w-full max-w-[1280px] grow items-center justify-center px-6 pt-32 pb-24">
        <h1 className="text-heading-1 font-heading-1 text-default-font text-center">
          Work in progress... please check back later.
        </h1>
      </main>

      <SiteFooter />
    </div>
  );
}
