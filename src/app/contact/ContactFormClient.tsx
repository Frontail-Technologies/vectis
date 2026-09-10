"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const supportTypes = [
  "Engineering Project",
  "Research / Thesis",
  "IEEE Project",
  "Simulation / Analysis",
  "Documentation",
  "Other",
];

const branches = [
  "Computer Science & Engineering (CSE)",
  "Electronics & Communication (ECE)",
  "Electrical & Electronics (EEE)",
  "Mechanical Engineering",
  "Civil & Structural Engineering",
  "Information Technology / AI",
  "Biomedical / Bioinformatics",
  "Other Discipline",
];

const degrees = [
  "B.Tech / B.E.",
  "M.Tech / M.E. / M.S.",
  "Ph.D. / Doctoral Scholar",
  "Independent Researcher",
  "Industry Professional",
];

export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "B.Tech / B.E.",
    branch: "Computer Science & Engineering (CSE)",
    supportType: "Engineering Project",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl border border-primary/30 bg-surface text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-secondary text-primary mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-foreground">
          Requirement Received
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-foreground">{formData.name}</strong>. A domain specialist in your discipline will review your brief and get back to you within 4–6 business hours.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Requirement
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            required
            placeholder="e.g. Arjun Patel"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="arjun@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone / WhatsApp */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp *</Label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Degree / Program */}
        <div className="space-y-2">
          <Label htmlFor="degree">Degree / Program</Label>
          <Select
            id="degree"
            value={formData.degree}
            onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
          >
            {degrees.map((deg) => (
              <option key={deg} value={deg}>
                {deg}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Engineering Branch */}
        <div className="space-y-2">
          <Label htmlFor="branch">Engineering Branch</Label>
          <Select
            id="branch"
            value={formData.branch}
            onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
          >
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </div>

        {/* Support Type */}
        <div className="space-y-2">
          <Label htmlFor="supportType">Support Type</Label>
          <Select
            id="supportType"
            value={formData.supportType}
            onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
          >
            {supportTypes.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {/* Requirement / Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Requirement / Topic Brief *</Label>
        <Textarea
          id="message"
          required
          rows={4}
          placeholder="Briefly describe your project scope, base paper title, target simulation tools, or required deliverables..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {/* Optional File Note */}
      <div className="p-3.5 rounded-xl border border-dashed border-border bg-surface text-xs text-muted-foreground flex items-center justify-between">
        <span>Have a PDF syllabus, base paper, or synopsis?</span>
        <span className="font-semibold text-primary">Email to {siteConfig.contactEmail}</span>
      </div>

      {/* Submit CTA */}
      <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold">
        <span>Submit Requirement</span>
        <Send className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
