import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@radix-ui/react-select";
import React from "react";

// Define the YearPicker props
interface YearPickerProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
}

const YearPicker: React.FC<YearPickerProps> = ({ selectedYear, onYearChange }) => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Generate an array of years from the current year to 10 years ago
  const years = Array.from({ length: 11 }, (_, index) => (currentYear - index).toString());

  return (
    <div className="flex gap-3 items-center">
      <label className="text-sm">Select Year:</label>
      <Select value={selectedYear} onValueChange={onYearChange}>
        <SelectTrigger className="p-2 border rounded">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default YearPicker;
