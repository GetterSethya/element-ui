const filled = {
  primary: "bg-primary text-on-primary",
  secondary: "bg-secondary text-on-secondary",
  tertiary: "bg-tertiary text-on-tertiary",
  error: "bg-error text-on-error",
};

const filledHover = {
  primary: "hover:bg-primary/90",
  secondary: "hover:bg-secondary/90",
  tertiary: "hover:bg-tertiary/90",
  error: "hover:bg-error/90",
};

const elevated = {
  primary: "bg-surface-container dark:bg-surface-container-low text-primary",
  secondary:
    "bg-surface-container dark:bg-surface-container-low text-secondary",
  tertiary: "bg-surface-container dark:bg-surface-container-low text-tertiary",
  error: "bg-surface-container dark:bg-surface-container-low text-error",
};

const elevatedHover = {
  primary: "hover:bg-primary/20 dark:hover:bg-primary/20",
  secondary: "hover:bg-secondary/20 dark:hover:bg-secondary/20",
  tertiary: "hover:bg-tertiary/20 dark:hover:bg-tertiary/20",
  error: "hover:bg-error/20 dark:hover:bg-error/20",
};

const tonal = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
  error: "bg-error-container text-on-error-container",
};

const tonalHover = {
  primary: "hover:bg-primary-container/70 dark:hover:bg-primary-container/70",
  secondary:
    "hover:bg-secondary-container/70 dark:hover:bg-secondary-container/70",
  tertiary:
    "hover:bg-tertiary-container/70 dark:hover:bg-tertiary-container/70",
  error: "hover:bg-error-container/70 dark:hover:bg-error-container/70",
};

const outlined = {
  primary: "bg-surface-container  text-primary outline-primary/20",
  secondary: "bg-surface-container  text-secondary outline-secondary/20",
  tertiary: "bg-surface-container  text-tertiary outline-tertiary/20",
  error: "bg-surface-container  text-error outline-error/20",
};

const outlinedHover = {
  primary: "hover:bg-surface-container/50 dark:hover:bg-surface-container/70",
  secondary: "hover:bg-surface-container/50 dark:hover:bg-surface-container/70",
  tertiary: "hover:bg-surface-container/50 dark:hover:bg-surface-container/70",
  error: "hover:bg-surface-container/50 dark:hover:bg-surface-container/70",
};

const text = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  error: "text-error",
};

const textHover = {
  primary: "hover:bg-primary/10",
  secondary: "hover:bg-secondary/10",
  tertiary: "hover:bg-tertiary/10",
  error: "hover:bg-error/10",
};

export default {
  //
  filled,
  elevated,
  outlined,
  text,
  tonal,

  filledHover,
  elevatedHover,
  outlinedHover,
  textHover,
  tonalHover,
};
