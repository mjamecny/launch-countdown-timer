import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

:root{
  --color-grayish-blue: hsl(237, 18%, 59%);
  --color-soft-red: hsl(345, 95%, 68%);
  --color-white: hsl(0, 0%, 100%);
  --color-dark-desaturated-blue: hsl(236, 21%, 26%);
  --color-very-dark-blue: hsl(235, 16%, 14%);
  --color-mostly-black: hsl(234, 17%, 12%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  font-size: 62.5%;
}

body {
  font-family: 'Red Hat Text', sans-serif;
  font-size: 1.4rem;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
`

export default GlobalStyles
