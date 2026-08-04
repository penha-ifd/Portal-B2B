import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { cn } from "../../lib/cn";

export type IfdsIconName = string;

type IconProps = {
  name: IfdsIconName;
  filled?: boolean;
  size?: number;
  className?: string;
  label?: string;
};

export function Icon({ name, filled = false, size = 20, className, label }: IconProps) {
  return (
    <i
      className={cn(
        filled ? "ifdl-icon-filled" : "ifdl-icon-line",
        `ifdl-icon-${name}`,
        className,
      )}
      style={{ fontSize: size }}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}

type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";
type ButtonSize = "small" | "medium" | "large";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: "ifds-button-primary",
  secondary: "ifds-button-secondary",
  tertiary: "ifds-button-tertiary",
  destructive: "ifds-button-destructive",
};

const BUTTON_SIZES: Record<ButtonSize, string> = {
  small: "ifds-button-small",
  medium: "ifds-button-medium",
  large: "ifds-button-large",
};

export function Button({
  className,
  variant = "primary",
  size = "medium",
  leadingIcon,
  trailingIcon,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leadingIcon?: IfdsIconName;
  trailingIcon?: IfdsIconName;
}) {
  return (
    <button
      className={cn("ifds-button", BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)}
      {...props}
    >
      {leadingIcon && <Icon name={leadingIcon} size={size === "small" ? 16 : 20} />}
      <span>{children}</span>
      {trailingIcon && <Icon name={trailingIcon} size={size === "small" ? 16 : 20} />}
    </button>
  );
}

type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger";

export function Badge({
  children,
  tone = "neutral",
  icon,
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: IfdsIconName;
  className?: string;
}) {
  return (
    <span className={cn("ifds-badge", `ifds-badge-${tone}`, className)}>
      {icon && <Icon name={icon} size={14} />}
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
  accent = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
}) {
  return <section className={cn("ifds-card", accent && "ifds-card-accent", className)}>{children}</section>;
}

export function PageHeader({
  title,
  description,
  icon,
  actions,
}: {
  title: string;
  description?: string;
  icon?: IfdsIconName;
  actions?: ReactNode;
}) {
  return (
    <header className="ifds-page-header">
      <div className="ifds-page-header-content">
        {icon && (
          <span className="ifds-page-header-icon">
            <Icon name={icon} filled size={16} />
          </span>
        )}
        <div className="ifds-page-header-copy">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      </div>
      {actions && <div className="ifds-page-header-actions">{actions}</div>}
    </header>
  );
}

export function StatusDot({
  tone = "success",
  label,
}: {
  tone?: "success" | "warning" | "danger" | "neutral";
  label?: string;
}) {
  return <span className={cn("ifds-status-dot", `ifds-status-dot-${tone}`)} role={label ? "status" : undefined} aria-label={label} />;
}

export function visuallyHiddenStyle(): CSSProperties {
  return {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  };
}
