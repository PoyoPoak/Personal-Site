"use client";

import React from "react";
import { SiteFooter } from "@/ui/components/SiteFooter";
import { SiteNav } from "@/ui/components/SiteNav";
import {
  FeatherTerminal,
  FeatherZap,
  FeatherCode,
  FeatherLayers,
  FeatherCpu,
  FeatherStar,
  FeatherArrowRight,
} from "@subframe/core";

interface CommandCardProps {
  label?: string;
  command: string;
  description?: string;
}

function CommandCard({ label, command, description }: CommandCardProps) {
  return (
    <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-black/60 px-5 py-4 w-full">
      {label && (
        <span className="text-caption font-caption text-brand-primary uppercase tracking-widest">
          {label}
        </span>
      )}
      <code className="text-body font-body text-default-font whitespace-pre-wrap break-all">
        {command}
      </code>
      {description && (
        <span className="text-caption font-caption text-subtext-color">
          {description}
        </span>
      )}
    </div>
  );
}

interface SectionProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function Section({ id, icon, title, children }: SectionProps) {
  return (
    <div
      id={id}
      className="flex w-full flex-col items-start gap-8 scroll-mt-32"
    >
      <div className="flex items-center gap-3">
        <span className="text-heading-2 font-heading-2 text-brand-primary">
          {icon}
        </span>
        <span className="text-heading-2 font-heading-2 text-default-font">
          &gt; {title}
        </span>
      </div>
      {children}
    </div>
  );
}

export default function AndrewMPage() {
  return (
    <div className="container max-w-none flex w-full flex-col items-center bg-default-background min-h-screen">
      <SiteNav variant="simple" simpleLabel="andrewm" />

      <div className="flex w-full max-w-[1280px] flex-col items-start gap-24 px-6 pt-32 pb-24 flex-grow">

        {/* ── Hero ── */}
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="text-heading-1 font-heading-1 text-brand-primary">
              &gt; Claude Code
            </span>
            <span className="text-heading-1 font-heading-1 text-brand-primary animate-pulse">
              _
            </span>
          </div>
          <span className="text-heading-2 font-heading-2 text-default-font">
            From Beginner to Advanced Workflows
          </span>
          <span className="text-body font-body text-subtext-color max-w-2xl">
            Hey Andrew — this page is a live demo of what Claude Code can build.
            The entire page you&apos;re reading right now was generated and deployed by
            Claude Code in a single session. Below is a guide to get you started
            and take you through to the advanced workflows I use every day.
          </span>
          <div className="flex items-center gap-2 rounded-md border border-solid border-neutral-border bg-black/60 px-5 py-3">
            <FeatherTerminal className="text-body font-body text-brand-primary flex-none" />
            <span className="text-body font-body text-subtext-color">
              Install:{" "}
            </span>
            <code className="text-body font-body text-default-font">
              npm install -g @anthropic-ai/claude-code
            </code>
          </div>
        </div>

        {/* ── What is Claude Code ── */}
        <Section id="what-is" icon={<FeatherTerminal />} title="What is Claude Code">
          <span className="text-body font-body text-subtext-color max-w-2xl">
            Claude Code is an agentic AI coding assistant that runs in your terminal
            (or IDE / desktop app). Unlike a chat interface, it has direct access to
            your filesystem, git, shell, and browser — so it can read code, write code,
            run commands, and verify its own work autonomously. You describe what you want;
            it figures out how to do it.
          </span>
          <div className="flex w-full flex-wrap gap-4">
            <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border px-5 py-4 min-w-[200px] flex-1">
              <span className="text-body-bold font-body-bold text-default-font">Where it runs</span>
              <ul className="flex flex-col gap-1">
                {[
                  "Terminal / CLI",
                  "VS Code extension",
                  "JetBrains plugin",
                  "Desktop app (Mac/Windows)",
                  "claude.ai/code (web)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FeatherArrowRight className="text-caption font-caption text-brand-primary flex-none" />
                    <span className="text-body font-body text-subtext-color">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border px-5 py-4 min-w-[200px] flex-1">
              <span className="text-body-bold font-body-bold text-default-font">What it can access</span>
              <ul className="flex flex-col gap-1">
                {[
                  "Read & write any file",
                  "Run shell commands",
                  "Call git",
                  "Browse the web (via MCP)",
                  "Call external APIs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FeatherArrowRight className="text-caption font-caption text-brand-primary flex-none" />
                    <span className="text-body font-body text-subtext-color">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── Getting Started ── */}
        <Section id="beginner" icon={<FeatherZap />} title="Getting Started (Beginner)">
          <span className="text-body font-body text-subtext-color max-w-2xl">
            After install, navigate to your project folder and launch Claude Code.
            At the prompt you can ask questions, request edits, or describe a feature —
            in plain English. Claude reads your codebase context automatically.
          </span>
          <div className="flex w-full flex-col gap-3">
            <CommandCard
              label="Launch"
              command="claude"
              description="Opens the interactive session in your current directory."
            />
            <CommandCard
              label="Ask a question"
              command="&gt; How does the auth middleware work in this project?"
              description="Claude reads the relevant files and explains — no manual copy-paste."
            />
            <CommandCard
              label="Request an edit"
              command='&gt; Add a loading spinner to the submit button in ContactForm.tsx'
              description="Claude finds the file, shows you a diff, and waits for approval before writing."
            />
            <CommandCard
              label="Accept / reject changes"
              command="y  →  accept all    n  →  reject    d  →  view diff first"
              description="Every file write requires your permission unless you grant blanket approval."
            />
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-md border border-solid border-neutral-border px-5 py-4">
            <span className="text-body-bold font-body-bold text-default-font">First session checklist</span>
            {[
              "cd into your project root before launching",
              "Let Claude read a few files first — ask what the project does",
              "Try a small, bounded edit to see the diff flow",
              "Use git so you can always revert",
            ].map((tip, i) => (
              <div key={tip} className="flex items-start gap-3">
                <span className="text-body font-body text-brand-primary flex-none">{i + 1}.</span>
                <span className="text-body font-body text-subtext-color">{tip}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Core Workflows ── */}
        <Section id="intermediate" icon={<FeatherCode />} title="Core Workflows (Intermediate)">
          <span className="text-body font-body text-subtext-color max-w-2xl">
            Once you&apos;re comfortable with basics, these workflows speed up everyday
            development significantly.
          </span>

          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">Plan Mode</span>
              <span className="text-body font-body text-subtext-color">
                For bigger tasks, switch Claude into plan mode. It researches the codebase
                and writes a detailed implementation plan before touching a single file.
                You review and approve the plan, then execution starts.
              </span>
              <CommandCard
                command="claude --plan   or type  /plan  inside a session"
                description="Claude produces a plan file you must approve before any writes happen."
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">Slash Commands</span>
              <span className="text-body font-body text-subtext-color">
                Built-in slash commands let you trigger actions mid-session.
              </span>
              <div className="flex w-full flex-col gap-2">
                {[
                  ["/clear", "Wipe context and start fresh"],
                  ["/review", "Code-review the current diff"],
                  ["/commit", "Generate and create a git commit"],
                  ["/help", "List all available commands"],
                  ["/model", "Switch the underlying model"],
                ].map(([cmd, desc]) => (
                  <div
                    key={cmd}
                    className="flex items-start gap-4 rounded-md border border-solid border-neutral-border bg-black/60 px-5 py-3"
                  >
                    <code className="text-body font-body text-brand-primary flex-none w-32">
                      {cmd}
                    </code>
                    <span className="text-body font-body text-subtext-color">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">@ File References</span>
              <span className="text-body font-body text-subtext-color">
                Mention specific files in your prompt and Claude will read them into context.
              </span>
              <CommandCard
                command='&gt; Refactor the function in @src/utils/auth.ts to use async/await'
                description="@ paths auto-complete in the terminal. Saves tokens vs. letting Claude search."
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">Git Commits & PRs</span>
              <div className="flex w-full flex-col gap-2">
                <CommandCard
                  command='&gt; Commit the current changes with a good message'
                  description="Claude stages relevant files, writes a Conventional Commits message, commits."
                />
                <CommandCard
                  command='&gt; Create a pull request for this branch'
                  description="Uses gh CLI to open a PR with a generated title and summary."
                />
              </div>
            </div>
          </div>
        </Section>

        {/* ── Power Features ── */}
        <Section id="advanced" icon={<FeatherCpu />} title="Power Features (Advanced)">
          <span className="text-body font-body text-subtext-color max-w-2xl">
            These features are where Claude Code separates itself from every other tool.
            They&apos;re what I use to build and ship faster than is otherwise possible.
          </span>

          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">Parallel Subagents</span>
              <span className="text-body font-body text-subtext-color">
                Claude can spawn multiple specialized subagents that work simultaneously on
                independent tasks — one agent researches the codebase, another investigates
                a bug, a third reviews a diff, all in parallel. You get results in a fraction
                of the time of sequential work.
              </span>
              <CommandCard
                command='&gt; Implement the user dashboard: run a research agent to map the data
   layer, a build agent to scaffold components, and a review agent
   to audit the output — all in parallel.'
                description="Describe multi-step work; Claude orchestrates the agents automatically."
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">Custom Skills</span>
              <span className="text-body font-body text-subtext-color">
                Skills are markdown files that teach Claude a custom workflow for your project.
                Store them in <code className="text-brand-primary">.claude/skills/</code> and Claude
                invokes them automatically when the context matches. Think of them as reusable
                runbooks that Claude follows precisely.
              </span>
              <CommandCard
                command="# .claude/skills/deploy.md
> Before deploying: run tests, bump version, tag the release, push."
                description="Claude reads the skill and executes every step — no re-explaining each time."
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">CLAUDE.md — Project Memory</span>
              <span className="text-body font-body text-subtext-color">
                A <code className="text-brand-primary">CLAUDE.md</code> file at the root of your project
                is read automatically at the start of every session. Put project conventions,
                architecture notes, banned patterns, and environment quirks here. Claude follows
                them without you repeating yourself.
              </span>
              <CommandCard
                command="# Example CLAUDE.md
- Use Tailwind v4 utility classes only — no CSS modules.
- All API calls go through src/lib/api.ts.
- Run `npm run lint` before every commit."
                description="Claude treats this file as standing orders for the project."
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">MCP Servers (Model Context Protocol)</span>
              <span className="text-body font-body text-subtext-color">
                MCP lets you connect Claude to external tools and data sources — databases,
                Slack, GitHub, Google Drive, Figma, your own internal APIs. Once configured,
                Claude can query and act on them natively in any session.
              </span>
              <CommandCard
                command="# settings.json → mcpServers
{ &quot;github&quot;: { &quot;command&quot;: &quot;npx&quot;, &quot;args&quot;: [&quot;@anthropic-ai/mcp-server-github&quot;] } }"
                description="After this, Claude can read issues, create PRs, and query GitHub from any session."
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">Hooks — Automated Behaviors</span>
              <span className="text-body font-body text-subtext-color">
                Hooks trigger shell commands or Claude behaviors automatically at key moments:
                before a tool runs, after a session ends, on session start. &quot;Run lint before
                every file write&quot; or &quot;remind me of open todos at session start&quot; — set once,
                runs forever.
              </span>
              <CommandCard
                command='# .claude/settings.json hooks
"PreToolUse": [{ "matcher": "Write", "command": "npm run lint" }]'
                description="Claude is blocked from writing files until lint passes."
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-body-bold font-body-bold text-default-font">Scheduled & Loop Automation</span>
              <span className="text-body font-body text-subtext-color">
                Claude Code can run on a cron schedule in the cloud — check PRs, triage issues,
                run health checks, send Slack summaries. Or use <code className="text-brand-primary">/loop</code> to
                keep Claude running continuously on a repeating task in your current session.
              </span>
              <CommandCard
                command="/schedule daily at 9am — triage open GitHub issues and post a Slack summary"
                description="Claude runs as a cloud agent on your schedule, no terminal needed."
              />
            </div>
          </div>
        </Section>

        {/* ── Tips ── */}
        <Section id="tips" icon={<FeatherStar />} title="Tips & Best Practices">
          <div className="flex w-full flex-wrap gap-4">
            {[
              {
                title: "Be specific",
                body: "Vague prompts produce vague results. Name the file, describe the exact behavior, reference the error message. The more concrete you are, the better the output.",
              },
              {
                title: "Let it plan first",
                body: "For anything more than a small edit, ask Claude to plan before coding. A 30-second plan review can save an hour of cleanup.",
              },
              {
                title: "Review every diff",
                body: "Claude is fast but not infallible. Read the diffs — especially for deletes. One glance catches 99% of drift from your intent.",
              },
              {
                title: "Keep CLAUDE.md updated",
                body: "Every project convention or gotcha you explain once should go in CLAUDE.md. Future you (and future Claude sessions) will thank you.",
              },
              {
                title: "Use git checkpoints",
                body: "Commit after each working step. If a large agentic run goes sideways you can git reset to the last good state in seconds.",
              },
              {
                title: "Start small, scale up",
                body: "Begin with simple questions and targeted edits. As you build trust in Claude's judgment for your codebase, hand it larger tasks.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border px-5 py-4 min-w-[240px] flex-1"
              >
                <span className="text-body-bold font-body-bold text-default-font">{title}</span>
                <span className="text-body font-body text-subtext-color">{body}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Closing ── */}
        <Section id="closing" icon={<FeatherLayers />} title="Go Build Something">
          <span className="text-body font-body text-subtext-color max-w-2xl">
            Hey Andrew — if you&apos;ve read this far, you now know more about Claude Code
            than most engineers who use it daily. The real unlock is just starting: pick
            a real project, open the terminal, and let it surprise you. The whole page
            you&apos;re reading was planned, written, and deployed in one session.
          </span>
          <div className="flex flex-col gap-3 w-full max-w-2xl">
            <CommandCard
              label="Start here"
              command="npm install -g @anthropic-ai/claude-code && claude"
              description="Requires Node 18+ and an Anthropic API key (platform.anthropic.com)."
            />
            <div className="flex items-center gap-3 rounded-md border border-solid border-neutral-border px-5 py-3">
              <FeatherArrowRight className="text-body font-body text-brand-primary flex-none" />
              <span className="text-body font-body text-subtext-color">
                Docs:{" "}
                <a
                  href="https://docs.anthropic.com/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline"
                >
                  docs.anthropic.com/claude-code
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-md border border-solid border-neutral-border px-5 py-3">
              <FeatherArrowRight className="text-body font-body text-brand-primary flex-none" />
              <span className="text-body font-body text-subtext-color">
                This site&apos;s source:{" "}
                <a
                  href="https://github.com/PoyoPoak/Personal-Site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary hover:underline"
                >
                  github.com/PoyoPoak/Personal-Site
                </a>
              </span>
            </div>
          </div>
        </Section>

      </div>

      <SiteFooter />
    </div>
  );
}
