---
title: "Extending props of styled components"
date: 2021-07-30
draft: false
---

Today I wanted to use a [styled-component](https://styled-components.com/) at the top level of my own [TypeScript](https://www.typescriptlang.org) component. And it was not nice. I got type collisions all the time. But it tuns out it's quite simple if I extend from the props of the styled component.

<!--more-->

```typescript
const StyledButton = styled.button<{ variant?: 'small' | 'large' }>`
  // styles here
`

interface ButtonProps extends React.ComponentProps<tyepof StyledButton> {
  variant?: 'default' | 'small' | 'large'
}

function Button({children, variant = default, ...otherProps}) {
  return <StyledButton variant={variant} {...otherProps}>
    {children}
  </StyledButton>
}
```
