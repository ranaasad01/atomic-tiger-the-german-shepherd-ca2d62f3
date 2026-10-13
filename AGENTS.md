# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
A website about my pet with photos and a joke button

Additional details provided by the user:
- What is your pet's name?: tiger
- What kind of pet do you have?: Dog

Document provided for "Upload some photos of your pet":
its a german sheperd

## Goal
Build a fun, photo-forward personal website for Tiger the German Shepherd with a photo gallery, interactive joke button, bio section, and fun facts.

## Project type
landing-page

## Design system — match this exactly
- Color tokens: `--background: #FFF8EC`, `--foreground: #3B2A1A`, `--card: #FFFDF6`, `--border: #F0D9B0`, `--muted-foreground: #7A5C3A`, `--primary: #F5A623`, `--accent: #3D9970`

## Existing components — reuse these, don't create near-duplicates
- Footer (components/Footer.tsx)
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)
- Navbar (components/Navbar.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`bio`, `cta`, `footer`, `funFacts`, `gallery`, `hero`, `jokeButton`, `jokes`, `nav`, `photoGallery`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.
