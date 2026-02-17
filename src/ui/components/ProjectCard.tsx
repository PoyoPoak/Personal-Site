"use client";

import React from "react";
import { FeatherGithub } from "@subframe/core";
import { FeatherLink } from "@subframe/core";
import { LinkButton } from "./LinkButton";
import * as SubframeUtils from "../utils";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: React.ReactNode;
  date: string;
  tags: React.ReactNode;
  githubUrl?: string;
  liveDemoUrl?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function ProjectCard({
  imageSrc,
  title,
  description,
  date,
  tags,
  githubUrl,
  liveDemoUrl,
  titleClassName,
  descriptionClassName,
}: ProjectCardProps) {
  const hasActions = Boolean(githubUrl || liveDemoUrl);

  const handleOpenLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-neutral-50 shadow-sm hover:border-brand-primary transition-colors cursor-pointer">
      <img className="h-40 w-full flex-none object-cover" src={imageSrc} alt={title} />
      <div className="flex w-full flex-col items-start gap-3 px-6 py-6">
        <span
          className={SubframeUtils.twClassNames(
            "w-full truncate text-heading-3 font-heading-3 text-default-font",
            titleClassName
          )}
        >
          {title}
        </span>
        <span
          className={SubframeUtils.twClassNames(
            "line-clamp-2 w-full text-body font-body text-subtext-color",
            descriptionClassName
          )}
        >
          {description}
        </span>
        <div className="flex min-h-6 w-full flex-nowrap items-start gap-2 overflow-hidden">
          {tags}
        </div>
        <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border pt-2 min-h-6">
          <div className="flex items-center gap-4">
            {githubUrl ? (
              <LinkButton
                size="small"
                icon={<FeatherGithub />}
                onClick={(event) => {
                  event.stopPropagation();
                  handleOpenLink(githubUrl);
                }}
              >
                Github
              </LinkButton>
            ) : null}
            {liveDemoUrl ? (
              <LinkButton
                size="small"
                icon={<FeatherLink />}
                onClick={(event) => {
                  event.stopPropagation();
                  handleOpenLink(liveDemoUrl);
                }}
              >
                Live Demo
              </LinkButton>
            ) : null}
          </div>
          <span className="text-caption font-caption text-subtext-color">{date}</span>
        </div>
      </div>
    </div>
  );
}
