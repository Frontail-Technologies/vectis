import React from "react";
import { Container } from "@/components/ui/Container";

const tools = [
  "Python", "MATLAB", "Simulink", "ANSYS",
  "SolidWorks", "TensorFlow", "PyTorch", "Arduino",
  "Altium", "LabVIEW", "Vivado", "Proteus",
];

export function TechnologiesTools() {
  return (
    <section className="py-12 sm:py-16 bg-surface border-b border-border">
      <Container>
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary block mb-3">
            Toolchain
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
            Tools & Technologies
          </h2>
        </div>

        {/* Compact text-mark grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-lg border border-border bg-background text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
