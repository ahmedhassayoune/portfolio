export const siteConfig = {
  name: "Ahmed Hassayoune",
  title: "ML & Computer Vision Engineer",
  description: "Portfolio website of Ahmed Hassayoune",
  accentColor: "#1d4ed8",
  social: {
    email: "ahmed.hassayoune@gmail.com",
    linkedin: "https://linkedin.com/in/ahmed-hassayoune",
    github: "https://github.com/ahmedhassayoune",
    cv: "/portfolio/cv.pdf",
  },
  aboutMe:
    "I am a graduate of EPITA and Sorbonne University, where I completed a double degree Master's program specializing in image processing, computer vision, and medical imaging.\n\nWhat drives me is the opportunity to bridge AI with real-world healthcare applications. I aspire to design and deploy solutions that make medical diagnostics faster, more reliable, and accessible to patients and practitioners worldwide.",
    skills: ["Python", "Numpy", "PyTorch", "TensorFlow", "OpenCV", "C", "C++", "CUDA", "Docker", "Medical Image Analysis"],
    education: [
      {
        school: "Sorbonne University",
        degree: "Master's Degree (M2), Image Track",
        dateRange: "2024 - 2025",
        achievements: [
          "Level: Highest Honors",
          "Double degree program with the IMAGE major at EPITA",
          "Relevant Coursework: Computer vision, Pattern recognition, Deep learning, Advanced image processing, and Medical imaging.",
        ],
      },
      {
        school: "EPITA",
        degree: "Computer Engineering Degree, Image Track",
        dateRange: "2020 - 2025",
        achievements: [
          "Top of the class in both years of the preparatory cycle",
          "Exchange semester at Hanyang University in Seoul, South Korea",
          "Specialization in the IMAGE major: Image Processing and Computer Vision",
        ],
      },
      {
        school: "Hanyang University",
        degree: "Abroad Exchange Semester",
        dateRange: "2022 (6 months)",
        achievements: [
          "Level: GPA 87/100",
          "Participated in a one-semester exchange program at Hanyang University, Seoul, as part of computer engineering studies",
          "Relevant Coursework: Machine Learning, Linear Algebra, Data Structures and Object-Oriented Programming",
        ],
      },
    ],
    experience: [
      {
        company: "General Electric HealthCare",
        title: "Final-Year R&D Internship",
        dateRange: "Mar 2025 - Sep 2025 (6 months)",
        bullets: [
          "Developed a 3D generative model for pulmonary nodule synthesis in CT imaging",
          "Designed conditioning methods to control generation along morphological and pathological aspects",
          "Created synthetic CT scans and enhanced detection model performance",
          "Annotated over 1,300 lung nodules (3D segmentation and labeling) to enrich training datasets",
          "Collaborated with an R&D team (AI researchers, clinicians) and presented findings in internal seminars",
        ],
      },
      {
        company: "DXOMARK",
        title: "Full-Stack Web Development Internship",
        dateRange: "Sep 2023 - Feb 2024 (6 months)",
        bullets: [
          "Developed a visualization interface for smartphone camera scoring used by engineers and product teams",
          "Migrated a large-scale app from Vue 2 to Vue 3 (20+ dependencies)",
          "Designed and implemented backend services, integrated into an existing modular architecture",
          "Contributed in an Agile Scrum team with developers, and image QA engineers, improving release cycles",
        ],
      },
    ],
    projects: [
      {
        name: "Alignment of Mass Spectrometry Data",
        description:
          "In collaboration with Foch Hospital, Paris-Saclay University, and Versailles Saint-Quentin University, I developed fast and robust alignment methods for data from 2D gas chromatography coupled with mass spectrometry (GCxGC-MS).\n\nThis technology is used in clinical research to analyze volatile organic compounds (VOCs) in exhaled breath, enabling non-invasive diagnosis of lung diseases such as asthma, cancer, and COVID-19.",
        link: "https://github.com/ahmedhassayoune/Python-2DGC-Alignment",
        skills: ["Image Processing", "Pattern Recognition", "Computational optimization", "Bioinformatics", "Python", "Matlab"],
      },
      {
        name: "3D Brain Tumor Analysis",
        description:
          "This group project focused on tracking and analyzing tumor changes in medical images.\n\nUsing registration and segmentation techniques, we aligned and processed scans to highlight differences over time, then built visualizations to make these changes easier to interpret.\n\nWe compared several algorithms through benchmarking to determine the most effective methods, and implemented the solution in Python with ITK and VTK for image processing and 3D visualization.",
        link: "https://github.com/ahmedhassayoune/tumor-analysis",
        skills: ["Python", "ITK/VTK", "Image Registration", "Image Segmentation", "3D Visualization"],
      },
      {
        name: "Implementation of SIFT Algorithm",
        description:
          "Implemented from scratch the SIFT algorithm in C++ for robust feature detection and matching in images. Optimized the implementation for real-time processing, enabling efficient and rapid feature detection and matching.\nApplied to automatic stitching of fragmented images for scene reconstruction.",
        link: "https://github.com/ahmedhassayoune/sift-project",
        skills: ["C++", "Computer Vision", "Feature Detection and Matching", "Real-Time Optimization"],
      },
      {
        name: "Real-Time Video Background Subtraction GPU Plugin",
        description:
          "GStreamer plugin capable of separating moving objects from the background in real-time video streams. The plugin leverages GPU-accelerated image processing to achieve high performance.\n\nThe approach involves analyzing each video frame against a dynamic background model, detecting motion by identifying differences, filtering noise, and generating a clean foreground mask. The background model is continuously updated to adapt to changes in the scene, ensuring robust and efficient object detection.",
        link: "https://github.com/ahmedhassayoune/gpgpu-project",
        skills: ["CUDA", "C++", "Image Processing", "Computer Vision"],
      },
      {
        name: "Adaptive Quad Mesh Simplification in Python",
        description:
          "This project implements a Python tool using the Blender API to simplify 3D quad meshes while keeping as much detail as possible.\n\nBy reducing mesh complexity efficiently, it makes 3D models lighter and easier to use in graphics or simulation, following techniques from a 2010 research paper. The implementation was done completely from scratch, including mesh triangulation, Tri-to-Quad conversion, and adaptive simplification.",
        link: "https://github.com/ahmedhassayoune/isim-project",
        skills: ["Python", "Blender", "Blender Python API", "Computer Graphics", "Geometric optimization"],
      },
    ],
};
