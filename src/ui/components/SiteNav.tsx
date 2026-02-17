"use client";

import React from "react";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { IconButton } from "@/ui/components/IconButton";
import { LinkButton } from "@/ui/components/LinkButton";
import { FeatherChevronDown } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

type SiteNavVariant = "home" | "simple";

interface SiteNavProps {
  id?: string;
  variant?: SiteNavVariant;
  simpleLabel?: string;
  activeSectionLabel?: string;
  onAboutClick?: () => void;
  onTechStackClick?: () => void;
  onProjectsClick?: () => void;
  onContactClick?: () => void;
  rightAction?: React.ReactNode;
}

const logoSrc =
  "https://res.cloudinary.com/subframe/image/upload/v1770857903/uploads/35006/rtptfwbpah2ysv2ihmyi.png";

export function SiteNav({
  id,
  variant = "home",
  simpleLabel = "",
  activeSectionLabel = "_",
  onAboutClick,
  onTechStackClick,
  onProjectsClick,
  onContactClick,
  rightAction = null,
}: SiteNavProps) {
  return (
    <div id={id} className="flex w-full max-w-[1280px] items-start px-6 fixed top-6 z-50">
      <div className="flex grow shrink-0 basis-0 items-center justify-between rounded-md border border-solid border-neutral-border px-6 py-4 shadow-lg bg-black/80 backdrop-blur-sm">
        <div className="flex items-center gap-4 flex-1 relative">
          <button
            type="button"
            className="flex flex-none cursor-pointer items-center"
            onClick={() => {
              window.location.href = "/";
            }}
            aria-label="Go to home page"
          >
            <img className="h-9 flex-none object-contain" src={logoSrc} alt="Logo" />
          </button>

          {variant === "home" ? (
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <span className="text-body font-body text-brand-primary">~/</span>
                <span className="text-body font-body text-default-font">{activeSectionLabel}</span>
              </div>
              <div className="hidden flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-neutral-0 shadow-lg absolute top-full left-8 mt-2">
                <div className="flex w-full items-center gap-2 px-3 py-2 hover:bg-neutral-50 cursor-pointer">
                  <span className="text-body font-body text-brand-primary">~/</span>
                </div>
                <div className="flex w-full items-center gap-2 px-3 py-2 hover:bg-neutral-50 cursor-pointer">
                  <span className="text-body font-body text-subtext-color">~/about</span>
                </div>
                <div className="flex w-full items-center gap-2 px-3 py-2 hover:bg-neutral-50 cursor-pointer">
                  <span className="text-body font-body text-subtext-color">~/projects</span>
                </div>
                <div className="flex w-full items-center gap-2 px-3 py-2 hover:bg-neutral-50 cursor-pointer">
                  <span className="text-body font-body text-subtext-color">~/tech-stack</span>
                </div>
                <div className="flex w-full items-center gap-2 px-3 py-2 hover:bg-neutral-50 cursor-pointer">
                  <span className="text-body font-body text-subtext-color">~/contact</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <span className="text-body font-body text-brand-primary">~/</span>
              <span className="text-body font-body text-default-font">{simpleLabel}</span>
            </div>
          )}
        </div>

        {variant === "home" ? (
          <>
            <div className="flex items-center justify-center gap-6 flex-1 mobile:hidden">
              <LinkButton variant="neutral" size="medium" onClick={onAboutClick}>
                About
              </LinkButton>
              <LinkButton variant="neutral" size="medium" onClick={onTechStackClick}>
                Tech Stack
              </LinkButton>
              <LinkButton variant="neutral" size="medium" onClick={onProjectsClick}>
                Projects
              </LinkButton>
              <LinkButton variant="neutral" size="medium" onClick={onContactClick}>
                Contact
              </LinkButton>
            </div>
            <div className="flex items-start justify-end gap-2 flex-1 mobile:hidden">
              {rightAction}
            </div>
            <div className="hidden items-start mobile:flex">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <IconButton
                    variant="neutral-tertiary"
                    icon={<FeatherChevronDown />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="end"
                    sideOffset={12}
                    asChild={true}
                  >
                    <DropdownMenu className="pt-2">
                      <DropdownMenu.DropdownItem icon={null} onClick={onAboutClick}>
                        ~/about
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={null} onClick={onTechStackClick}>
                        ~/skills
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={null} onClick={onProjectsClick}>
                        ~/projects
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon={null} onClick={onContactClick}>
                        ~/contact
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
