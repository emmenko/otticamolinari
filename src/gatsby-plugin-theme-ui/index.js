import { tailwind } from "@theme-ui/presets";

const headingStyles = {
  h1: {
    ...tailwind.styles.h1,
    color: `heading`,
    fontSize: [5, 6, 7],
    mt: 2,
  },
  h2: {
    ...tailwind.styles.h2,
    color: `heading`,
    fontSize: [4, 5, 6],
    mt: 2,
  },
  h3: {
    ...tailwind.styles.h3,
    color: `heading`,
    fontSize: [3, 4, 5],
    mt: 3,
  },
  h4: {
    ...tailwind.styles.h4,
    color: `heading`,
    fontSize: [2, 3, 4],
  },
  h5: {
    ...tailwind.styles.h5,
    color: `heading`,
    fontSize: [1, 2, 3],
  },
  h6: {
    ...tailwind.styles.h6,
    color: `heading`,
    fontSize: 1,
    mb: 2,
  },
};

const theme = {
  ...tailwind,
  colors: {
    ...tailwind.colors,
    primary: tailwind.colors.blue[7],
    secondary: `#5f6c80`,
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    muted: tailwind.colors.gray[4],
    highlight: "#efeffe",
    message: tailwind.colors.text,
    svg: { primary: "#003c72", secondary: "#FC7F96" },
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        primary: "#ffef72",
        secondary: `#7f8ea3`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8],
        highlight: "#718096",
        message: "#e2e8f0",
        svg: { primary: "#ffef72", secondary: "#7193b3" },
      },
    },
  },
  fonts: {
    ...tailwind.fonts,
    body: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      color: `text`,
      backgroundColor: `background`,
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ...headingStyles,
    Container: {
      padding: [3, 4],
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `6px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      [[`th`, `td`]]: {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`,
      },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
    CookieBanner: {
      backgroundColor: "highlight",
      color: "message",
    },
  },
  text: {
    ...headingStyles,
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    navigation: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
  },
  messages: {
    content: {
      p: { fontSize: 1, marginY: [1] },
      color: "message",
    },
    cookieConsent: {
      h3: {
        mt: 0,
      },
      color: "message",
      fontSize: 1,
    },
  },
  buttons: {
    close: {
      width: "auto",
      height: "auto",
    },
  },
};

export default theme;
