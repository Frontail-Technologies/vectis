export interface ToolItem {
  name: string;
  category: string;
  badge?: string;
}

export const coreEngineeringTools: ToolItem[] = [
  { name: "Python", category: "AI & Computing" },
  { name: "MATLAB", category: "Numerical Simulation" },
  { name: "Simulink", category: "Power & Systems" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "TensorFlow", category: "Neural Networks" },
  { name: "ANSYS Mechanical", category: "FEA Structural" },
  { name: "ANSYS Fluent", category: "CFD Fluids" },
  { name: "SolidWorks", category: "3D CAD Modeling" },
  { name: "Xilinx Vivado", category: "FPGA & RTL" },
  { name: "Altium Designer", category: "PCB Design" },
  { name: "Arduino / STM32", category: "Microcontrollers" },
  { name: "Raspberry Pi", category: "Edge Embedded" },
  { name: "Proteus", category: "Circuit Simulation" },
  { name: "LabVIEW", category: "Instrumentation" },
  { name: "ROS / ROS2", category: "Robotics Stack" },
  { name: "LaTeX / Overleaf", category: "Manuscripts" },
];
