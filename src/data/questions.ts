import type { FAQQuestion } from '@/types';
import { categories as allDefinedCategories } from './categories';

const generateId = () => {
  if (typeof window !== 'undefined' && typeof window.crypto !== 'undefined') {
    return window.crypto.randomUUID();
  } else {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
};

const questionsData = [
  // Course Basics & Enrollment
  {
    question: "What is CPP41419 Certificate IV in Real Estate Practice?",
    answer: "CPP41419 is Australia's nationally recognized qualification required to become a licensed real estate agent. It covers property sales, leasing, trust account management, legal compliance, and client relationship skills.^[1]",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Do I need any prerequisites to enroll in CPP41419?",
    answer: "No formal prerequisites exist. However, you must be:\n- At least 18 years old (in most states)\n- Australian citizen, permanent resident, or hold appropriate visa\n- Have basic English literacy and computer skills for online study",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Can international students enroll in CPP41419?",
    answer: "Yes, international students can enroll, but licensing requirements vary by state. Some states have additional visa and residency requirements for licensing.^[2]",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What's the difference between CPP40307 and CPP41419?",
    answer: "```mermaid\ngraph LR\n    A[CPP40307<br/>Expired 2019] --> B[CPP41419<br/>Current Standard]\n    \n    A --> C[Basic Skills<br/>Limited Digital]\n    B --> D[Enhanced Ethics<br/>Digital Marketing<br/>Modern Compliance]\n    \n    style A fill:#ffebee\n    style B fill:#e8f5e8\n```\nCPP40307 expired in 2019. CPP41419 includes enhanced digital skills, stronger ethical components, and modern compliance requirements.^[3]",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Is CPP41419 recognized in all Australian states?",
    answer: "Yes, CPP41419 is nationally recognized. However, each state has different licensing processes, experience requirements, and additional criteria.^[4]",
    category: "Course Basics & Enrollment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Study Options & Duration
  {
    question: "How long does CPP41419 take to complete?",
    answer: "> [!example] Duration by Study Mode\n> ```\n> Study Mode Comparison:\n> ┌─ Self-Paced Online     → 3-6 months\n> ├─ Structured Online    → 4-8 months\n> ├─ Blended Learning     → 5-9 months\n> └─ Classroom Based      → 6-12 months\n> ```\nDuration varies by provider and personal study pace. Most students complete within 4-6 months.^[5]",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Can I study CPP41419 entirely online?",
    answer: "Yes, most providers offer 100% online study options. Online courses are fully recognized for licensing purposes across all states.^[6]",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What's the difference between online, blended, and classroom study?",
    answer: "> [!tip] Study Mode Comparison\n> | Mode | Flexibility | Interaction | Best For |\n> |------|-------------|-------------|----------|\n> | Online | High | Digital only | Working professionals |\n> | Blended | Medium | Mixed | Balanced approach |\n> | Classroom | Low | Face-to-face | Structured learners |",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Can I pause my studies and resume later?",
    answer: "Most providers allow study breaks, but policies vary. Check with your chosen provider about:\n- Maximum break duration\n- Re-enrollment requirements\n- Additional fees for extended access",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "How many hours per week do I need to study?",
    answer: "> [!note] Study Time Guidelines\n> - **Minimum**: 8-10 hours per week\n> - **Average**: 12-15 hours per week\n> - **Intensive**: 20+ hours per week (for faster completion)",
    category: "Study Options & Duration",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Costs & Payment
  {
    question: "How much does CPP41419 cost?",
    answer: "> [!abstract] Cost Breakdown by Provider Type\n> ```mermaid\n> graph TD\n>     A[CPP41419 Costs] --> B[Online RTOs<br/>$1,495-$1,895]\n>     A --> C[TAFE Institutes<br/>$2,200-$2,670]\n>     A --> D[Industry Bodies<br/>$2,050-$2,950]\n>     A --> E[Universities<br/>$2,750-$2,890]\n>     \n>     style B fill:#e8f5e8\n>     style C fill:#e1f5fe\n>     style D fill:#fff3e0\n>     style E fill:#f3e5f5\n> ```\nCourse fees range from $1,495 to $2,890 depending on the provider type and delivery method.^[7]",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Are there additional costs beyond the course fee?",
    answer: "> [!warning] Hidden Costs to Consider\n> | Cost Type | Range | When Required |\n> |-----------|-------|---------------|\n> | Learning Materials | $50-$120 | Some providers |\n> | Assessment Retakes | $75-$150 | If needed |\n> | Criminal History Check | $45-$56 | Licensing application |\n> | License Application | $145-$675 | Varies by state |\n> | Professional Insurance | $300-$600/year | Most states |",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Are payment plans available?",
    answer: "Most providers offer payment plans including:\n- Weekly payments\n- Monthly installments (2-6 months)\n- Employer sponsorship options\n- Government funding programs",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Can I get government funding or subsidies?",
    answer: "> [!success] Funding Options by State\n> - **VIC**: Skills First funding (up to 50% reduction)\n> - **QLD**: Certificate 3 Guarantee (free for under 25s)\n> - **WA**: Jobs and Skills Centres (up to 60% reduction)\n> - **SA**: Skills for All program (up to 50% reduction)\n> - **TAS**: Skills Tasmania (up to 70% reduction)\n> - **ACT**: Skilled Capital program (up to 60% reduction)\n> - **NT**: Territory Training Assistance (up to 75% reduction)",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Is CPP41419 tax deductible?",
    answer: "Generally yes, if you're:\n- Currently working in real estate\n- Upgrading existing qualifications\n- The course relates to your current income-earning activities\nConsult a tax professional for personal advice.",
    category: "Costs & Payment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },

  // State Licensing Requirements
  {
    question: "Which states require the full CPP41419 for initial licensing?",
    answer: "> [!example] Licensing Requirements Map\n> ```\n> Full CPP41419 Required:\n> ├─ VIC (Agent's Representative)\n> ├─ WA (Triennial License)\n> ├─ TAS (Property Agent Registration)\n> └─ NT (Agent Registration)\n> \n> Staged Licensing Available:\n> ├─ NSW (4 units for Certificate of Registration)\n> ├─ QLD (Core units for Registration Certificate)\n> ├─ SA (Core units + SA specifics)\n> └─ ACT (Core units for Agent Registration)\n> ```",
    category: "State Licensing Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Can I work while completing my CPP41419?",
    answer: "Yes, in states with staged licensing:\n- **NSW**: Work as Assistant Agent with Certificate of Registration\n- **QLD**: Work with Registration Certificate\n- **SA**: Work with initial Registration\n- **ACT**: Work with Agent Registration",
    category: "State Licensing Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "How long is the experience requirement in each state?",
    answer: "> [!tip] Experience Requirements\n> | State | Initial License | Full License | Special Notes |\n> |-------|----------------|--------------|---------------|\n> | NSW | None | 12 months | Assistant Agent period |\n> | VIC | None | 18 months | For Estate Agent upgrade |\n> | QLD | None | 12 months | For Salesperson license |\n> | WA | Varies | Varies | Experience varies by role |\n> | SA | None | 12-24 months | Registration to License |\n> | TAS | None | 12 months | Property Agent upgrade |\n> | ACT | None | 12 months | Agent Registration to License |\n> | NT | None | 18 months | Longest requirement |",
    category: "State Licensing Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Can I transfer my license between states?",
    answer: "Limited mutual recognition exists:\n> [!note] Interstate Recognition\n> - **NSW ↔ VIC**: Some recognition with additional requirements\n> - **NSW ↔ QLD**: Mutual recognition agreement\n> - **Other states**: Generally require new application and may need additional training\n> \n> Always check with destination state licensing authority.^[8]",
    category: "State Licensing Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Assessment & Completion
  {
    question: "Are there exams in CPP41419?",
    answer: "No traditional exams. Assessment is through:\n- Project-based assignments\n- Case study analysis\n- Portfolio development\n- Practical demonstrations\n- Written reports",
    category: "Assessment & Completion",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What happens if I fail an assessment?",
    answer: "> [!warning] Retake Process\n> ```mermaid\n> graph LR\n>     A[Failed Assessment] --> B[Review Feedback]\n>     B --> C[Additional Study]\n>     C --> D[Retake Assessment]\n>     D --> E{Pass?}\n>     E -->|Yes| F[Continue Course]\n>     E -->|No| G[Further Support<br/>Additional Retakes]\n> ```\nMost providers allow 2-3 retake attempts per unit. Additional fees may apply.",
    category: "Assessment & Completion",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "How difficult is CPP41419?",
    answer: "> [!success] Success Factors\n> **Success Rates**: 70-90% depending on provider\n> **Key Success Factors**:\n> - Consistent study schedule\n> - Active participation in training\n> - Practical application of concepts\n> - Seeking help when needed",
    category: "Assessment & Completion",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What support is available during study?",
    answer: "> [!check] Support Services\n> - **Trainer Access**: Email, phone, video calls\n> - **Study Groups**: Online forums and peer networks\n> - **Learning Materials**: Videos, interactive modules, textbooks\n> - **Technical Support**: Platform assistance\n> - **Career Guidance**: Job placement assistance",
    category: "Assessment & Completion",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Career & Employment
  {
    question: "What jobs can I get with CPP41419?",
    answer: "> [!abstract] Career Pathways\n> ```mermaid\n> graph TD\n>     A[CPP41419 Completion] --> B[Entry Level]\n>     B --> C[Sales Agent<br/>$50-70k]\n>     B --> D[Property Manager<br/>$45-65k]\n>     B --> E[Leasing Consultant<br/>$42-58k]\n>     \n>     C --> F[Senior Roles]\n>     D --> F\n>     E --> F\n>     \n>     F --> G[Senior Sales Agent<br/>$80-150k+]\n>     F --> H[Property Development<br/>$90-200k+]\n>     F --> I[Commercial Specialist<br/>$100-300k+]\n> ```",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "How quickly can I start earning after completing CPP41419?",
    answer: "Most agents achieve their first sale within:\n- **NSW**: 2.3 months average\n- **VIC**: 2.8 months average\n- **QLD**: 2.1 months average\n- **National Average**: 2-4 months",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What's the average salary for real estate agents?",
    answer: "> [!example] Salary Ranges by Experience\n> | Experience Level | Salary Range | Notes |\n> |------------------|--------------|-------|\n> | Entry Level (0-2 years) | $45,000-$70,000 | Base + commission |\n> | Experienced (3-5 years) | $70,000-$120,000 | Higher commission rates |\n> | Senior (5+ years) | $100,000-$300,000+ | Top performers |\n> | Principal/Owner | $150,000-$500,000+ | Agency ownership |",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Do I need to join a real estate agency immediately?",
    answer: "Yes, in most states you must work under a licensed agent or agency. Independent practice requires additional licensing and experience.",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Are there job placement services available?",
    answer: "Many providers offer:\n- Industry networking events\n- Job placement assistance\n- Resume and interview preparation\n- Direct connections with real estate agencies\n- Ongoing career support",
    category: "Career & Employment",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Provider Selection
  {
    question: "How do I choose the best CPP41419 provider?",
    answer: "> [!tip] Provider Selection Criteria\n> ```mermaid\n> graph LR\n>     A[Provider Selection] --> B[Study Mode Preference]\n>     A --> C[Budget Considerations]\n>     A --> D[Support Services]\n>     A --> E[State Specialization]\n>     A --> F[Industry Connections]\n>     \n>     B --> G[Online/Classroom/Blended]\n>     C --> H[Course Fees + Hidden Costs]\n>     D --> I[Trainer Access + Materials]\n>     E --> J[Local Law Knowledge]\n>     F --> K[Job Placement Assistance]\n> ```",
    category: "Provider Selection",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What's the difference between TAFE and private RTOs?",
    answer: "> [!abstract] TAFE vs Private RTO Comparison\n> | Factor | TAFE | Private RTOs |\n> |--------|------|--------------|\n> | Cost | Higher ($2,200-$2,670) | Lower ($1,495-$2,500) |\n> | Government Backing | Yes | Varies |\n> | Flexibility | Lower | Higher |\n> | Face-to-Face Options | More available | Limited |\n> | Industry Connections | Established | Varies |\n> | Study Pace | Fixed semesters | Self-paced options |",
    category: "Provider Selection",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Should I choose an industry body for training?",
    answer: "> [!success] Industry Body Advantages\n> - **Strong Industry Connections**: Direct links to agencies\n> - **Local Market Knowledge**: State-specific insights\n> - **Ongoing Support**: Continuing education and networking\n> - **Credibility**: Industry recognition and reputation\n> \n> **Examples**: REINSW (NSW), REIQ (QLD), REIWA (WA)",
    category: "Provider Selection",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Are online-only providers legitimate?",
    answer: "Yes, many reputable online providers offer nationally accredited CPP41419:\n- Open Colleges\n- TrainSmart Australia\n- Kaplan Professional\n- Entry Education\n\nEnsure the provider is ASQA registered and offers proper support.^[9]",
    category: "Provider Selection",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Technical Requirements
  {
    question: "What technology do I need for online study?",
    answer: "> [!check] Technical Requirements\n> **Minimum Requirements**:\n> - Reliable internet connection (minimum 10 Mbps)\n> - Computer or tablet with webcam and microphone\n> - Up-to-date web browser (Chrome, Firefox, Safari, Edge)\n> - Basic computer skills (email, file management, web browsing)\n> \n> **Recommended**:\n> - Dedicated study space\n> - Printer for assignments\n> - Note-taking applications",
    category: "Technical Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Can I study on my phone or tablet?",
    answer: "While possible for reading materials, most assessments require:\n- Larger screen for document creation\n- Keyboard for efficient typing\n- File upload capabilities\n- Stable internet for video content",
    category: "Technical Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What if I have technical problems during study?",
    answer: "> [!info] Technical Support Options\n> Most providers offer:\n> - **Help Desk**: Phone and email support\n> - **Live Chat**: Real-time assistance\n> - **Video Tutorials**: Platform navigation guides\n> - **Technical Documentation**: Step-by-step guides\n> - **Alternative Access**: Downloadable materials for offline study",
    category: "Technical Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Do I need specific software for assessments?",
    answer: "Generally no special software required. Standard tools include:\n- Microsoft Office or Google Workspace\n- PDF reader\n- Web browser\n- Email client\n\nSome providers may require specific learning management system access.",
    category: "Technical Requirements",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },

  // Advanced Questions
  {
    question: "Can I specialize during my CPP41419 studies?",
    answer: "> [!example] Specialization Options Through Electives\n> - **Residential Sales**: Focus on property sales and marketing units\n> - **Property Management**: Emphasize leasing and tenancy management\n> - **Commercial Real Estate**: Include business broking and commercial units\n> - **Auction Services**: Add auction-specific training units",
    category: "Advanced Questions",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What continuing education is required after licensing?",
    answer: "> [!warning] CPD Requirements by State\n> | State | Annual CPD Hours | Cost Range |\n> |-------|-----------------|-------------|\n> | NSW | 12 hours | $200-$400 |\n> | VIC | 12 hours | $200-$400 |\n> | QLD | 10 hours | $150-$350 |\n> | WA | 30 hours (over 3 years) | $600-$900 |\n> | SA | Varies | $300-$500 |\n> | TAS | 10 hours | $250-$400 |\n> | ACT | 12 hours | $350-$500 |\n> | NT | 12 hours | $400-$600 |",
    category: "Advanced Questions",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Can CPP41419 lead to further qualifications?",
    answer: "Yes, progression pathways include:\n> [!success] Further Education Options\n> - **CPP51122 Diploma of Property Services**: For agency principal licensing\n> - **Bachelor of Property**: University-level property studies\n> - **Specialized Certifications**: Auctioneering, commercial real estate, property development\n> - **Business Qualifications**: For agency management and ownership",
    category: "Advanced Questions",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "What if regulations change after I complete CPP41419?",
    answer: "Your qualification remains valid, but you may need:\n- Additional CPD to cover new regulations\n- Refresher training for significant changes\n- Updated licensing applications for new requirements\n\nStay informed through industry bodies and [cpp41419.com.au](https://cpp41419.com.au) updates.^[10]",
    category: "Advanced Questions",
    keywords: [],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  },
  {
    question: "Current Warning Signs: Protect Yourself and Others",
    answer: `Red Flags the Industry Hopes You'll Ignore\nRecognize these predatory tactics before they destroy your financial future:\n\nImmediate Danger Signals:\n\nUnsolicited contact offering "free courses" or "government funding"\nPressure to enroll immediately without time to review loan documentation\nPromises of guaranteed employment or "industry connections"\nRequests for personal banking information before course details are explained\nMarketing targeting specific demographics (Indigenous, elderly, unemployed) through social media\n\nDocumentation Red Flags:\n\nLoan terms buried in digital agreements requiring electronic signatures\nCourse duration significantly shorter than industry standards\nNo clear explanation of post-graduation outcomes or employment statistics\nFees that seem "too good to be true" compared to legitimate institutions\nPressure to use specific loan providers rather than independent financial advice\n\nInstitution Warning Signs:\n\nRecent establishment date with limited track records\nAggressive online advertising rather than educational reputation\nMultiple trading names or frequent rebranding\nFocus on enrollment numbers rather than educational quality in marketing materials\n\nTrust your instincts—if something feels predatory, it probably is.`,
    category: "Course Basics & Enrollment",
    keywords: ["warning signs", "predatory tactics", "financial future", "fraud"],
    provider_specific: false,
    priority: 1,
    last_updated: new Date().toISOString(),
    averageRating: undefined,
    ratingCount: undefined,
  }
];


export const questions: FAQQuestion[] = questionsData.map(q => ({
  ...q,
  id: generateId(),
}));

export const questionIds = questions.reduce((acc: Record<string, string>, question) => {
  acc[question.question] = question.id;
  return acc;
}, {});


export function getQuestionsByCategory(categorySlug: string): FAQQuestion[] {
  const category = allDefinedCategories.find(c => c.slug === categorySlug);
  if (!category) return [];
  const filtered = questions.filter(q =>
    q.category.trim().toLowerCase() === category.name.trim().toLowerCase()
  );
  if (filtered.length === 0) {
    if (typeof console !== 'undefined') {
      console.warn(`No questions found for category: '${category.name}' (slug: '${categorySlug}')`);
    }
  }
  return filtered.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    return new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime();
  });
}

export function getQuestionById(questionId: string): FAQQuestion | undefined {
  return questions.find(q => q.id === questionId);
}

export function getAllQuestions(): FAQQuestion[] {
  return [...questions].sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    return new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime();
  });
}
