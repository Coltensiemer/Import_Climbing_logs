import { ColumnDef } from "@tanstack/react-table";
import { KayaLogBookHeaders } from "@/types/types";
import { formatDateCell } from "@/utils/formatters";
import { Button } from "@/components/ui/button";

export const kayaHeaderConfigs: Record<keyof KayaLogBookHeaders, Partial<ColumnDef<object>>> = {
  date: {
    header: ({ column }) => (
      <div className="flex items-center gap-2">
        <p>Date</p>
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
        {column.getIsSorted() === "asc" ? "↑" : "↓"}
      </Button>
    </div>
    ),
    enableSorting: true,
    cell: info => formatDateCell(info.getValue() as string | Date | undefined),
  },
  climb_name: {
    header: ({ column }) => (
      <div className="flex items-center gap-2">
        <p>Climb Name</p>
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
        {column.getIsSorted() === "asc" ? "↑" : "↓"}
      </Button>
    </div>
    ),
    enableSorting: true,
  },
  grade: {
    header: "Grade",
    enableSorting: true,
  },
  stiffness: {
    header: "Stiffness",
    enableSorting: true,
  },
  rating: {
    header: "Rating",
    enableSorting: true,
  },
  ascent_type: {
    header: "Ascent Type",
    enableSorting: true,
  },
  color: {
    header: "Color",
    enableSorting: true,
  },
  gym: {
    header: "Gym",
    enableSorting: true,
  },
  location: {
    header: "Location",
    enableSorting: true,
  },
  country: {
    header: "Country",
    enableSorting: true,
  },
};

export const desiredOrderforKayaHeaders: (keyof KayaLogBookHeaders)[] = [
  "date",
  "climb_name",
  "grade",
  "stiffness",
  "rating",
  "ascent_type",
  "color",
  "gym",
  "location",
  "country",
];


export const defaultHiddenColumns: Record<string, boolean> = {
  stiffness: false,
  rating: false,
  color: false,
  gym: false,
  location: false,
  // Add more columns as needed
};