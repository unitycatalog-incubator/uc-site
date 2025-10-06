# Component library

This directory contains the building block components for this theme.

## Design guidelines and patterns

### What goes in here?

Rule of thumb: Keep components generic and reusable. Avoid site-specific logic or content—all components should be theme-agnostic and work across different sites.

### Props

Props should be consistent between components whenever possible.

#### Naming conventions

Props should follow the following naming conventions:

- Prefer string literal unions over enums (`"sm" | "md" | "lg"` instead of `enum Size {}`).
- Optional props should only have a default value if they have a fixed number of choices.
- Optional props should always have `| undefined` at the end of their type definition.
- Boolean props should always be prefixed with `is` (e.g. `isFullWidth`).
- Props which control color variations should always be `color`.
- Props which control other types of visual variations should be `variation`.
- Props which control sizes should be `size`, and the options should be t-shirt sizes (`"sm" | "md" | "lg"`, etc).
- If necessary, multiple props which serve a similar purpose should use a suffix (like `colorHeader`, `colorFooter`, etc).

#### Slots

Prefer using slots whenever possible. Use the `children: unknown` type on your component's Props interface if you require a default slot.

```ts
interface Props {
  children: unknown;
}
```

Named slots can be used to inject HTML at different locations. This can allow for more flexibility if you must render children in certain locations. You can use the `Astro.slots.has()` function to check if the slot is in use.

Component:

```astro
---
const hasHeader = Astro.slots.has("header");
---

<div>
  {
    hasHeader && (
      <header>
        <slot name="header" />
      </header>
    )
  }
  <slot />
</div>
```

The component should have clear documentation if named slots are used.

#### Class names

Every component should include an optional `className` prop to allow for custom styling. Use `clsx` to append the custom classname:

```astro
---
import clsx from "clsx";

interface Props {
  className?: string | undefined;
}

const { className } = Astro.props;
---

<div class={clsx("p-4 text-primary-500", className)}></div>
```

### Styling

- Prefer using tailwind classes over `<style />` tags. While there is a learning curve, using the built-in classes can greatly reduce additional CSS on the page.
- Avoid using `!important` whenever possible. Prefer more specificity to override styles.
- Do not use `is:global` styles in components.
- Opt for using built-in theme variables over "arbitrary" values whenever possible.

### JavaScript and interactivity

- Use web components to wrap your component and contain your JavaScript.
- Always use `this.querySelector()` within the web component to avoid "leaking" selectors.
- Prefer using aria or data attributes whenever you can to select elements, persist state, etc.

Example:

```astro
<expand>
  <button type="button" aria-expanded="false"> Toggle </button>
  <div aria-hidden="true" class="[aria-hidden=false]:block hidden">
    <slot />
  </div>
</expand>

<script>
  class Expand extends HTMLElement {
    connectedCallback() {
      const button = this.querySelector("button");
      const content = this.querySelector("[aria-hidden]");

      button.addEventListener("click", (e) => {
        if (button.getAttribute("aria-expanded") === "false") {
          button.setAttribute("aria-expanded", "true");
          content.setAttribute("aria-hidden", "false");
        } else {
          button.setAttribute("aria-expanded", "false");
          content.setAttribute("aria-hidden", "true");
        }
      });
    }
  }
  customElements.define("expand", Expand);
</script>
```
