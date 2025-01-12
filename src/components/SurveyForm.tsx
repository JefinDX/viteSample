"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const options = [
  { value: "strongly-disagree", label: "Strongly Disagree" },
  { value: "disagree", label: "Disagree" },
  { value: "neutral", label: "Neutral" },
  { value: "agree", label: "Agree" },
  { value: "strongly-agree", label: "Strongly Agree" },
];

export default function SurveyForm() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted value:", selectedValue);
    // Here you would typically send the data to your backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Survey Question</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4">
            How satisfied are you with our product?
          </p>
          <RadioGroup
            value={selectedValue}
            onValueChange={setSelectedValue}
            className="space-y-3"
          >
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                {/* <RadioGroupItem value={option.value} id={option.value} /> */}
                <Checkbox />

                <Label htmlFor={option.value} className="text-sm">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
