# Remotion Hero Animation — Replace Inbound Leads Card

## Context

This animation replaces the static "Inbound Leads" dashboard card currently sitting to the right of the hero text on invoxai.uk. The current card is a boxy, static-feeling mockup with stats and a recent activity feed — it looks like a UI screenshot, not a crafted animation. The bottom is also clipped. We need something that feels alive, tells a story, and matches the dark editorial aesthetic of the rest of the site.

## Design Constraints — Match the Existing Site

The animation MUST feel like it belongs on this page. Reference these exact values:

```
Backgrounds:    #0A0A0B (page), #141416 (surfaces), #1A1A1E (elevated surfaces)
Accent gold:    #D4A853 (used sparingly — highlights, key moments only)
Text white:     #E8E8ED (body), #FFFFFF (headings/emphasis)
Muted text:     #6B6B76 (labels, secondary info)
Borders:        rgba(255, 255, 255, 0.06) — hairline only
Success green:  #34D399 (for "qualified" / "booked" status indicators)
Fonts:          Geist Mono for stats/labels, Geist or system sans for body text
```

The animation container should have NO visible card border or boxy frame. Let it float naturally against the dark background with a subtle fade at the edges so it bleeds into the page rather than looking like a trapped UI element. No rounded-corner card wrapper.

## Animation Concept: "The Lead Journey"

A single continuous 8–12 second looping animation that shows an inbound enquiry flowing through the AI agent pipeline. It should feel like watching a real system work — minimal, confident, and satisfying to watch.

### Sequence (all timings approximate — adjust for feel):

**Phase 1: The Call Comes In (0s – 2.5s)**
- A minimal phone icon or waveform pulse appears, centred in the composition
- A subtle ring animation — concentric circles expanding outward from the icon in the gold accent colour, fading as they expand (like ripples)
- Below or beside it, text fades in with a slight upward drift: an incoming caller label — e.g. "Incoming · 07XXX XXX XXX" in Geist Mono, muted colour
- The ring pulses 2-3 times, then transitions to the next phase

**Phase 2: AI Answers & Qualifies (2.5s – 6s)**
- The ring icon morphs or crossfades into a minimal chat/conversation representation
- NOT a literal chat bubble UI — instead, think of it as 2-3 horizontal lines appearing sequentially (like a transcript forming), with a subtle typing indicator
- Each line slides in from left with a staggered delay (150ms between lines)
- As the "conversation" progresses, data points extract and float to fixed positions around the conversation:
  - **Job type:** "Boiler Repair" — appears top-right, fades in with gold underline
  - **Location:** "Manchester, M4" — appears below it
  - **Urgency:** "Same day" — appears with a small amber dot indicator
- These extracted data points should feel like the AI is pulling structured info from the conversation in real-time
- The conversation lines themselves can be abstract (just horizontal bars of varying width, not real text) — the data extraction is the star

**Phase 3: Lead Captured & Routed (6s – 9s)**
- The conversation and extracted data smoothly consolidate — the data points drift toward each other and merge into a compact "lead card" representation
- This lead card is minimal: just a name placeholder ("James T."), the job type, and a status badge
- The status badge animates through states: appears as "New" (gold), then after a beat transitions to "Qualified" (green) with a subtle checkmark or fill animation
- A faint connecting line or arrow suggests the lead is being routed — moving from left to right, from "captured" to "booked"
- A counter in Geist Mono ticks up in the corner: "2,847" → the number incrementing by 1, like a running total of leads captured

**Phase 4: Confirmation & Loop Reset (9s – 11s)**
- Brief moment of stillness — the qualified lead card holds for a beat
- Everything gracefully fades out with a slight scale-down (0.98) and opacity fade
- A subtle pause (0.5s of near-empty frame with just the faintest ambient element)
- Loop restarts seamlessly from Phase 1

### Ambient Layer (continuous throughout):
- Very subtle: a faint grid of dots at ~3% opacity in the background, or a single slow-moving horizontal scan line
- This provides texture and a sense of "the system is always running" without being distracting
- Optional: a tiny "Live" indicator with a gently pulsing green dot in the top-right corner that persists across all phases

## Technical Implementation

### Remotion Setup
```
Duration:       ~300 frames at 30fps (10 seconds per loop)
Composition:    640 x 480 or 600 x 500 — sized to fit the right column of the hero grid
Background:     Transparent (inherits page background) or #0A0A0B
Loop:           Seamless — use Remotion's `loop` property
```

### Animation Principles
- **Easing:** Use `spring()` configs for organic movement — no linear animations. Damping ~15-20, stiffness ~80-100 for most moves. Snappier springs for small elements (status badges), softer for larger moves (phase transitions).
- **Opacity:** Everything enters at 0 and exits at 0. No hard cuts. Use `interpolate()` with `[0, 1]` output ranges and appropriate input frame ranges.
- **Scale:** Elements enter at ~0.96 scale and settle to 1.0. Exit at ~0.98 and fade. Never scale above 1.0 unless it's intentional emphasis.
- **Stagger:** When multiple elements appear, use `animation-delay` equivalent (offset frame ranges) of 4-6 frames between each element. This creates the "orchestrated reveal" feel.
- **Colour animation:** The gold accent should only appear at key moments — the ring pulse, the data extraction underlines, the "New" badge, and the counter. It should feel like a highlight, not a theme.

### Component Structure
```
src/
├── HeroAnimation/
│   ├── index.tsx              # Main Remotion composition
│   ├── IncomingCall.tsx       # Phase 1 — ring animation, caller ID
│   ├── AIConversation.tsx     # Phase 2 — transcript lines, data extraction
│   ├── LeadCaptured.tsx       # Phase 3 — consolidation, status badge, counter
│   ├── AmbientLayer.tsx       # Background grid/dots, Live indicator
│   ├── shared/
│   │   ├── animations.ts      # Reusable spring configs, interpolation helpers
│   │   └── theme.ts           # Colour values, font references
│   └── HeroAnimationPlayer.tsx # Wrapper that renders the Remotion Player in Next.js
```

### Integration with Next.js
- Use `@remotion/player` to embed the animation — NOT `@remotion/renderer` (we don't need server-side rendering)
- The `<Player>` component should have `loop`, `autoPlay`, and `controls={false}`
- Set `style={{ width: '100%', height: 'auto' }}` so it's responsive within the hero grid column
- Lazy-load the animation component to avoid blocking initial page render

## What This Should NOT Be

- ❌ A literal dashboard/table UI mockup (that's what we're replacing)
- ❌ A chat widget simulation with speech bubbles
- ❌ Anything with bright colours, multiple accent colours, or gradients
- ❌ Over-animated — no bouncing, no wobbling, no attention-seeking motion
- ❌ A phone mockup or device frame (too literal, too generic)
- ❌ Anything that looks like a Lottie animation from a stock library

## What This SHOULD Feel Like

- ✅ Like watching a system work — calm, confident, precise
- ✅ Data flowing through a pipeline — abstract but readable
- ✅ Dark, minimal, editorial — could be on the cover of a design magazine
- ✅ The kind of animation that makes someone pause and watch the loop twice
- ✅ Integrated with the page — not a boxed element but part of the composition

## Sizing & Overflow Fix

The current card is clipped at the bottom. The animation container must:
- Be properly sized within the hero grid (right column)
- Have NO overflow hidden clipping — or if the parent has overflow hidden, the animation must fit entirely within bounds
- On mobile, sit below the hero text at reduced height, still fully visible
- Use `aspect-ratio` or explicit height constraints to prevent clipping
