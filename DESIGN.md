---
name: Interview Buddy
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#47464f'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#787680'
  outline-variant: '#c8c5d0'
  surface-tint: '#5b598c'
  primary: '#070235'
  on-primary: '#ffffff'
  primary-container: '#1e1b4b'
  on-primary-container: '#8683ba'
  inverse-primary: '#c4c1fb'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#02003c'
  on-tertiary: '#ffffff'
  tertiary-container: '#09007e'
  on-tertiary-container: '#767aff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3dfff'
  primary-fixed-dim: '#c4c1fb'
  on-primary-fixed: '#181445'
  on-primary-fixed-variant: '#444173'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  xxl: 96px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style
The brand personality is authoritative yet encouraging, functioning as a high-performance coach for career advancement. It balances the rigor of technical interviews with a clean, accessible interface that reduces user anxiety.

The design system employs a **Modern High-Contrast** style. It focuses on extreme clarity, utilizing sharp optical hierarchies and a "tech-forward" aesthetic. This is achieved through generous whitespace, precise linework, and a strategic use of vibrant color to denote interactivity. The interface should feel systematic, reliable, and instantaneous, evoking a sense of preparedness and professionalism in the user.

## Colors
This design system utilizes a high-contrast palette anchored by Deep Indigo (`#1E1B4B`) for structure and Electric Blue (`#3B82F6`) for action. 

- **Primary Actions:** Use Electric Blue for primary buttons and active states to ensure high visibility against both light and dark surfaces.
- **Surface Strategy:** In Light Mode, use a crisp white background with subtle Slate-100 borders. In Dark Mode, use a deep charcoal/black background to ensure the vibrant blues "pop" without causing eye strain during long practice sessions.
- **Functional Accents:** A Tertiary Indigo-600 is used for secondary information or "buddy" feedback loops.
- **Success/Error:** Use high-chroma greens and reds, maintaining the 4.5:1 contrast ratio required for accessibility.

## Typography
The system relies on **Inter** for its neutral, highly legible, and modern characteristics. To reinforce the "tech-forward" nature of interview preparation (especially for technical roles), **JetBrains Mono** is introduced for labels, metadata, and status indicators.

Tighten letter-spacing on larger display headings to create a more "editorial" and confident look. For body text, maintain standard spacing to ensure maximum readability during timed mock interviews. Use bold weights sparingly but decisively to guide the user's eye to key takeaways or feedback scores.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure for desktop. To maintain a "clean" feel, we employ generous vertical rhythm (using `lg` and `xl` tokens) to separate distinct sections of the interview workflow.

- **Desktop:** 12 columns, 24px gutters, 40px minimum side margins.
- **Tablet:** 8 columns, 24px gutters, 24px side margins.
- **Mobile:** 4 columns, 16px gutters, 16px side margins.

Content blocks should favor a "contained" approach where information is grouped in cards with ample internal padding (`md` or 24px) to prevent the UI from feeling cluttered during high-stress practice scenarios.

## Elevation & Depth
Elevation is handled through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows. This keeps the design feeling "flat" and modern.

1.  **Level 0 (Base):** The primary background color.
2.  **Level 1 (Cards):** Use a subtle border (1px Solid) instead of a shadow. In light mode, use `#E2E8F0`. In dark mode, use `#1E293B`.
3.  **Level 2 (Dropdowns/Modals):** Apply a very soft, high-diffusion ambient shadow (0px 10px 30px rgba(0,0,0,0.08)) to indicate floating elements.
4.  **Interactive State:** On hover, elements can slightly shift their border color to the Secondary Electric Blue to indicate focus.

## Shapes
This design system uses **Soft** geometry. A base radius of `0.25rem` (4px) is applied to small components like checkboxes and tags, while `0.5rem` (8px) is the standard for buttons and input fields. Large containers and cards use `0.75rem` (12px). 

This "subtle" roundedness maintains a professional, systematic edge—avoiding the overly "bubbly" look of consumer social apps while remaining more approachable than a strictly sharp-edged brutalist site.

## Components
- **Buttons:** Primary buttons are Solid Electric Blue with White text. Secondary buttons use a Ghost style (Indigo border, Indigo text). All buttons utilize a 2px stroke for high visibility.
- **Input Fields:** Use a 1px border with a subtle background tint (Slate-50). On focus, the border transitions to Electric Blue with a 2px outer glow (ring).
- **Progress Indicators:** For interview tracking, use thick, horizontal bars with the "vibrant accent" color to show completion.
- **Feedback Chips:** Small, mono-spaced labels for categorizing interview questions (e.g., "BEHAVIORAL", "SYSTEM DESIGN"). Use high-contrast fills with white text.
- **The "Buddy" Card:** A distinctive component featuring a subtle Indigo-to-Blue gradient border to house AI-generated suggestions or feedback, making it stand out from standard platform content.
- **Video Feed:** During mock interviews, video containers should have a 12px corner radius and a prominent "LIVE" indicator using the `label-caps` typography style.