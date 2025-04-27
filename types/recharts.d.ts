declare module "recharts" {
  import * as React from "react";

  export interface TooltipProps {
    payload?: any[];
    label?: string;
    active?: boolean;
    labelFormatter?: (label: React.ReactNode, payload: any[]) => React.ReactNode;
    labelClassName?: string;
    formatter?: (value: any, name: string, item: any, index: number, payload: any) => React.ReactNode;
  }

  export const Tooltip: React.FC<TooltipProps>;

  export interface LegendProps {
    // Define the props you need for Legend
    payload?: any[];
    verticalAlign?: "top" | "bottom";
  }

  export const Legend: React.FC<LegendProps>;

  // Export other components or types as needed
}