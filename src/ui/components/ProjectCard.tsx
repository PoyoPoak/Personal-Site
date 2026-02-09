"use client";

import React from "react";
import * as SubframeUtils from "../utils";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: React.ReactNode;
  lastUpdated: string;
  tags: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function ProjectCard({
  imageSrc,
  title,
  description,
  lastUpdated,
  tags,
  titleClassName,
  descriptionClassName,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col items-start overflow-hidden rounded-md border border-solid border-neutral-border bg-neutral-50 shadow-sm hover:border-brand-primary transition-colors cursor-pointer">
      <img className="h-40 w-full flex-none object-cover" src={imageSrc} alt={title} />
      <div className="flex w-full flex-col items-start gap-3 px-6 py-6">
        <span
          className={SubframeUtils.twClassNames(
            "line-clamp-1 w-full text-heading-3 font-heading-3 text-default-font",
            titleClassName
          )}
        >
          {title}
        </span>
        <span
          className={SubframeUtils.twClassNames(
            "line-clamp-3 min-h-14 w-full whitespace-pre-wrap text-body font-body text-subtext-color",
            descriptionClassName
          )}
        >
          {description}
        </span>
        <div className="flex w-full items-center justify-between border-t border-solid border-neutral-border pt-2">
          <span className="text-caption font-caption text-subtext-color">Last updated</span>
          <span className="text-caption font-caption text-subtext-color">{lastUpdated}</span>
        </div>
        <div className="flex max-h-14 min-h-14 w-full flex-wrap items-start gap-2 overflow-hidden">
          {tags}
        </div>
      </div>
    </div>
  );
}
