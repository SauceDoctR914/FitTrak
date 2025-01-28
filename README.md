# TypeScript Configuration Documentation

## To use this configuration:

1. Place this file at the root of your project as `tsconfig.json`
2. Ensure all TypeScript files are in the correct directories
3. Use the path aliases in your imports for cleaner code:

```typescript
// Instead of relative paths
import MyComponent from '../../components/MyComponent.vue'

// Use aliases
import MyComponent from '@components/MyComponent.vue'
```

## Base Configuration

The configuration extends Nuxt's base TypeScript settings through:

```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

## Compiler Options

### JavaScript Engine Target
```json
"target": "esnext"
```
Compiles to the latest ECMAScript features, enabling modern JavaScript capabilities.

### Module System
```json
"module": "esnext"
```
Uses the latest ECMAScript module syntax, enabling tree-shaking and better optimization.

### Module Resolution
```json
"moduleResolution": "node"
```
Uses Node.js-style resolution for module imports.

### Type Checking
```json
"strict": true"
```
Enables comprehensive type checking for better code quality.

### Path Resolution
```json
"baseUrl": "."
```
Sets the base directory for non-relative module names.

### Path Aliases
```json
"paths": {
  "~/*": ["./*"],
  "@/*": ["./*"],
  "~~/*": ["./*"],
  "@@/*": ["./*"],
  "@components/*": ["./components/*"],
  "@stores/*": ["./stores/*"],
  "@composables/*": ["./composables/*"]
}
```

## File Management

### Excluded Files
```json
"exclude": ["node_modules", ".nuxt", "dist"]
```

### Included Files
```json
"include": [
  "nuxt.config.ts",
  "src/**/*.ts",
  "src/**/*.d.ts",
  "src/**/*.tsx",
  "src/**/*.vue"
]
```

## Best Practices

1. Keep the `strict` option enabled for better type safety
2. Use path aliases consistently throughout your project
3. Regularly update the `include` patterns if you add new file types
4. Don't modify the Nuxt-generated tsconfig unless absolutely necessary
5. Keep all source files within the `src` directory for better organization

---

### **Extending Nuxt Defaults**
```json```
"extends": "./.nuxt/tsconfig.json"

# TypeScript & Tailwind Configuration Guide

## TypeScript Config

### Base Setup
```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

### Key Options
```json
{
  "target": "esnext",
  "module": "esnext", 
  "moduleResolution": "node",
  "strict": true,
  "baseUrl": "."
}
```

### Path Aliases 
```json
{
  "paths": {
    "~/*": ["./*"],
    "@/*": ["./*"],
    "@components/*": ["./components/*"],
    "@stores/*": ["./stores/*"]
  }
}
```

### File Management
```json
{
  "exclude": ["node_modules", ".nuxt", "dist"],
  "include": ["nuxt.config.ts", "src/**/*.{ts,d.ts,tsx,vue}"]
}
```

## Tailwind Setup

### CSS Variables
```css
@layer base {
  :root {
    --color-primary-50: 245 243 255;
    --color-primary-100: 237 233 254;
    --color-primary-500: 139 92 246;
    --color-primary-900: 76 29 149;
  }
}
```

### Color Configuration
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: "rgb(var(--color-primary-50) / <alpha-value>)",
        100: "rgb(var(--color-primary-100) / <alpha-value>)",
        500: "rgb(var(--color-primary-500) / <alpha-value>)",
        900: "rgb(var(--color-primary-900) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-primary-500) / <alpha-value>)"
      }
    }
  }
}
```

### Important Notes
- Define all color shades (50-900) for @nuxt/ui
- Set `colors: ['primary']` in nuxt.config.ts
- Use RGB space-separated values in CSS variables 
- Include `DEFAULT` value pointing to 500
- Avoid `important: true` in Tailwind config
- Define colors in @layer base to prevent specificity issues

### Debug Checklist
- CSS variable definitions
- Color scale completeness
- Browser dev tools CSS conflicts
- Path alias consistency
- Directory structure