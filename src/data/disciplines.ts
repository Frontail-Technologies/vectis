import { DisciplineDetail } from "@/types";

export const disciplinesData: DisciplineDetail[] = [
  {
    slug: "computer-science",
    code: "CSE",
    name: "Computer Science & Engineering",
    shortDesc: "Deep learning models, computer vision pipelines, cloud-native microservices, and cryptographic systems.",
    overview: "Our Computer Science & Engineering division supports research scholars and students building advanced software systems, deep learning architectures, distributed cloud applications, and cryptographic security protocols. From model pre-training to containerized production deployment, we deliver modular, reproducible codebases.",
    keyAreas: [
      { title: "Deep Learning & Vision Transformers", description: "Multi-modal neural architectures, 3D volumetric segmentation, and generative diffusion models." },
      { title: "Natural Language Processing & LLMs", description: "Retrieval-Augmented Generation (RAG), parameter-efficient fine-tuning (LoRA), and semantic parsing." },
      { title: "Distributed & Cloud Computing", description: "Microservices architecture, Kubernetes orchestration, and event-driven streaming pipelines." },
      { title: "Cybersecurity & Cryptography", description: "Post-quantum cryptographic algorithms, zero-knowledge proofs, and network intrusion detection." },
      { title: "Graph Neural Networks & Analytics", description: "Knowledge graph reasoning, fraud detection networks, and biological graph classification." },
      { title: "Edge AI & Optimization", description: "TensorRT model quantization, pruning, and low-latency on-device inference engines." },
    ],
    tools: ["Python", "PyTorch", "TensorFlow", "FastAPI", "Docker", "Kubernetes", "Neo4j", "Hugging Face"],
    projectTypes: [
      "AI & Deep Learning Implementations",
      "Full-Stack Web & Microservice Applications",
      "IEEE Access & Transactions Algorithm Replications",
      "Big Data Analytics & Streaming Pipelines",
      "Post-Quantum Cryptographic Accelerators",
    ],
    deliverables: [
      "Clean, PEP-8 Compliant Python / C++ Source Repositories",
      "Pretrained Model Weights & Benchmark Notebooks",
      "Docker Compose Deployment Configuration",
      "IEEE-Formatted Two-Column Research Paper Draft",
      "Viva Defense Presentation Slide Deck (PPT)",
    ],
    relatedProjectSlugs: ["ai-disease-prediction", "llm-rag-scholarly-search", "autonomous-robotics-navigation"],
    process: [
      { step: "01", title: "Problem Definition", description: "Aligning on dataset selection, benchmark baselines, and novel contribution scope." },
      { step: "02", title: "Architecture Design", description: "Module interface definition, tensor shape planning, and pipeline drafting." },
      { step: "03", title: "Model Authoring & Training", description: "Iterative loss convergence tuning, regularization, and checkpointing." },
      { step: "04", title: "Validation & Benchmarking", description: "Computing precision, recall, F1, AUC, and comparative SOTA metrics." },
      { step: "05", title: "Report & Viva Handover", description: "Packaging documentation, code walkthrough, and defense mentoring." },
    ],
    faqs: [
      {
        question: "What datasets do you support for computer science projects?",
        answer: "We work with standard benchmark datasets (ImageNet, ADNI, Kaggle, Hugging Face Hub, PhysioNet) as well as custom proprietary datasets provided by scholars.",
      },
      {
        question: "Do you supply GPU training logs and checkpoints?",
        answer: "Yes, every AI/ML project includes full training/validation loss curves, confusion matrices, and saved model weight files (.pt, .onnx).",
      },
      {
        question: "Can you provide a working web interface for demonstration?",
        answer: "We build intuitive FastAPI and Next.js / Streamlit web dashboards to demonstrate live model inference during guide reviews.",
      },
    ],
  },
  {
    slug: "ece",
    code: "ECE",
    name: "Electronics & Communication",
    shortDesc: "Wireless telecommunications, VLSI syntheses, embedded firmware, and biomedical signal processing.",
    overview: "Our Electronics & Communication division focuses on hardware design, FPGA RTL synthesis, embedded firmware, RF communications, and digital signal processing. We deliver tested schematics, synthesizable Verilog/VHDL code, and MATLAB telecommunication testbenches.",
    keyAreas: [
      { title: "VLSI & FPGA Digital Design", description: "RTL design in Verilog/VHDL, AXI bus interfaces, and timing closure on Xilinx Vivado." },
      { title: "5G/6G Wireless Telecommunication", description: "Massive MIMO beamforming, OFDM modulation schemes, and channel estimation algorithms." },
      { title: "Embedded Systems & Firmware", description: "STM32, ESP32, and ARM Cortex bare-metal and FreeRTOS firmware development." },
      { title: "Digital Signal & Image Processing", description: "Wavelet transforms, adaptive filtering, and biomedical ECG/EEG signal conditioning." },
      { title: "IoT Sensor Networks & Protocols", description: "LoRaWAN, Zigbee, MQTT, and low-power mesh networking architectures." },
      { title: "Hardware Cryptography", description: "Side-channel attack resilient cryptoprocessors and high-speed AES/Kyber engines." },
    ],
    tools: ["Xilinx Vivado", "ModelSim", "MATLAB", "Altium Designer", "C/C++", "Cadence Virtuoso", "Keil uVision"],
    projectTypes: [
      "FPGA Hardware Accelerator Implementations",
      "Wireless Communication Simulation in MATLAB",
      "Industrial Embedded IoT Edge Nodes",
      "Biomedical Instrumentation & Signal Classifiers",
      "VLSI Low-Power Architecture Syntheses",
    ],
    deliverables: [
      "Synthesizable Verilog / VHDL RTL Code & Testbenches",
      "Altium / KiCad Schematic & Gerber PCB Files",
      "MATLAB Simulation Scripts & Constellation Plots",
      "Comprehensive IEEE Standard Project Report",
      "Hardware Execution Video & Viva Defense PPT",
    ],
    relatedProjectSlugs: ["fpga-crypto-accelerator", "iot-smart-energy", "autonomous-robotics-navigation"],
    process: [
      { step: "01", title: "Specification Review", description: "Locking clock frequency, throughput requirements, and hardware target constraints." },
      { step: "02", title: "RTL / Circuit Design", description: "Authoring synthesizable hardware description and schematic capture." },
      { step: "03", title: "Functional Simulation", description: "Writing self-checking testbenches and verifying timing waveforms." },
      { step: "04", title: "Synthesis & Hardware Run", description: "Place & route, resource utilization optimization, and bitstream generation." },
      { step: "05", title: "Delivery & Walkthrough", description: "Complete documentation handover, schematic review, and demo video." },
    ],
    faqs: [
      {
        question: "Are the Verilog designs synthesizable on real FPGA hardware?",
        answer: "Yes, all RTL code is fully synthesizable, constraint-checked, and validated on Xilinx Artix-7, Zynq, or UltraScale+ FPGA targets.",
      },
      {
        question: "Do you supply complete PCB design files?",
        answer: "We provide complete Altium / KiCad project files including schematics, Bill of Materials (BOM), and manufacturing Gerbers.",
      },
    ],
  },
  {
    slug: "eee",
    code: "EEE",
    name: "Electrical & Electronics Engineering",
    shortDesc: "Power conversion inverters, electric vehicle BMS powertrains, renewable energy MPPT, and grid stability.",
    overview: "Our Electrical & Electronics Engineering team specializes in power electronics, renewable energy systems, microgrids, motor drives, and EV battery management. We construct high-fidelity MATLAB Simscape models, control algorithms, and converter circuit simulations.",
    keyAreas: [
      { title: "Electric Vehicle Powertrains & BMS", description: "Dual Extended Kalman Filter SoC/SoH estimation, active balancing, and thermal management." },
      { title: "Grid-Connected Inverters & VSM", description: "Grid-forming control, virtual synchronous machine emulation, and low-voltage ride-through." },
      { title: "Renewable Energy Integration", description: "Solar PV MPPT algorithms (P&O, INC, PSO) and wind turbine DFIG control." },
      { title: "Multilevel Inverters & Harmonics", description: "Cascaded H-Bridge and NPC topologies with space vector PWM for minimal THD." },
      { title: "Power System Stability & Protection", description: "IEEE bus network load flow, dynamic fault analysis, and microgrid protection." },
      { title: "Electric Motor Drives", description: "Field Oriented Control (FOC) and Direct Torque Control (DTC) for PMSM and BLDC motors." },
    ],
    tools: ["MATLAB Simulink", "Simscape Electrical", "PLECS", "PSCAD", "Ansys Maxwell", "TI Code Composer"],
    projectTypes: [
      "EV Battery Management & Thermal Modeling",
      "Grid-Forming & Grid-Following Inverter Studies",
      "High-Efficiency DC-DC Converter Design",
      "Solar MPPT & Microgrid Dynamic Simulation",
      "PMSM Field Oriented Control Drive Pipelines",
    ],
    deliverables: [
      "Fully Parameterized MATLAB/Simulink (.slx) Models",
      "Auto-Initialization Parameter (.m) Scripts",
      "Harmonic Spectrum (FFT) & Transient Waveform Plots",
      "IEEE Formatted Research Paper / Thesis Chapter",
      "Step-by-Step Simulation Execution Manual",
    ],
    relatedProjectSlugs: ["ev-battery-bms", "matlab-grid-simulation", "iot-smart-energy"],
    process: [
      { step: "01", title: "System Modeling", description: "Deriving mathematical state equations and circuit parameter limits." },
      { step: "02", title: "Simulink Construction", description: "Building power stage topology and feedback control loops." },
      { step: "03", title: "Controller Tuning", description: "Optimizing PI/PR gains, sliding mode controllers, or adaptive Kalman filters." },
      { step: "04", title: "Fault & Dynamic Testing", description: "Simulating grid dips, load steps, and transient disturbance responses." },
      { step: "05", title: "Handover & Support", description: "Detailed result documentation, data tables, and viva presentation." },
    ],
    faqs: [
      {
        question: "Can the Simulink models be converted to embedded C code?",
        answer: "Yes, we support Embedded Coder configuration targeting Texas Instruments C2000 and STM32 motor control DSPs.",
      },
      {
        question: "Do you validate compliance with IEEE standards?",
        answer: "Yes, our power quality and inverter simulations verify compliance with standards like IEEE 519 (Harmonics) and IEEE 1547 (Interconnection).",
      },
    ],
  },
  {
    slug: "mechanical",
    code: "MECH",
    name: "Mechanical & Thermal Engineering",
    shortDesc: "Finite element analysis (FEA), computational fluid dynamics (CFD), and conjugate heat transfer modeling.",
    overview: "Our Mechanical Engineering unit delivers high-precision computational mechanics, structural stress analysis, aerodynamic fluid flow, and thermal optimization using ANSYS Workbench, Fluent, and SolidWorks. Every simulation includes formal grid convergence verification.",
    keyAreas: [
      { title: "Structural Finite Element Analysis (FEA)", description: "Static structural, modal vibration, fatigue life, and nonlinear contact stress." },
      { title: "Computational Fluid Dynamics (CFD)", description: "Turbomachinery aerodynamics, multiphase flow, and pressure drop minimization." },
      { title: "Conjugate Heat Transfer (CHT)", description: "Liquid cold plates, microchannel heat sinks, and electronic thermal dissipation." },
      { title: "Composite Material Analysis", description: "Carbon fiber layup orthotropic stress and Tsai-Wu failure criteria modeling." },
      { title: "Robotics Kinematics & Dynamics", description: "Multi-body dynamic simulation, joint torque profiling, and trajectory FEA." },
      { title: "Topology & Generative Optimization", description: "Weight reduction and structural stiffness optimization for additive manufacturing." },
    ],
    tools: ["ANSYS Fluent", "ANSYS Mechanical", "SolidWorks", "HyperMesh", "Abaqus", "COMSOL Multiphysics"],
    projectTypes: [
      "EV Battery Pack Liquid Cold Plate CFD Optimization",
      "Aerodynamic Drag Reduction on Automotive Bodies",
      "Gas Turbine Blade Structural Thermo-Mechanical FEA",
      "Composite Pressure Vessel Burst Pressure Modeling",
      "Robotic Gripper Stress and Topology Optimization",
    ],
    deliverables: [
      "SolidWorks Parametric 3D CAD Files (.SLDASM, .STEP)",
      "ANSYS Workbench (.wbpj), Meshing, and Fluent Data Files",
      "High-Resolution 4K Vector Contour Plots & Vector Fields",
      "Grid Convergence Index (GCI) Independence Report",
      "Comprehensive Engineering Technical Report & Thesis Draft",
    ],
    relatedProjectSlugs: ["ansys-thermal-analysis", "ev-battery-bms", "structural-seismic-response"],
    process: [
      { step: "01", title: "CAD Preparation", description: "Geometry simplification, defeaturing, and fluid domain extraction." },
      { step: "02", title: "Meshing & Inflation", description: "Generating polyhedral/hexahedral grids with boundary layer resolution." },
      { step: "03", title: "Physics & Solver Setup", description: "Setting material properties, turbulence models (k-omega SST), and boundary inputs." },
      { step: "04", title: "Convergence Monitoring", description: "Achieving residual reduction below 10^-5 and verifying flux conservation." },
      { step: "05", title: "Post-Processing & Delivery", description: "Extracting pressure contours, streamlines, and drafting the thesis chapter." },
    ],
    faqs: [
      {
        question: "Do you include grid independence testing?",
        answer: "Yes, every FEA and CFD project includes a 3-mesh Grid Convergence Index (GCI) study demonstrating spatial discretization independence.",
      },
      {
        question: "Can you provide the raw 3D CAD models?",
        answer: "We provide fully editable SolidWorks native files along with standardized STEP/IGES CAD formats.",
      },
    ],
  },
  {
    slug: "civil",
    code: "CIVIL",
    name: "Civil & Structural Engineering",
    shortDesc: "Nonlinear seismic response, structural dynamic modeling, hydrological GIS analysis, and foundation stress.",
    overview: "Our Civil & Structural Engineering division delivers nonlinear dynamic response history analysis, structural health assessment, GIS flood modeling, and sustainable material characterization. We leverage industry-standard finite element solvers such as ETABS, SAP2000, and OpenSees.",
    keyAreas: [
      { title: "Nonlinear Seismic Dynamic Analysis", description: "Incremental dynamic analysis (IDA), fragility curves, and fiber-hinge inelastic modeling." },
      { title: "Structural High-Rise Modeling", description: "Dual lateral load resisting systems, shear wall optimization, and wind vibration." },
      { title: "GIS & Watershed Hydrology", description: "Urban flood inundation modeling, drainage network optimization, and HEC-RAS analysis." },
      { title: "Geotechnical & Soil-Structure Interaction", description: "Deep pile foundation settlement, slope stability, and PLAXIS soil plasticity." },
      { title: "Sustainable Concrete Characterization", description: "Geopolymer and self-compacting concrete compressive strength statistical models." },
      { title: "Bridge Engineering & Dynamic Stress", description: "Moving vehicle load dynamics, cable-stayed tension, and modal fatigue." },
    ],
    tools: ["ETABS", "OpenSees", "STAAD.Pro", "SAP2000", "ArcGIS", "HEC-RAS", "PLAXIS"],
    projectTypes: [
      "High-Rise Performance-Based Seismic Fragility Assessment",
      "Urban Catchment Flood Risk Mapping with GIS",
      "Geopolymer Concrete Mix Optimization and SEM Analysis",
      "Deep Excavation Diaphragm Wall Soil-Structure Simulation",
      "Steel-Concrete Composite Bridge Dynamic Response",
    ],
    deliverables: [
      "Native ETABS / OpenSees Structural Simulation Files",
      "Bending Moment, Shear Force & Inter-Story Drift Diagrams",
      "Seismic Fragility Curves & Response Spectra Plots",
      "Complete Master's Dissertation Chapter & Synopsis",
      "Calculation Sheets & Code Compliance Verification Reports",
    ],
    relatedProjectSlugs: ["structural-seismic-response", "ansys-thermal-analysis", "ai-disease-prediction"],
    process: [
      { step: "01", title: "Structural Layout", description: "Defining framing systems, design loads (Dead, Live, Wind, Seismic)." },
      { step: "02", title: "Inelastic Sectioning", description: "Fiber element assignments and concrete/steel constitutive stress-strain curves." },
      { step: "03", title: "Ground Motion Scaling", description: "Selecting acceleration time histories matched to target design response spectra." },
      { step: "04", title: "Nonlinear Solver Run", description: "Running incremental dynamic analysis and tracking plastic hinge rotations." },
      { step: "05", title: "Synthesis & Handover", description: "Formatting structural drift tables, fragility curves, and report documentation." },
    ],
    faqs: [
      {
        question: "What seismic design codes do you support?",
        answer: "We support IS 1893:2016, ASCE 7-22, Eurocode 8, and FEMA P-58 performance-based methodologies.",
      },
      {
        question: "Do you supply OpenSees scripts?",
        answer: "Yes, we provide fully commented TCL and Python OpenSees scripts for fiber-based nonlinear modeling.",
      },
    ],
  },
];

export function getAllDisciplines(): DisciplineDetail[] {
  return disciplinesData;
}

export function getDisciplineBySlug(slug: string): DisciplineDetail | undefined {
  return disciplinesData.find((d) => d.slug === slug);
}
