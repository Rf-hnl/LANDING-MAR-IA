import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("h-6 w-6", className)}
    >
      <defs>
        <radialGradient id="logoGradient" cx="0.3" cy="0.3" r="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--destructive))" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="9" fill="url(#logoGradient)" stroke="none"></circle>
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4"
        transform="rotate(-20 12 12)"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
        strokeOpacity="0.7"
      ></ellipse>
    </svg>
);
