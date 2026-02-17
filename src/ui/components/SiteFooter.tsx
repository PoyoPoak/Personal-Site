"use client";

import React, { useEffect, useState } from "react";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherGitBranch } from "@subframe/core";
import { FeatherGithub } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { FeatherPhone } from "@subframe/core";
import { getLatestCommitHash } from "@/lib/github";

interface SiteFooterProps {
  commitHash?: string;
}

export function SiteFooter({ commitHash: initialHash }: SiteFooterProps) {
  const [commitHash, setCommitHash] = useState(initialHash || "------");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function fetchHash() {
      const hash = await getLatestCommitHash();
      if (hash) {
        setCommitHash(hash);
      }
    }
    fetchHash();
  }, []);

  return (
    <div className="flex w-full max-w-[1280px] mx-auto items-start px-6 pb-6">
      <div className="flex grow shrink-0 basis-0 items-center justify-between rounded-md border border-solid border-neutral-border px-6 py-4 shadow-lg bg-black/80 backdrop-blur-sm mobile:flex-col mobile:items-center mobile:gap-3">
        <div className="flex flex-1 items-center justify-start">
          <span className="text-body font-body text-subtext-color">
            © {currentYear} Peter Luey
          </span>
        </div>
        <div className="flex items-center gap-4">
          <IconButton
            variant="neutral-tertiary"
            icon={<FeatherGithub />}
            onClick={() => {
              window.open(
                "https://github.com/PoyoPoak",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />
          <IconButton
            variant="neutral-tertiary"
            icon={<FeatherLinkedin />}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/peterluey/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />
          <IconButton
            variant="neutral-tertiary"
            icon={<FeatherPhone />}
            onClick={() => {
              window.location.href = "tel:+18508883862";
            }}
          />
          <IconButton
            variant="neutral-tertiary"
            icon={<FeatherMail />}
            onClick={() => {
              window.location.href = "mailto:peterluey.com@gmail.com";
            }}
          />
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 mobile:hidden">
          <FeatherGitBranch className="text-body font-body text-subtext-color" />
          <span className="text-body font-body text-subtext-color">
            {commitHash}
          </span>
        </div>
      </div>
    </div>
  );
}
