import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import styles from "./Tooltip.module.scss";

type TooltipProps = TooltipPrimitive.TooltipContentProps &
  Pick<TooltipPrimitive.TooltipProps, "open" | "defaultOpen" | "onOpenChange" | "delayDuration">;

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  ...props
}: React.PropsWithChildren<TooltipProps>) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content className={styles.Content} side="top" align="center" {...props}>
        {content}
        <TooltipPrimitive.Arrow className={styles.Arrow} width={11} height={5} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
