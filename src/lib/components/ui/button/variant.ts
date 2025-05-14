const filled = {
  primary: "bg-primary text-on-primary hover:bg-primary/90",
  secondary: "bg-secondary text-on-secondary hover:bg-secondary/90",
  tertiary: "bg-tertiary text-on-tertiary hover:bg-tertiary/90",
  error: "bg-error text-on-error hover:bg-error/90",
};

const elevated = {
  primary:
    "bg-surface-container dark:bg-surface-container-low text-primary hover:bg-primary/20 dark:hover:bg-primary/20",
  secondary:
    "bg-surface-container dark:bg-surface-container-low text-secondary hover:bg-secondary/20 dark:hover:bg-secondary/20",
  tertiary:
    "bg-surface-container dark:bg-surface-container-low text-tertiary hover:bg-tertiary/20 dark:hover:bg-tertiary/20",
  error:
    "bg-surface-container dark:bg-surface-container-low text-error hover:bg-error/20 dark:hover:bg-error/20",
};

const tonal = {
  primary:
    "bg-primary-container text-on-primary-container hover:bg-primary-container/70 dark:hover:bg-primary-container/70",
  secondary:
    "bg-secondary-container text-on-secondary-container hover:bg-secondary-container/70 dark:hover:bg-secondary-container/70",
  tertiary:
    "bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container/70 dark:hover:bg-tertiary-container/70",
  error:
    "bg-error-container text-on-error-container hover:bg-error-container/70 dark:hover:bg-error-container/70",
};

const outlined = {
  primary:
    "bg-surface-container hover:bg-surface-container/50 dark:hover:bg-surface-container/70 text-primary outline-primary/20",
  secondary:
    "bg-surface-container hover:bg-surface-container/50 dark:hover:bg-surface-container/70 text-secondary outline-secondary/20",
  tertiary:
    "bg-surface-container hover:bg-surface-container/50 dark:hover:bg-surface-container/70 text-tertiary outline-tertiary/20",
  error:
    "bg-surface-container hover:bg-surface-container/50 dark:hover:bg-surface-container/70 text-error outline-error/20",
};

const text = {
  primary: "text-primary hover:bg-primary/10",
  secondary: "text-secondary hover:bg-secondary/10",
  tertiary: "text-tertiary hover:bg-tertiary/10",
  error: "text-error hover:bg-error/10",
};

export default { filled, elevated, outlined, text, tonal };
