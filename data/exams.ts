export type Exam = {
  slug: string; name: string; short: string; category: string; organization: string;
  level: string; format: string; region: string; accent: string; description: string; skills: string[];
};

const make = (slug: string, name: string, category: string, organization: string, level: string, format: string, region: string, accent: string, description: string, skills: string[]): Exam => ({ slug, name, short: name.replace("Advanced Placement", "AP"), category, organization, level, format, region, accent, description, skills });

export const exams: Exam[] = [
  make("sat", "SAT", "College admissions", "College Board", "High school", "Digital · Multiple choice", "United States", "blue", "Reading, writing, and math practice built around the current digital structure.", ["Algebra", "Data analysis", "Rhetorical synthesis"]),
  make("act", "ACT", "College admissions", "ACT", "High school", "Multiple choice", "United States", "cyan", "Focused preparation across English, math, reading, science, and optional writing.", ["Grammar", "Functions", "Data interpretation"]),
  make("gre", "GRE General Test", "Graduate admissions", "ETS", "Graduate", "Mixed response", "International", "violet", "Build quantitative, verbal, and analytical-writing fluency with transparent practice.", ["Quantitative comparison", "Text completion", "Argument analysis"]),
  make("mcat", "MCAT", "Graduate admissions", "AAMC", "Graduate", "Passage-based", "United States", "rose", "Practice scientific reasoning, passage analysis, and core premedical concepts.", ["Biochemistry", "CARS", "Scientific reasoning"]),
  make("ap-biology", "AP Biology", "Advanced Placement", "College Board", "High school", "Multiple choice · Free response", "United States", "green", "Connect core biological systems to experimental evidence and quantitative reasoning.", ["Cell energetics", "Genetics", "Ecology"]),
  make("ap-chemistry", "AP Chemistry", "Advanced Placement", "College Board", "High school", "Multiple choice · Free response", "United States", "amber", "Develop molecular reasoning, calculation fluency, and lab-data analysis.", ["Thermodynamics", "Equilibrium", "Kinetics"]),
  make("ap-calculus-bc", "AP Calculus BC", "Advanced Placement", "College Board", "High school", "Multiple choice · Free response", "United States", "indigo", "Practice conceptual and computational calculus across current course units.", ["Integration", "Series", "Parametric functions"]),
  make("ap-us-history", "AP United States History", "Advanced Placement", "College Board", "High school", "Mixed response · Essay", "United States", "red", "Strengthen evidence-based reasoning across periods, themes, and source analysis.", ["Contextualization", "Sourcing", "Argumentation"]),
  make("ap-csa", "AP Computer Science A", "Advanced Placement", "College Board", "High school", "Multiple choice · Coding", "United States", "slate", "Learn Java reasoning through original code-reading and implementation tasks.", ["Classes", "Arrays", "Recursion"]),
  make("amc-8", "AMC 8", "Mathematics competitions", "MAA", "Middle school", "Multiple choice · Non-calculator", "International", "orange", "Build creative, efficient problem solving across the core middle-school curriculum.", ["Number theory", "Geometry", "Counting"]),
  make("amc-10", "AMC 10", "Mathematics competitions", "MAA", "High school", "Multiple choice · Non-calculator", "International", "orange", "Develop competition instincts with varied, original multi-step problems.", ["Algebra", "Geometry", "Combinatorics"]),
  make("aime", "AIME", "Mathematics competitions", "MAA", "High school", "Integer response · Non-calculator", "International", "orange", "Practice sustained mathematical reasoning and precise integer-response work.", ["Diophantine equations", "Euclidean geometry", "Probability"]),
  make("usamo", "USAMO", "Mathematics competitions", "MAA", "Olympiad", "Written proof", "United States", "orange", "Develop rigorous proof construction with rubric-based feedback and guided hints.", ["Proof strategy", "Inequalities", "Geometry"]),
  make("fma", "F=ma", "Physics competitions", "AAPT", "High school", "Multiple choice", "United States", "blue", "Train fast, accurate mechanics reasoning for the first US physics selection stage.", ["Kinematics", "Energy", "Rotation"]),
  make("usapho", "USAPhO", "Physics competitions", "AAPT", "Olympiad", "Written response", "United States", "blue", "Practice multi-part theoretical physics with dimensional and limiting-case checks.", ["Mechanics", "Electromagnetism", "Thermodynamics"]),
  make("usabo", "USABO", "Biology competitions", "CEE", "Olympiad pathway", "Mixed response", "United States", "green", "Deepen biological knowledge and evidence-based experimental reasoning.", ["Molecular biology", "Plant anatomy", "Ethology"]),
  make("usnco", "USNCO", "Chemistry competitions", "ACS", "Olympiad pathway", "Mixed response", "United States", "amber", "Strengthen advanced chemical reasoning from local exam through national level.", ["Analytical chemistry", "Organic chemistry", "Physical chemistry"]),
  make("usaco", "USACO", "Informatics", "USA Computing Olympiad", "Bronze–Platinum", "Coding problem", "International", "slate", "Practice algorithm design with clear constraints, examples, and test-ready solutions.", ["Simulation", "Graphs", "Dynamic programming"]),
];

export const categories = ["All exams", ...Array.from(new Set(exams.map((exam) => exam.category)))];
export const featured = exams.filter((exam) => ["sat", "ap-biology", "amc-10", "usaco"].includes(exam.slug));
