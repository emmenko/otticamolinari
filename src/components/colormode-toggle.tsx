/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

type Props = {
  isDark: boolean;
  toggle: (e: any) => void;
};

// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx

const ColorModeToggle = (props: Props) => (
  <Styled.div
    as="button"
    onClick={props.toggle}
    aria-label={props.isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    title={props.isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    sx={{
      opacity: 0.65,
      position: `relative`,
      borderRadius: `5px`,
      width: `40px`,
      height: `25px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      transition: `opacity 0.3s ease`,
      border: `none`,
      outline: `none`,
      background: `none`,
      cursor: `pointer`,
      padding: 0,
      appearance: `none`,
      "&:hover, &:focus": { opacity: 1 },
    }}
  >
    <Styled.div
      sx={{
        position: `relative`,
        width: `24px`,
        height: `24px`,
        borderRadius: `50%`,
        border: (t) =>
          props.isDark ? `4px solid ${t.colors.toggleIcon}` : `none`,
        backgroundColor: props.isDark ? `toggleIcon` : `transparent`,
        transform: props.isDark ? `scale(0.55)` : `scale(1)`,
        transition: `all 0.45s ease`,
        overflow: props.isDark ? `visible` : `hidden`,
        boxShadow: (t) =>
          props.isDark
            ? `none`
            : `inset 8px -8px 0px 0px ${t.colors.toggleIcon}`,
        "&:before": {
          content: `""`,
          position: `absolute`,
          right: `-9px`,
          top: `-9px`,
          height: `24px`,
          width: `24px`,
          border: (t) =>
            props.isDark ? `2px solid ${t.colors.toggleIcon}` : `none`,
          borderRadius: `50%`,
          transform: props.isDark
            ? `translate(14px, -14px)`
            : `translate(0, 0)`,
          opacity: props.isDark ? 0 : 1,
          transition: `transform 0.45s ease`,
        },
        "&:after": {
          content: `""`,
          width: `8px`,
          height: `8px`,
          borderRadius: `50%`,
          margin: `-4px 0 0 -4px`,
          position: `absolute`,
          top: `50%`,
          left: `50%`,
          boxShadow: (t) =>
            `0 -23px 0 ${t.colors.toggleIcon}, 0 23px 0 ${t.colors.toggleIcon}, 23px 0 0 ${t.colors.toggleIcon}, -23px 0 0 ${t.colors.toggleIcon}, 15px 15px 0 ${t.colors.toggleIcon}, -15px 15px 0 ${t.colors.toggleIcon}, 15px -15px 0 ${t.colors.toggleIcon}, -15px -15px 0 ${t.colors.toggleIcon}`,
          transform: props.isDark ? `scale(1)` : `scale(0)`,
          transition: `all 0.35s ease`,
        },
      }}
    />
  </Styled.div>
);

export default ColorModeToggle;
