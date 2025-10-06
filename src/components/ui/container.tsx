import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  // Only supported/used variant per request
  variant?: 'custom-container-5';
}

function Container({ className, disabled, variant = 'custom-container-5', ...props }: ContainerProps) {
  // Only implement custom-container-5 and ignore scrollbars per request.
  // All styles are expressed via Tailwind utilities / arbitrary properties (no CSS files).
  const isV5 = variant === 'custom-container-5';

  return (
    <div
      className={cn(
        // Base
        'm-0 p-0 relative box-border text-white rounded-[16px] overflow-visible',
        'border-[16px] border-transparent',
        '[image-rendering:pixelated]',
        // Variant: custom-container-5 (background + border-image)
        isV5 && [
          "bg-[url('/assets/background-image-custom-5.png')]",
          'bg-repeat',
          "[border-image:url('/assets/border-image-custom-5.png')_16_round]",
          // Typography overrides for this variant
          '[&_h1]:text-black',
          '[&_h2]:text-black',
          '[&_h3]:text-black',
          '[&_h4]:text-black',
          '[&_h5]:text-black',
          '[&_p]:text-black',
          '[&_span]:text-black',
          '[&_label]:text-black',
        ],
        // Disabled state (attribute is not standard on div; exposed via prop)
        disabled && 'opacity-60 pointer-events-none grayscale',
        className,
      )}
      {...props}
    />
  );
}

export { Container };
