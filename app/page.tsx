"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { DropdownMenu } from "@/ui/components/DropdownMenu";
import { ProjectCard } from "@/ui/components/ProjectCard";
import { SiteFooter } from "@/ui/components/SiteFooter";
import { SiteNav } from "@/ui/components/SiteNav";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import { FeatherBriefcase } from "@subframe/core";
import { FeatherChevronDown } from "@subframe/core";
import { FeatherChevronRight } from "@subframe/core";
import { FeatherCode } from "@subframe/core";
import { FeatherDownload } from "@subframe/core";
import { FeatherFileCode } from "@subframe/core";
import { FeatherFolder } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { FeatherMap } from "@subframe/core";
import { FeatherMoreHorizontal } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import * as SubframeCore from "@subframe/core";

function FullStackPortfolio() {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) return;

    const navElement = document.getElementById("main-nav");
    const navOffset = navElement
      ? navElement.getBoundingClientRect().height + 32
      : 112;

    const targetTop =
      sectionElement.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
  };

  const projects = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "CIDA (UNRELEASED, PLACEHOLDER)",
      description:
        "Data aggregation pipeline that analyzes and generates reports on HOA's.",
      lastUpdated: "Dec 12, 2024",
      tags: ["Python", "TypeScript", "PostgreSQL", "FastAPI"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: "HeadCount (UNRELEASED, PLACEHOLDER)",
      description:
        "Generate optimized schedules based on availabilities and staffing requirements.",
      lastUpdated: "Nov 19, 2023",
      tags: ["Python", "TypeScript", "MySQL", "Flask"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      title: "RealDoc.app",
      description:
        "Web app built for real estate agencies automating CE certification generation.",
      lastUpdated: "May 29, 2022",
      tags: ["Python", "TypeScript", "MySQL", "Flask"],
      titleClassName: "hover:text-brand-primary transition-colors",
      descriptionClassName: "whitespace-normal",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      title: "Pipeline Monitor (PLACEHOLDER)",
      description: "Observability dashboard for distributed data workflows.",
      lastUpdated: "Jan 09, 2025",
      tags: ["TypeScript", "React", "PostgreSQL", "Redis"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: "Ops Board (PLACEHOLDER)",
      description: "Operational planning and handoff system for internal teams.",
      lastUpdated: "Feb 03, 2025",
      tags: ["Next.js", "Node.js", "OpenAPI", "Docker"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=800&q=80",
      title: "Doc Automation (PLACEHOLDER)",
      description: "Template-driven document generation and workflow automation.",
      lastUpdated: "Mar 15, 2025",
      tags: ["Python", "FastAPI", "RabbitMQ", "MySQL"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      title: "Hiring Hub (PLACEHOLDER)",
      description: "Candidate tracking and interview score aggregation platform.",
      lastUpdated: "Apr 11, 2025",
      tags: ["TypeScript", "React", "MongoDB", "Express"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      title: "Load Planner (PLACEHOLDER)",
      description: "Capacity forecasting and utilization planning tool.",
      lastUpdated: "May 04, 2025",
      tags: ["Python", "SQL", "Flask", "Redis"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
      title: "Audit Trail (PLACEHOLDER)",
      description: "Immutable audit history for regulated data operations.",
      lastUpdated: "Jun 27, 2025",
      tags: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
      title: "Queue Insights (PLACEHOLDER)",
      description: "Real-time queue analytics and SLA alerting service.",
      lastUpdated: "Jul 12, 2025",
      tags: ["TypeScript", "RabbitMQ", "Redis", "Grafana"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      title: "Report Studio (PLACEHOLDER)",
      description: "Self-service reporting builder with export automation.",
      lastUpdated: "Aug 01, 2025",
      tags: ["React", "FastAPI", "PostgreSQL", "OpenAPI"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: "Infra Pulse (PLACEHOLDER)",
      description: "Infrastructure health scoring and anomaly detection.",
      lastUpdated: "Aug 28, 2025",
      tags: ["Python", "AWS", "Docker", "Prometheus"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      title: "Schedule Sync (PLACEHOLDER)",
      description: "Cross-team scheduling optimizer with conflict resolution.",
      lastUpdated: "Sep 14, 2025",
      tags: ["TypeScript", "Node.js", "MySQL", "Redis"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      title: "Client Portal (PLACEHOLDER)",
      description: "Secure project portal for client communication and updates.",
      lastUpdated: "Oct 06, 2025",
      tags: ["Next.js", "PostgreSQL", "CORS", "OpenAPI"],
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: "Workflow Maps (PLACEHOLDER)",
      description: "Visual process mapping and automation trigger designer.",
      lastUpdated: "Nov 21, 2025",
      tags: ["React", "FastAPI", "MongoDB", "RabbitMQ"],
    },
  ];

  const collapsedProjectCount = 3;
  const expandedProjectsPerPage = 9;
  const [showAllProjects, setShowAllProjects] = React.useState(false);
  const [projectPage, setProjectPage] = React.useState(0);
  const totalProjectPages = Math.ceil(projects.length / expandedProjectsPerPage);

  const visibleProjects = showAllProjects
    ? projects.slice(
        projectPage * expandedProjectsPerPage,
        (projectPage + 1) * expandedProjectsPerPage
      )
    : projects.slice(0, collapsedProjectCount);

  return (
    <div className="container max-w-none flex w-full flex-col items-center bg-default-background min-h-screen">
      <SiteNav
        id="main-nav"
        variant="home"
        onAboutClick={() => scrollToSection("core-specs")}
        onTechStackClick={() => scrollToSection("skills")}
        onProjectsClick={() => scrollToSection("featured-projects")}
        onContactClick={() => scrollToSection("contact")}
        rightAction={
          <Button
            variant="brand-primary"
            size="medium"
            icon={<FeatherFileCode />}
            onClick={() => {
              window.location.href = "/full-specs";
            }}
          >
            FULL SPECS
          </Button>
        }
      />
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-24 px-6 pt-32 pb-24 flex-grow">
        <div className="flex w-full items-center gap-12 mobile:flex-row mobile:flex-wrap mobile:gap-8 justify-center">
          <div className="flex flex-col items-start gap-8 w-1/2 mobile:h-auto mobile:grow mobile:shrink-0 mobile:basis-0">
            <div className="flex flex-col items-start gap-4 mobile:h-auto mobile:w-full mobile:flex-none">
              <div className="flex items-center gap-2 mobile:h-auto mobile:w-full mobile:flex-none">
          <span className="text-heading-1 font-heading-1 text-brand-primary">
            &gt; Peter Luey
          </span>
          <span className="text-heading-1 font-heading-1 text-brand-primary">
            _
          </span>
              </div>
              <span className="text-heading-2 font-heading-2 text-default-font mobile:h-auto mobile:w-full mobile:flex-none">
          Backend Software Engineer
              </span>
              <span className="whitespace-pre-wrap text-body font-body text-subtext-color">
          {
            "Specializes in building web applications and automation enabling others to do more. Currently, I'm job searching while developing custom websites and software for businesses as part of my SaaS startup Ka Technology to eventually become full stack."
          }
              </span>
              <div className="flex items-center gap-2 mobile:h-auto mobile:w-full mobile:flex-none mobile:flex-row mobile:flex-wrap mobile:gap-2">
          <FeatherMap className="text-body font-body text-subtext-color" />
          <span className="text-body font-body text-subtext-color">
            Salem, OR
          </span>
          <div className="flex h-1 w-1 flex-none flex-col items-start gap-2 rounded-full bg-subtext-color" />
          <span className="text-body font-body text-subtext-color">
            Long Beach, CA
          </span>
              </div>
            </div>
            <div className="flex items-center gap-4 mobile:h-auto mobile:w-full mobile:flex-none mobile:flex-col mobile:flex-nowrap mobile:gap-4">
              <Button
          className="mobile:w-full"
          variant="brand-primary"
          size="large"
          icon={<FeatherDownload />}
              onClick={() => {
              const downloadLink = document.createElement("a");
              downloadLink.href = "/files/luey_peter_resume.pdf";
              downloadLink.download = "luey_peter_resume.pdf";
              document.body.appendChild(downloadLink);
              downloadLink.click();
              downloadLink.remove();
              }}
              >
          Resume
              </Button>
              <Button
          className="mobile:w-full"
          variant="neutral-secondary"
          size="large"
          icon={<FeatherBriefcase />}
              onClick={() => {
              window.location.href = "/full-specs";
              }}
              >
          Hiring? Click here
              </Button>
            </div>
          </div>
              <img
          className="flex-none w-1/2 max-w-105 object-contain mobile:w-full"
          src="/images/vibing.jpg"
          alt=""
              />
        </div>
        <div id="core-specs" className="flex w-full flex-col items-start gap-12 scroll-mt-32">
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <FeatherUser className="text-heading-2 font-heading-2 text-brand-primary" />
              <span className="text-heading-2 font-heading-2 text-default-font">
                &gt; Core Specs
              </span>
            </div>
            <div className="flex w-full flex-wrap items-start gap-8">
              <div className="flex min-w-[256px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Background
                  </span>
                  <span className="whitespace-pre-wrap text-body font-body text-subtext-color">
                    {
                      "With 2.5+ years of experience in both startup and enterprise environments, I'm a highly adaptable software engineer that can design, develop, and deploy web applications for any use case.\n\nI'm currently searching for potential job opportunities in the Willamette Valley or the Greater LA Area. My goal is to find a place where I can contribute to projects where my efforts can make an impactful in others' lives while continuing to grow as an engineer."
                    }
                  </span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Education
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Oregon State University • B.S. Computer Science
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    09/2021 - 03/2025
                  </span>
                  <SubframeCore.DropdownMenu.Root>
                    <SubframeCore.DropdownMenu.Trigger asChild={true}>
                      <Button
                        variant="neutral-tertiary"
                        size="small"
                        iconRight={<FeatherChevronDown />}
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      >
                        View Coursework
                      </Button>
                    </SubframeCore.DropdownMenu.Trigger>
                    <SubframeCore.DropdownMenu.Portal>
                      <SubframeCore.DropdownMenu.Content
                        side="bottom"
                        align="start"
                        sideOffset={4}
                        asChild={true}
                      >
                        <DropdownMenu className="max-w-[400px]">
                          <DropdownMenu.DropdownItem icon={null}>
                            Cloud Applications
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Algorithms
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Operating Systems
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            UI/UX
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Databases
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Parallel Programming
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Machine Learning
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Deep Learning
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Reinforcement Learning
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Information Retrieval
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Causal Inference
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Networks
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Statistics
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Derivative/Integral/Vector Calculus
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Linear Algebra
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Web Development
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Data Structures
                          </DropdownMenu.DropdownItem>
                          <DropdownMenu.DropdownItem icon={null}>
                            Architecture/Assembly
                          </DropdownMenu.DropdownItem>
                        </DropdownMenu>
                      </SubframeCore.DropdownMenu.Content>
                    </SubframeCore.DropdownMenu.Portal>
                  </SubframeCore.DropdownMenu.Root>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Hobbies &amp; Interests
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Photography • Coffee • Software Engineering (yes, really) •
                    Interior Design • Cooking • F1 • Finance • AI/Automation •
                    Cars • PC Hardware
                  </span>
                </div>
              </div>
              <div className="flex min-w-[256px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Work Experience
                </span>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-2 w-2 flex-none flex-col items-start gap-2 rounded-full bg-brand-primary mt-1" />
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Ka Technology
                      </span>
                      <span className="text-body font-body text-subtext-color">
                        Cofounder/Developer • Remote • Beaverton, OR
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        06/2024 - Present
                      </span>
                      <span className="text-body font-body text-subtext-color">
                        Cofounded a B2B SaaS startup to design and develop
                        custom web app automations for local businesses.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-2 w-2 flex-none flex-col items-start gap-2 rounded-full bg-brand-primary mt-1" />
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Intel
                      </span>
                      <span className="text-body font-body text-subtext-color">
                        BIOS Firmware Intern • Remote • Hillsboro, OR
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        06/2023 - 12/2023
                      </span>
                      <span className="text-body font-body text-subtext-color">
                        Implemented firmware for a flagship product and created
                        CI/CD pipelines to accelerate testing and debugging.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-2 w-2 flex-none flex-col items-start gap-2 rounded-full bg-brand-primary mt-1" />
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Tektronix
                      </span>
                      <span className="text-body font-body text-subtext-color">
                        Operations Intern • On Site • Beaverton, OR
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        03/2022 - 12/2022
                      </span>
                      <span className="text-body font-body text-subtext-color">
                        Trained and fine tuned machine learning models for
                        defect detection and developed robotic process
                        automations to automate business processes.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="skills" className="flex w-full flex-col items-start gap-12 scroll-mt-32">
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <FeatherCode className="text-heading-2 font-heading-2 text-brand-primary" />
              <span className="text-heading-2 font-heading-2 text-default-font">
                &gt; Skills
              </span>
            </div>
            <div className="w-full items-start gap-8 grid grid-cols-2 mobile:grid mobile:grid-cols-1">
              <div className="flex flex-col items-start gap-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Languages
                </span>
                <div className="flex flex-wrap items-start gap-2">
                  <Badge variant="warning">Python</Badge>
                  <Badge variant="brand">C#</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>SQL</Badge>
                  <Badge variant="neutral">C/C++</Badge>
                  <Badge variant="neutral">Java</Badge>
                  <Badge variant="neutral">HTML</Badge>
                  <Badge variant="neutral">CSS</Badge>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Frontend
                </span>
                <div className="flex flex-wrap items-start gap-2">
                  <Badge variant="brand">React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge variant="neutral">Angular</Badge>
                  <Badge variant="neutral">Vite</Badge>
                  <Badge variant="neutral">Playwright</Badge>
                  <Badge variant="neutral">Figma</Badge>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Backend
                </span>
                <div className="flex flex-wrap items-start gap-2">
                  <Badge variant="warning">Flask</Badge>
                  <Badge variant="warning">MySQL</Badge>
                  <Badge variant="brand">FastAPI</Badge>
                  <Badge variant="brand">Node.js</Badge>
                  <Badge variant="brand">ASP.NET</Badge>
                  <Badge>OpenAPI</Badge>
                  <Badge variant="neutral">MongoDB</Badge>
                  <Badge variant="neutral">PostgreSQL</Badge>
                  <Badge variant="neutral">CORS</Badge>
                  <Badge variant="neutral">Redis</Badge>
                  <Badge variant="neutral">RabbitMQ</Badge>
                  <Badge variant="neutral">Express</Badge>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
                <span className="text-body-bold font-body-bold text-default-font">
                  Cloud &amp; DevOps
                </span>
                <div className="flex flex-wrap items-start gap-2">
                  <Badge variant="warning">Github/Github Actions</Badge>
                  <Badge variant="warning">Railway</Badge>
                  <Badge variant="warning">Docker</Badge>
                  <Badge variant="brand">AWS</Badge>
                  <Badge variant="brand">Azure</Badge>
                  <Badge variant="brand">Linux</Badge>
                  <Badge variant="neutral">Jenkins CI/CD</Badge>
                  <Badge variant="neutral">Google Cloud</Badge>
                  <Badge variant="neutral">Bitbucket</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="featured-projects" className="flex w-full flex-col items-start gap-12 scroll-mt-32">
          <div className="flex items-center gap-3">
            <FeatherFolder className="text-heading-2 font-heading-2 text-brand-primary" />
            <span className="text-heading-2 font-heading-2 text-default-font">
              &gt; Featured Projects
            </span>
          </div>
          <div className="w-full items-start gap-6 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.title}
                imageSrc={project.imageSrc}
                title={project.title}
                titleClassName={project.titleClassName}
                description={project.description}
                descriptionClassName={project.descriptionClassName}
                lastUpdated={project.lastUpdated}
                tags={
                  <>
                    {project.tags.map((tag) => (
                      <Badge key={`${project.title}-${tag}`} variant="neutral">
                        {tag}
                      </Badge>
                    ))}
                    <Badge variant="neutral" icon={<FeatherMoreHorizontal />} />
                  </>
                }
              />
            ))}
          </div>
          <div className="flex w-full items-center justify-center">
            {!showAllProjects ? (
              <Button
                variant="neutral-secondary"
                size="medium"
                icon={<FeatherChevronDown />}
                onClick={() => {
                  setShowAllProjects(true);
                  setProjectPage(0);
                }}
              >
                View More Projects
              </Button>
            ) : (
              <div className="flex items-center gap-3 mobile:flex-wrap mobile:justify-center">
                <Button
                  variant="neutral-secondary"
                  size="medium"
                  icon={<FeatherChevronRight className="rotate-180" />}
                  onClick={() => {
                    setProjectPage((currentPage) => Math.max(currentPage - 1, 0));
                  }}
                  disabled={projectPage === 0}
                />
                <Button
                  variant="neutral-secondary"
                  size="medium"
                  onClick={() => {
                    setShowAllProjects(false);
                    setProjectPage(0);
                  }}
                >
                  Show Less Projects
                </Button>
                <Button
                  variant="neutral-secondary"
                  size="medium"
                  icon={<FeatherChevronRight />}
                  onClick={() => {
                    setProjectPage((currentPage) =>
                      Math.min(currentPage + 1, totalProjectPages - 1)
                    );
                  }}
                  disabled={projectPage >= totalProjectPages - 1}
                />
              </div>
            )}
          </div>
        </div>
        <div id="contact" className="flex w-full flex-col items-center gap-12 scroll-mt-32">
          <div className="flex w-full flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <FeatherMail className="text-heading-2 font-heading-2 text-brand-primary" />
              <span className="text-heading-2 font-heading-2 text-default-font">
                &gt; Get In Touch
              </span>
            </div>
            <span className="text-body font-body text-subtext-color text-center">
              Open to discussing job opportunities, new projects, creative
              ideas, and more.
            </span>
            <form
              className="flex w-full max-w-180 flex-col items-start gap-4"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
              }}
            >
              <TextField className="w-full" label="Name">
                <TextField.Input name="name" placeholder="Your name" required />
              </TextField>
              <div className="grid w-full grid-cols-2 gap-4 mobile:grid-cols-1">
                <TextField className="w-full" label="Email">
                  <TextField.Input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </TextField>
                <TextField className="w-full" label="Phone Number">
                  <TextField.Input
                    name="phone"
                    type="tel"
                    placeholder="(850) 888-3862"
                  />
                </TextField>
              </div>
              <TextArea className="w-full" label="Message">
                <TextArea.Input
                  name="message"
                  placeholder="What's the message? Enter it here..."
                  required
                />
              </TextArea>
              <Button
                disabled={true}
                type="submit"
                variant="brand-primary"
                size="medium"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

export default FullStackPortfolio;