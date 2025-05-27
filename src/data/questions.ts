import type { FAQQuestion } from '@/types';
import { categories as allDefinedCategories } from './categories';

// crypto.randomUUID() is available in Node.js v14.17.0+ and modern browsers.
// For Next.js server components / data fetching, this is generally fine.
const generateId = () => crypto.randomUUID();

export const questions: FAQQuestion[] = [
  {
    id: generateId(),
    question: "What is CPP41419 Certificate IV in Real Estate Practice?",
    answer: "CPP41419 is the nationally recognized qualification required to obtain a real estate license in Australia. This Certificate IV level course covers core competencies including property law, ethics, trust accounting, sales processes, and client relationship management.\nThe qualification consists of 12 units of competency covering both theoretical knowledge and practical skills needed for real estate practice. Upon completion, graduates can apply for real estate licensing in any Australian state or territory, though additional state-specific requirements may apply.\nThe course replaced the previous CPP40307 qualification in 2019 and incorporates updated industry standards, digital marketing practices, and contemporary compliance requirements.",
    category: "Course Fundamentals",
    keywords: ["CPP41419", "Certificate IV", "Real Estate Practice", "qualification"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date("2023-10-01").toISOString(),
  },
  {
    id: generateId(),
    question: "What are the 12 units in CPP41419?",
    answer: "CPP41419 consists of 5 core units and 7 elective units. Core units include: CPPREP4001 (Prepare for professional practice), CPPREP4002 (Access and interpret ethical practice), CPPREP4003 (Access and interpret legislation), CPPREP4004 (Establish marketing profiles), and CPPREP4005 (Prepare to work with trust accounts).\nElective units vary by provider but commonly include property sales, leasing, property management, and risk management units. The specific elective combination determines career pathways - sales-focused electives suit agent roles while property management electives suit rental specialists.\nProviders must offer units that meet Australian Qualifications Framework standards and align with state licensing requirements.",
    category: "Course Fundamentals",
    keywords: ["units", "core units", "elective units", "competency"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date("2023-10-02").toISOString(),
  },
  {
    id: generateId(),
    question: "What are the CPP41419 requirements in NSW?",
    answer: "In NSW, CPP41419 graduates must complete additional steps through NSW Fair Trading. Requirements include passing the NSW real estate licensing examination, submitting a National Police Certificate, providing proof of identity and qualification completion, and paying applicable fees.\nThe licensing process typically takes 4-6 weeks after exam completion. NSW offers different license types including Certificate of Registration for entry-level positions and higher-level licenses for experienced practitioners.\nApplicants must be at least 18 years old and meet character requirements including disclosure of any criminal history for assessment.",
    category: "State Requirements",
    state_specific: "NSW",
    keywords: ["NSW", "licensing", "requirements", "Fair Trading"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date("2023-10-05").toISOString(),
  },
  {
    id: generateId(),
    question: "How long does CPP41419 licensing take in Victoria?",
    answer: "Victoria's licensing process through Consumer Affairs Victoria typically takes 6-8 weeks after CPP41419 completion. Requirements include passing the Victorian licensing exam, National Police Check, proof of identity, and completed application forms.\nVictoria distinguishes between Agent's Representative registration for supervised roles and full Agent's License for independent practice.\nProcessing times may extend during peak periods or if additional documentation is required. Applicants should factor exam scheduling availability and background check processing time into their timeline planning.",
    category: "State Requirements",
    state_specific: "Victoria",
    keywords: ["Victoria", "licensing", "duration", "Consumer Affairs"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date("2023-10-06").toISOString(),
  },
  {
    id: generateId(),
    question: "How much does CPP41419 cost in Australia?",
    answer: "CPP41419 costs range from $1,000 to $3,500 depending on provider and delivery mode. Online providers typically charge $1,200-$1,800, TAFE institutions charge $2,000-$3,500, and industry associations charge $1,500-$2,500.\nAdditional costs include state licensing fees ($150-$400), examination fees ($200-$500), and background checks ($50-$100). Total cost to obtain real estate licensing ranges from $1,400-$4,400.\nMany providers offer payment plans, and some states provide subsidized training through programs like VIC Skills First or QLD Certificate 3 Guarantee for eligible students.",
    category: "Costs & Funding",
    keywords: ["cost", "fees", "funding", "payment plans"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date("2023-09-15").toISOString(),
  },
  {
    id: generateId(),
    question: "Can I study CPP41419 entirely online?",
    answer: "Yes, CPP41419 can be completed 100% online through numerous accredited providers. Online delivery includes interactive modules, video tutorials, digital resources, and virtual support. Assessment occurs through assignments, case studies, and projects rather than traditional exams.\nOnline students receive trainer support via email, phone, or video conferencing. This format suits working professionals and those in remote locations.\nHowever, some employers prefer graduates with face-to-face training experience. Online completion timeframes range from 3-12 months depending on study intensity and provider structure.",
    category: "Delivery & Duration",
    keywords: ["online study", "delivery mode", "e-learning"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date("2023-09-20").toISOString(),
  },
  {
    id: generateId(),
    question: "What should I look for when choosing a CPP41419 provider?",
    answer: "Key selection criteria include ASQA registration status, delivery mode suitability, support quality, assessment methods, and total costs. Verify the provider holds current RTO registration and offers nationally recognized qualifications.\nEvaluate support availability through trainer contact, response times, and learning resources. Consider assessment requirements - some use practical projects while others rely on written assignments.\nCompare total costs including hidden fees. Read independent reviews focusing on support quality and completion rates rather than marketing claims. Choose providers aligned with your learning style and career goals.",
    category: "Provider Selection",
    keywords: ["provider", "RTO", "selection criteria", "accreditation"],
    provider_specific: true,
    priority: 1,
    last_updated: new Date("2023-09-25").toISOString(),
  },
  {
    id: generateId(),
    question: "What jobs can I get with CPP41419?",
    answer: "CPP41419 opens various real estate career paths including sales agent, property manager, leasing consultant, buyer's agent, commercial agent, and auction assistant roles. Entry-level positions typically involve supervised practice while building experience toward full licensing.\nSpecialization opportunities include residential sales, commercial property, property development, rural real estate, and strata management.\nCareer progression leads to senior agent, team leader, or principal positions. The qualification also supports related roles in mortgage broking, property valuation, and real estate marketing requiring industry knowledge and credibility.",
    category: "Career Outcomes",
    keywords: ["jobs", "career paths", "real estate agent", "property manager"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date("2023-09-10").toISOString(),
  },
  {
    id: generateId(),
    question: "Can I become a real estate agent with a criminal record?",
    answer: "Criminal history doesn't automatically disqualify real estate licensing applications, but requires case-by-case assessment by state authorities. Factors considered include offense nature, time elapsed, rehabilitation evidence, and character references.\nMinor traffic offenses typically don't impact applications. Serious offenses involving dishonesty, violence, or drug-related crimes face greater scrutiny.\nApplicants must disclose all criminal history truthfully - concealment results in automatic rejection. Legal advice is recommended for complex situations. Many states provide preliminary assessment services to evaluate eligibility before course enrollment, preventing wasted education investment.",
    category: "Compliance Issues",
    keywords: ["criminal record", "licensing eligibility", "compliance", "disclosure"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date("2023-09-05").toISOString(),
  },
  {
    id: generateId(),
    question: "What technical requirements do I need for online CPP41419 study?",
    answer: "Online CPP41419 requires stable internet connection, modern web browser (Chrome, Firefox, Safari, Edge), and device capable of video streaming and document viewing. Minimum specifications include 4GB RAM, updated operating system, and reliable internet speed of 5Mbps or higher.\nMobile devices can supplement study but computers provide better experience for assignments and research.\nPDF reader, Microsoft Office or equivalent, and email access are essential. Some providers require specific learning management system compatibility. Technical support should be available for troubleshooting platform issues and access problems.",
    category: "Technical Support",
    keywords: ["technical requirements", "online study", "internet", "device"],
    provider_specific: true,
    priority: 1,
    last_updated: new Date("2023-09-01").toISOString(),
  }
];

export function getQuestionsByCategory(categorySlug: string): FAQQuestion[] {
  const category = allDefinedCategories.find(c => c.slug === categorySlug);
  if (!category) return [];
  return questions.filter(q => q.category === category.name).sort((a, b) => a.priority - b.priority || new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime());
}

export function getQuestionById(questionId: string): FAQQuestion | undefined {
  return questions.find(q => q.id === questionId);
}

export function getAllQuestions(): FAQQuestion[] {
  return questions.sort((a, b) => a.priority - b.priority || new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime());
}
