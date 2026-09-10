// Branch images — inline since BranchShowcase is not on the homepage
const branchImages = {
  cse: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
  cseAlt: "Deep learning algorithms and model training",
  ece: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  eceAlt: "PCB hardware with microprocessors and FPGA",
  eee: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  eeeAlt: "Power distribution grid",
  mech: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  mechAlt: "Mechanical CAD and FEM thermal analysis",
  civil: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  civilAlt: "Structural engineering bridge and high-rise construction",
  it: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
  itAlt: "Cloud data science pipeline",
};


export interface EngineeringBranch {
  id: string;
  code: string;
  name: string;
  shortDesc: string;
  focusAreas: string[];
  tools: string[];
  deliverables: string[];
  image: string;
  imageAlt: string;
}

export const engineeringBranches: EngineeringBranch[] = [
  {
    id: "cse",
    code: "CSE",
    name: "Computer Science & Engineering",
    shortDesc: "Deep learning models, computer vision pipelines, cloud-native microservices, and cryptographic systems.",
    focusAreas: [
      "Deep Learning & Vision Transformers",
      "Federated Learning & Privacy-Preserving AI",
      "Blockchain Smart Contracts & Consensus",
      "Cloud-Native Distributed Architectures",
    ],
    tools: ["Python", "PyTorch", "TensorFlow", "FastAPI", "Docker", "Kubernetes"],
    deliverables: ["Modular Source Code", "Trained Checkpoints", "API Docs", "Benchmark Notebooks"],
    image: branchImages.cse,
    imageAlt: branchImages.cseAlt,
  },
  {
    id: "ece",
    code: "ECE",
    name: "Electronics & Communication",
    shortDesc: "Signal processing, wireless telecommunications, VLSI syntheses, and embedded hardware architectures.",
    focusAreas: [
      "5G/6G MIMO & Beamforming Simulation",
      "FPGA & ASIC RTL Synthesis (Verilog)",
      "Biomedical Signal & Image Processing",
      "Low-Power Wireless Sensor Networks",
    ],
    tools: ["MATLAB", "Xilinx Vivado", "ModelSim", "Altium Designer", "Cadence Virtuoso"],
    deliverables: ["RTL Testbenches", "Schematic Gerber Files", "Constellation Diagrams", "Bitstreams"],
    image: branchImages.ece,
    imageAlt: branchImages.eceAlt,
  },
  {
    id: "eee",
    code: "EEE",
    name: "Electrical & Electronics",
    shortDesc: "Power conversion inverters, electric vehicle BMS powertrains, renewable solar MPPT, and grid stability.",
    focusAreas: [
      "Multilevel Inverters & Harmonic Mitigation",
      "EV Battery Thermal & SoC Kalman Filtering",
      "Microgrid Stability & Fault Protection",
      "High-Efficiency Solar Photovoltaic MPPT",
    ],
    tools: ["MATLAB Simulink", "PLECS", "PSCAD", "Ansys Maxwell", "dSPACE"],
    deliverables: ["Transient Simulations", "THD Spectrum Plots", "Transfer Functions", "Hardware Specs"],
    image: branchImages.eee,
    imageAlt: branchImages.eeeAlt,
  },
  {
    id: "mech",
    code: "MECH",
    name: "Mechanical Engineering",
    shortDesc: "Structural finite element analysis, computational fluid dynamics (CFD), and thermal dissipation modeling.",
    focusAreas: [
      "Turbomachinery CFD Aerodynamic Drag",
      "Composite Material Structural FEA Analysis",
      "Battery Pack Liquid Cooling Plate Optimization",
      "Robotic Arm Kinematics & Dynamic Stress",
    ],
    tools: ["ANSYS Fluent", "ANSYS Mechanical", "SolidWorks", "HyperMesh", "Abaqus"],
    deliverables: ["High-Res Mesh Grids", "Von Mises Stress Plots", "Velocity Vector Maps", "STEP Assemblies"],
    image: branchImages.mech,
    imageAlt: branchImages.mechAlt,
  },
  {
    id: "civil",
    code: "CIVIL",
    name: "Civil & Structural Engineering",
    shortDesc: "Nonlinear seismic response, GIS flood modeling, geo-polymer concrete, and soil-structure interaction.",
    focusAreas: [
      "Nonlinear Seismic Dynamic Response of High-Rises",
      "Self-Compacting Concrete Characterization",
      "GIS-Based Urban Flood Modeling & Drainage",
      "Slope Stability & Foundation Stress",
    ],
    tools: ["ETABS", "STAAD.Pro", "SAP2000", "ArcGIS", "HEC-RAS"],
    deliverables: ["Bending Moment Diagrams", "Seismic Response Spectra", "Hydrology Maps", "Calculations"],
    image: branchImages.civil,
    imageAlt: branchImages.civilAlt,
  },
  {
    id: "it",
    code: "IT",
    name: "Information Technology & Data Science",
    shortDesc: "Big data streaming ingestion, predictive analytics pipelines, and explainable AI interpretability.",
    focusAreas: [
      "Scalable Streaming Ingestion Architectures",
      "Predictive Data Mining on Large Corpora",
      "Graph Neural Networks for Fraud Detection",
      "Explainable AI (XAI) Model Interpretability",
    ],
    tools: ["Apache Spark", "Kafka", "PostgreSQL", "Neo4j", "AWS CloudFormation"],
    deliverables: ["Data Pipelines", "XAI Visualizations", "Database Schemas", "Deployment Scripts"],
    image: branchImages.it,
    imageAlt: branchImages.itAlt,
  },
];
