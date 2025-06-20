
import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { CheckCircle, Info, AlertTriangle, XCircle, BookOpen, Clock, DollarSign, Award, BarChart2, Users, Briefcase, TrendingUp, PlayCircle, ShieldCheck, BookCopy } from 'lucide-react';
import MermaidDiagram from '@/components/core/MermaidDiagram'; // Import the new component

export const metadata: Metadata = {
  title: 'CPP41419 Certificate IV - Complete Australian Guide | CPP41419 Q&A',
  description: 'A comprehensive guide to the CPP41419 Certificate IV in Real Estate Practice across Australia, covering course history, state licensing, costs, providers, and career pathways.',
  keywords: ['CPP41419 guide', 'real estate course Australia', 'Certificate IV Real Estate Practice', 'licensing requirements', 'RTO comparison', 'career pathways real estate'],
};

interface SpecialBlockProps {
  type: 'abstract' | 'info' | 'timeline' | 'example' | 'tip' | 'warning' | 'important' | 'check' | 'question' | 'note' | 'success';
  title?: string;
  children: React.ReactNode;
}

const SpecialBlock: React.FC<SpecialBlockProps> = ({ type, title, children }) => {
  let IconComponent: React.ElementType = Info;
  let alertVariant: "default" | "destructive" = "default";
  let effectiveTitle = title || type.charAt(0).toUpperCase() + type.slice(1);

  switch (type) {
    case 'abstract': IconComponent = BookOpen; break;
    case 'info': IconComponent = Info; break;
    case 'timeline': IconComponent = Clock; break;
    case 'example': IconComponent = PlayCircle; break;
    case 'tip': IconComponent = CheckCircle; alertVariant = "default"; break; 
    case 'warning': IconComponent = AlertTriangle; alertVariant = "default"; break; 
    case 'important': IconComponent = AlertTriangle; break;
    case 'check': IconComponent = CheckCircle; break;
    case 'question': IconComponent = Info; break; 
    case 'note': IconComponent = Info; break;
    case 'success': IconComponent = CheckCircle; break;
    default: IconComponent = Info;
  }

  return (
    <Alert variant={alertVariant} className="my-4">
      <IconComponent className="h-4 w-4" />
      <AlertTitle>{effectiveTitle}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

const DataTable: React.FC<{ headers: string[], rows: string[][] }> = ({ headers, rows }) => (
  <div className="my-4 overflow-x-auto">
    <table className="min-w-full divide-y divide-border">
      <thead className="bg-muted/50">
        <tr>
          {headers.map((header, index) => (
            <th key={index} scope="col" className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-card divide-y divide-border">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-3 whitespace-nowrap text-sm text-card-foreground">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function ComprehensiveGuidePage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Comprehensive Guide' }]} />
      
      <header className="pb-6 border-b">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          CPP41419 Certificate IV in Real Estate Practice - Complete Australian Guide
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Welcome to the most comprehensive resource for understanding the CPP41419 Certificate IV in Real Estate Practice across Australia.
        </p>
      </header>

      <Card className="shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
          <SpecialBlock type="abstract" title="Navigation Hub">
            This comprehensive guide covers everything you need to know about CPP41419 across Australia. Use the sections below to jump to specific topics:
            <ul className="list-disc pl-5 mt-2">
              <li><Link href="#course-history" className="text-primary hover:underline">Course History</Link></li>
              <li><Link href="#course-overview" className="text-primary hover:underline">Course Overview</Link></li>
              <li><Link href="#state-requirements" className="text-primary hover:underline">State Requirements</Link></li>
              <li><Link href="#cost-breakdown" className="text-primary hover:underline">Cost Breakdown</Link></li>
              <li><Link href="#provider-selection" className="text-primary hover:underline">Provider Selection</Link></li>
              <li><Link href="#career-outcomes" className="text-primary hover:underline">Career Outcomes</Link></li>
              <li><Link href="#industry-outlook" className="text-primary hover:underline">Industry Outlook</Link></li>
              <li><Link href="#getting-started" className="text-primary hover:underline">Getting Started</Link></li>
              <li><Link href="#faq-guide" className="text-primary hover:underline">FAQ</Link></li>
              <li><Link href="#related-resources" className="text-primary hover:underline">Related Resources</Link></li>
            </ul>
          </SpecialBlock>
          <p>Whether you're considering a career change, just finishing school, or looking to upgrade your qualifications, this guide provides everything you need to make informed decisions about your real estate education journey.</p>
          <SpecialBlock type="info" title="Source Authority">
            All information in this guide has been verified against current regulatory requirements and industry standards. For the most up-to-date provider comparisons and licensing information, visit <Link href="https://cpp41419.com.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au</Link>.
          </SpecialBlock>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-xl" id="course-history">
        <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><Clock className="mr-2 h-6 w-6 text-primary" /> Course History and Evolution</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
          <SpecialBlock type="timeline" title="CPP41419 Development">
            <strong>2001-2018: CPP40307 Era</strong> → Foundation qualification with basic training <br />
            <strong>2019: CPP41419 Introduction</strong> → Enhanced digital and ethical components <br />
            <strong>2020-2025: Industry Modernization</strong> → PropTech integration and sustainability focus
          </SpecialBlock>
          <p>The CPP41419 Certificate IV in Real Estate Practice represents the latest iteration of Australia's nationally recognized real estate qualification, introduced in 2019 to replace the outdated CPP40307. This evolution reflected the industry's need for modern practitioners equipped with digital skills, enhanced ethical frameworks, and contemporary compliance knowledge.</p>
          
          <h3>Key Historical Milestones</h3>
          <MermaidDiagram 
            id="cpp41419-evolution-timeline"
            title="CPP41419 Evolution Timeline" 
            code={`
timeline
    title CPP41419 Evolution Timeline
    2001 : CPP40307 Introduced
         : Basic property law focus
    2010 : Digital integration begins
         : Online delivery emerges
    2019 : CPP41419 Launch
         : Enhanced ethical requirements
         : Digital marketing components
    2025 : Current Standard
         : PropTech awareness
         : Sustainability emphasis
          `} />
          
          <h4>2001-2018: CPP40307 Era</h4>
          <ul className="list-disc pl-5">
            <li>Foundation qualification for real estate licensing</li>
            <li>Basic property law and sales training</li>
            <li>Limited digital component</li>
            <li>State-specific variations in implementation</li>
          </ul>

          <h4>2019: CPP41419 Introduction</h4>
          <ul className="list-disc pl-5">
            <li>Enhanced ethical practice requirements</li>
            <li>Digital marketing and communication profiles</li>
            <li>Strengthened trust account management</li>
            <li>Standardized national approach</li>
          </ul>

          <h4>2020-2025: Industry Modernization</h4>
          <ul className="list-disc pl-5">
            <li>Integration of PropTech awareness</li>
            <li>Consumer protection emphasis</li>
            <li>Environmental sustainability considerations</li>
            <li>Remote work capability development</li>
          </ul>
          <SpecialBlock type="important" title="Transition Impact">
            The change from CPP40307 to CPP41419 addressed critical industry gaps in technology integration, consumer protection, regulatory compliance, and professional standards.
          </SpecialBlock>

          <h3>Why the Change?</h3>
          <SpecialBlock type="check" title="Industry Modernization Drivers">
            <ul className="list-disc pl-5">
              <li><strong>Technology Integration</strong>: Modern real estate requires digital literacy for CRM systems, online marketing, and virtual inspections. (Source: <Link href="https://cpp41419.com.au/digital-skills" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/digital-skills</Link>)</li>
              <li><strong>Consumer Protection</strong>: Enhanced focus on ethical practice and transparent communication. (Source: <Link href="https://cpp41419.com.au/consumer-protection" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/consumer-protection</Link>)</li>
              <li><strong>Regulatory Compliance</strong>: Strengthened understanding of evolving state and federal regulations. (Source: <Link href="https://cpp41419.com.au/compliance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/compliance</Link>)</li>
              <li><strong>Professional Standards</strong>: Higher expectations for continuing professional development. (Source: <Link href="https://cpp41419.com.au/cpd-requirements" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/cpd-requirements</Link>)</li>
            </ul>
          </SpecialBlock>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-xl" id="course-overview">
        <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><BookOpen className="mr-2 h-6 w-6 text-primary" /> Course Overview</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
          <SpecialBlock type="info" title="National Recognition">
            CPP41419 is recognized across all Australian states and territories, though each jurisdiction has specific licensing requirements and processes. (Source: <Link href="https://cpp41419.com.au/national-recognition" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/national-recognition</Link>)
          </SpecialBlock>
          <SpecialBlock type="example" title="Quick Course Facts">
             <ul className="list-disc pl-5">
              <li><strong>Duration</strong>: 3-8 months</li>
              <li><strong>Assessment</strong>: Project-based (no exams)</li>
              <li><strong>Delivery</strong>: Online, classroom, or blended</li>
              <li><strong>Recognition</strong>: All Australian states and territories</li>
            </ul>
          </SpecialBlock>
          <h3>What is CPP41419?</h3>
          <p>The Certificate IV in Real Estate Practice is Australia's mandatory qualification for anyone seeking to work as a licensed real estate agent. (Source: <Link href="https://cpp41419.com.au/what-is-cpp41419" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/what-is-cpp41419</Link>) This nationally accredited course covers essential skills in:</p>
          <SpecialBlock type="abstract" title="Core Learning Areas">
            <pre className="text-sm p-2 bg-muted/50 rounded"><code>
┌─ Property Sales and Marketing
├─ Residential and Commercial Leasing  
├─ Trust Account Management
├─ Legal and Ethical Compliance
├─ Client Relationship Management
└─ Digital Communication Strategies
            </code></pre>
          </SpecialBlock>

          <h3>National Standards and Accreditation</h3>
            <SpecialBlock type="important" title="Ensuring Quality and Consistency">
              The CPP41419 qualification adheres to strict national standards to ensure quality and consistency across Australia:
              <ul className="list-disc pl-5 mt-2">
                <li>
                  <strong>ASQA (Australian Skills Quality Authority)</strong>: ASQA is the national regulator for Australia’s vocational education and training (VET) sector. Registered Training Organisations (RTOs) delivering CPP41419 must be registered with ASQA and meet rigorous standards related to training delivery, assessment practices, student support, and governance. This ensures that the qualification you receive is from a reputable provider meeting national quality benchmarks. (Source: <Link href="https://www.asqa.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">asqa.gov.au</Link>)
                </li>
                <li>
                  <strong>AQF Level 4 (Australian Qualifications Framework)</strong>: The Certificate IV in Real Estate Practice is an AQF Level 4 qualification. This signifies that graduates possess theoretical and practical knowledge and skills for specialized and/or skilled work and/or learning. AQF Level 4 qualifications prepare individuals to undertake skilled work, provide leadership and guidance to others, and solve a range of problems with some complexity. It indicates a capability to work independently and take responsibility for their own outputs in work and learning. (Source: <Link href="https://www.aqf.edu.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aqf.edu.au</Link>)
                </li>
              </ul>
              Understanding these frameworks helps confirm the credibility and standard of the CPP41419 qualification.
            </SpecialBlock>

          <h3>Course Structure</h3>
          <SpecialBlock type="note" title="Unit Breakdown">
             <strong>Total Units</strong>: 18 (5 Core + 13 Electives) (Source: <Link href="https://cpp41419.com.au/course-structure" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/course-structure</Link>)<br/>
             <strong>Duration</strong>: 3-8 months (varies by provider and study mode)<br/>
             <strong>Delivery</strong>: Online, classroom, or blended learning options<br/>
             <strong>Assessment</strong>: Project-based assignments (no exams)
          </SpecialBlock>
          <h4>Core Units (Mandatory for All Students)</h4>
          <MermaidDiagram 
            id="core-unit-map"
            title="Core Unit Map" 
            code={`
graph LR
    A[CPPREP4001<br/>Professional Practice] --> B[CPPREP4002<br/>Ethical Practice]
    B --> C[CPPREP4003<br/>Legislation]
    C --> D[CPPREP4004<br/>Marketing & Communication]
    D --> E[CPPREP4005<br/>Trust Accounts]
          `} />
          <ol className="list-decimal pl-5">
            <li><strong>CPPREP4001</strong>: Prepare for professional practice in real estate</li>
            <li><strong>CPPREP4002</strong>: Access and interpret ethical practice in real estate</li>
            <li><strong>CPPREP4003</strong>: Access and interpret legislation in real estate</li>
            <li><strong>CPPREP4004</strong>: Establish marketing and communication profiles in real estate</li>
            <li><strong>CPPREP4005</strong>: Prepare to work with real estate trust accounts</li>
          </ol>
          <h4>Common Elective Units</h4>
          <SpecialBlock type="example" title="Popular Electives">
            <ul className="list-disc pl-5">
              <li><strong>CPPREP4006</strong>: Lease residential property</li>
              <li><strong>CPPREP4007</strong>: Manage tenancy disputes and claims for compensation</li>
              <li><strong>CPPREP4008</strong>: Conduct on-site property auctions</li>
              <li><strong>CPPREP4009</strong>: Market and offer property for sale</li>
              <li><strong>CPPREP4010</strong>: Conduct property inspections</li>
            </ul>
          </SpecialBlock>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg rounded-xl" id="state-requirements">
        <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><BarChart2 className="mr-2 h-6 w-6 text-primary" /> State-by-State Licensing Summary</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
          <SpecialBlock type="abstract" title="Navigation Map (State Guides)">
            Click to jump to detailed state guides (Note: Links go to external site for now):
            <ul className="list-disc pl-5 mt-2">
              <li><Link href="https://cpp41419.com.au/nsw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NSW - Two-Step Progression</Link></li>
              <li><Link href="https://cpp41419.com.au/vic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VIC - Agent's Representative Path</Link></li>
              <li><Link href="https://cpp41419.com.au/qld" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">QLD - Registration to Salesperson</Link></li>
              <li><Link href="https://cpp41419.com.au/wa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WA - Triennial System</Link></li>
              <li><Link href="https://cpp41419.com.au/sa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SA - Land and Business Agent Path</Link></li>
              <li><Link href="https://cpp41419.com.au/tas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TAS - Property Agent Registration</Link></li>
              <li><Link href="https://cpp41419.com.au/act" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ACT - Government Focus</Link></li>
              <li><Link href="https://cpp41419.com.au/nt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NT - Remote Area Considerations</Link></li>
            </ul>
          </SpecialBlock>
          <p>Each Australian state and territory has unique licensing pathways and requirements, primarily governed by state-specific legislation and regulatory bodies. While CPP41419 provides the foundational educational qualification, understanding these local nuances is critical for aspiring real estate professionals.</p>
          <SpecialBlock type="example" title="State Comparison Matrix">
            <pre className="text-sm p-2 bg-muted/50 rounded overflow-x-auto"><code>
┌─────────┬─────────────────┬─────────────────┬─────────────────┐
│ State   │ Pathway         │ Experience Req  │ Unique Feature  │
├─────────┼─────────────────┼─────────────────┼─────────────────┤
│ NSW     │ Two-Step        │ 12 months       │ Longest probation│
│ VIC     │ Single-Step     │ 18 months       │ 3-year terms    │
│ QLD     │ Two-Step        │ 12 months       │ Mandatory PI    │
│ WA      │ Single-Step     │ Varies          │ Sales/Settlement│
│ SA      │ Two-Step        │ 12-24 months    │ Strict trust    │
│ TAS     │ Single-Step     │ 12 months       │ Smallest market │
│ ACT     │ Two-Step        │ 12 months       │ Leasehold land  │
│ NT      │ Two-Step        │ 18 months       │ Remote areas    │
└─────────┴─────────────────┴─────────────────┴─────────────────┘
            </code></pre>
          </SpecialBlock>
          
          <h4>NSW - Two-Step Progression</h4>
          <SpecialBlock type="tip" title="NSW Pathway Details">
            <p>In New South Wales, the real estate licensing framework is overseen by <strong>NSW Fair Trading</strong>, operating under the <strong>Property and Stock Agents Act 2002</strong>. This legislation outlines the requirements for individuals wishing to work in the property industry, emphasizing consumer protection and professional standards.</p>
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Regulatory Body</strong>: NSW Fair Trading is responsible for licensing, compliance, and dispute resolution in the real estate sector. They ensure agents adhere to ethical practices and legal obligations.</li>
              <li><strong>Governing Legislation</strong>: The Property and Stock Agents Act 2002 (NSW) and its associated regulations dictate the conduct of real estate agents, including licensing, trust accounting, and agency agreements.</li>
              <li><strong>Step 1 - Assistant Agent</strong>: To begin, aspiring agents must complete specific entry-level units from the CPP41419 qualification to obtain a Certificate of Registration. This allows them to work under the supervision of a licensed agent.</li>
              <li><strong>Step 2 - Class 2 Agent License</strong>: After gaining 12 months of practical experience as an Assistant Agent and completing the full CPP41419 Certificate IV, individuals can apply for a Class 2 Real Estate Agent Licence. This allows for more independent practice.</li>
              <li><strong>Unique Feature</strong>: NSW is known for having one of the longest structured probationary/assistant agent periods, designed to ensure comprehensive practical experience before full licensing. (Source: <Link href="https://cpp41419.com.au/nsw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/nsw</Link>)</li>
            </ul>
            <Link href="https://cpp41419.com.au/compare/nsw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">NSW Provider Comparison</Link>
          </SpecialBlock>

          <h4>VIC - Agent's Representative Path</h4>
          <SpecialBlock type="tip" title="VIC Pathway Details">
            <p>Victoria's real estate industry is regulated by <strong>Consumer Affairs Victoria (CAV)</strong>, with the primary legislative framework being the <strong>Estate Agents Act 1980</strong>. This Act sets out the rules for estate agency practice, licensing, and conduct.</p>
            <ul className="list-disc pl-5 mt-2">
                <li><strong>Regulatory Body</strong>: Consumer Affairs Victoria (CAV) manages the licensing of estate agents and Agent's Representatives, enforces industry standards, and provides information to consumers and industry professionals.</li>
                <li><strong>Governing Legislation</strong>: The Estate Agents Act 1980 (VIC) and its regulations cover all aspects of real estate agency work, including qualifications, trust accounts, and professional conduct.</li>
                <li><strong>Agent's Representative</strong>: To work in real estate sales or property management in Victoria, individuals must first become an Agent's Representative. This requires completion of the full CPP41419 Certificate IV in Real Estate Practice *before* applying for registration with CAV.</li>
                <li><strong>Full Estate Agent Licence</strong>: To operate independently or manage an agency, an Agent's Representative needs to gain further experience and potentially complete additional qualifications (like a Diploma) to apply for a full Estate Agent Licence.</li>
                <li><strong>Unique Feature</strong>: Victoria issues licenses with 3-year terms, and there's a strong emphasis on completing the full Certificate IV qualification upfront to become an Agent's Representative. (Source: <Link href="https://cpp41419.com.au/vic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/vic</Link>)</li>
            </ul>
            <Link href="https://cpp41419.com.au/compare/vic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">VIC Provider Comparison</Link>
          </SpecialBlock>

           <h4>QLD - Registration to Salesperson</h4>
          <SpecialBlock type="tip" title="QLD Pathway Details">
            <p>In Queensland, the real estate profession is regulated by the <strong>Office of Fair Trading (OFT) Queensland</strong>. The key legislation governing property occupations is the <strong>Property Occupations Act 2014</strong>, which aims to ensure fair and ethical practices within the industry.</p>
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Regulatory Body</strong>: The Office of Fair Trading (OFT) Queensland is responsible for issuing licenses and registration certificates, monitoring compliance, and handling complaints related to property agents.</li>
              <li><strong>Governing Legislation</strong>: The Property Occupations Act 2014 (QLD) and the Property Occupations Regulation 2014 set the standards for real estate practice, including educational requirements and conduct.</li>
              <li><strong>Step 1 - Registration Certificate</strong>: New entrants typically start by obtaining a Registration Certificate as a Real Estate Salesperson or Property Manager. This requires completing a specific set of core units from the CPP41419 qualification.</li>
              <li><strong>Step 2 - Full Real Estate Agent Licence</strong>: To obtain a full Real Estate Agent Licence, which allows an individual to operate their own agency or work as a principal agent, they must complete the full CPP41419 qualification, gain relevant industry experience, and meet other eligibility criteria.</li>
              <li><strong>Unique Feature</strong>: Queensland has a notable requirement for mandatory professional indemnity insurance coverage for licensees from the outset of their careers, providing an early layer of consumer protection. (Source: <Link href="https://cpp41419.com.au/qld" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/qld</Link>)</li>
            </ul>
            <Link href="https://cpp41419.com.au/compare/qld" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">QLD Provider Comparison</Link>
          </SpecialBlock>

          <h4>WA - Triennial System</h4>
          <SpecialBlock type="tip" title="WA Pathway">
            <ul className="list-disc pl-5">
              <li><strong>Requirement</strong>: Full CPP41419 for 3-year license</li>
              <li><strong>Authority</strong>: DMIRS (Department of Mines, Industry Regulation and Safety)</li>
              <li><strong>Unique Feature</strong>: Separation of sales and settlement licensing, with distinct pathways and requirements for each specialization. (Source: <Link href="https://cpp41419.com.au/wa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/wa</Link>)</li>
            </ul>
            <Link href="https://cpp41419.com.au/compare/wa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">WA Provider Comparison</Link>
          </SpecialBlock>

          <h4>SA - Land and Business Agent Path</h4>
          <SpecialBlock type="tip" title="SA Pathway">
            <ul className="list-disc pl-5">
              <li><strong>Step 1</strong>: Registration (core units + SA specifics, e.g., understanding of local land acts)</li>
              <li><strong>Step 2</strong>: License (experience + additional requirements, often including further study or mentoring)</li>
              <li><strong>Authority</strong>: Consumer and Business Services (CBS)</li>
              <li><strong>Unique Feature</strong>: South Australia is known for its particularly strict trust account regulations and auditing requirements, ensuring high levels of financial accountability. (Source: <Link href="https://cpp41419.com.au/sa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/sa</Link>)</li>
            </ul>
            <Link href="https://cpp41419.com.au/compare/sa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">SA Provider Comparison</Link>
          </SpecialBlock>

          <h4>TAS - Property Agent Registration</h4>
          <SpecialBlock type="tip" title="TAS Pathway">
            <ul className="list-disc pl-5">
              <li><strong>Requirement</strong>: Full CPP41419 before registration as a Property Agent.</li>
              <li><strong>Authority</strong>: CBOS (Consumer, Building and Occupational Services)</li>
              <li><strong>Unique Feature</strong>: Tasmania, being a smaller market, often features significant government subsidies for vocational training, potentially making CPP41419 more accessible. The market is also characterized by close-knit industry networks. (Source: <Link href="https://cpp41419.com.au/tas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/tas</Link>)</li>
            </ul>
            <Link href="https://cpp41419.com.au/compare/tas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">TAS Provider Comparison</Link>
          </SpecialBlock>

          <h4>ACT - Government Focus</h4>
          <SpecialBlock type="tip" title="ACT Pathway">
            <ul className="list-disc pl-5">
              <li><strong>Step 1</strong>: Agent Registration (completion of prescribed units from CPP41419).</li>
              <li><strong>Step 2</strong>: Real Estate Agent License (full CPP41419, experience, and potentially further competency assessments).</li>
              <li><strong>Authority</strong>: Access Canberra (part of the ACT Government)</li>
              <li><strong>Unique Feature</strong>: The ACT operates primarily under a leasehold land tenure system, which is distinct from the freehold system prevalent in most other Australian states. Agents must have a thorough understanding of this system. (Source: <Link href="https://cpp41419.com.au/act" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/act</Link>)</li>
            </ul>
            <Link href="https://cpp41419.com.au/compare/act" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">ACT Provider Comparison</Link>
          </SpecialBlock>

          <h4>NT - Remote Area Considerations</h4>
          <SpecialBlock type="tip" title="NT Pathway">
            <ul className="list-disc pl-5">
              <li><strong>Step 1</strong>: Agent Registration (requires completion of CPP41419 and 18 months of supervised experience).</li>
              <li><strong>Step 2</strong>: Real Estate Agent License (further requirements may apply for operating independently).</li>
              <li><strong>Authority</strong>: Department of Licensing and Regulation (specific body may vary, often under Attorney-General and Justice)</li>
              <li><strong>Unique Feature</strong>: The Northern Territory market includes unique considerations such as remote area property transactions, Indigenous land tenure issues, and specific building codes adapted to tropical climates. Licensing often has a strong emphasis on these local factors. (Source: <Link href="https://cpp41419.com.au/nt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/nt</Link>)</li>
            </ul>
            <Link href="https://cpp41419.com.au/compare/nt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline block mt-2">NT Provider Comparison</Link>
          </SpecialBlock>

        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-xl" id="cost-breakdown">
        <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><DollarSign className="mr-2 h-6 w-6 text-primary" /> Cost Analysis Across Australia</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
          <SpecialBlock type="tip" title="Budget Planning">
            Course costs vary significantly by provider and location. Government subsidies can reduce costs by 50-75% for eligible students.
          </SpecialBlock>
          <SpecialBlock type="abstract" title="Cost Breakdown Dashboard">
            <pre className="text-sm p-2 bg-muted/50 rounded"><code>
Provider Types by Cost Range:
┌─ Online RTOs      → $1,495-$1,895 (Budget Option)
├─ TAFE Institutes → $2,200-$2,670 (Government Backed)
├─ Industry Bodies → $2,050-$2,950 (Industry Connected)
└─ Universities    → $2,750-$2,890 (Academic Rigor)
            </code></pre>
          </SpecialBlock>
          <h3>Course Fee Ranges by Provider Type</h3>
          <DataTable 
            headers={["Provider Type", "Cost Range", "Best For"]}
            rows={[
              ["Online RTOs", "$1,495-$1,895", "Budget-conscious, flexible schedule"],
              ["TAFE Institutes", "$2,200-$2,670", "Government backing, face-to-face learning"],
              ["Industry Bodies", "$2,050-$2,950", "Industry connections, job placement"],
              ["Universities", "$2,750-$2,890", "Academic rigor, research access"],
            ]}
          />
          <h3>Additional Licensing Costs</h3>
          <SpecialBlock type="warning" title="Hidden Costs Alert">
            <MermaidDiagram 
              id="hidden-costs-alert-diagram"
              code={`
graph TD
    A[Course Fees] --> B[Criminal Check $45-$56]
    B --> C[License Application $145-$675]
    C --> D[Professional Insurance $300-$600/year]
    D --> E[CPD Requirements $200-$600/year]
    
    style A fill:#e1f5fe
    style B fill:#fff3e0
    style C fill:#fff3e0
    style D fill:#ffebee
    style E fill:#ffebee
            `} />
          </SpecialBlock>
          <DataTable 
            headers={["Expense", "Range", "Notes"]}
            rows={[
              ["Criminal History Check", "$45-$56", "Required in all states"],
              ["License Application", "$145-$675", "Varies significantly by state"],
              ["Professional Indemnity Insurance", "$300-$600/year", "Mandatory in most states"],
              ["CPD Requirements", "$200-$600/year", "Ongoing professional development"],
            ]}
          />
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-xl" id="provider-selection">
        <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><Users className="mr-2 h-6 w-6 text-primary" /> Provider Comparison Framework</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
          <SpecialBlock type="abstract" title="Decision Matrix">
            Use these criteria to evaluate CPP41419 providers:
            <pre className="text-sm p-2 bg-muted/50 rounded"><code>
Study Mode → Support Services → State Specialization
     ↓              ↓                    ↓
Flexibility    Job Placement      Local Knowledge
Interaction    Trainer Access     Market Insights
Schedule       Study Materials    Licensing Support
            </code></pre>
          </SpecialBlock>
          <p>When choosing your CPP41419 provider, consider these factors:</p>
          <h4>Study Mode Preferences</h4>
          <SpecialBlock type="note" title="Learning Styles">
            <ul className="list-disc pl-5">
              <li><strong>100% Online</strong>: Maximum flexibility, self-paced learning</li>
              <li><strong>Blended</strong>: Combines online theory with practical workshops</li>
              <li><strong>Classroom</strong>: Face-to-face interaction, structured schedule</li>
            </ul>
          </SpecialBlock>
          <h4>Support Services</h4>
          <SpecialBlock type="check" title="Quality Indicators">
            <ul className="list-disc pl-5">
              <li><strong>Trainer Access</strong>: Email, phone, or video consultation availability</li>
              <li><strong>Job Placement</strong>: Industry connections and employment assistance</li>
              <li><strong>Study Materials</strong>: Digital textbooks, video content, practice assessments</li>
            </ul>
          </SpecialBlock>
          <h4>State Specialization</h4>
          <SpecialBlock type="important" title="Local Advantage">
            <ul className="list-disc pl-5">
              <li><strong>Local Knowledge</strong>: Understanding of state-specific legislation</li>
              <li><strong>Market Insights</strong>: Regional property trends and career opportunities</li>
              <li><strong>Licensing Support</strong>: Guidance through state registration processes</li>
            </ul>
          </SpecialBlock>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-xl" id="career-outcomes">
        <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><Briefcase className="mr-2 h-6 w-6 text-primary" /> Career Pathways and Opportunities</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
           <SpecialBlock type="abstract" title="Career Progression Map">
            <MermaidDiagram 
              id="career-progression-map"
              code={`
graph TD
    A[CPP41419 Completion] --> B[Entry-Level Positions]
    B --> C[Sales Agent $50-70k]
    B --> D[Property Manager $45-65k]
    B --> E[Leasing Consultant $42-58k]
    
    C --> F[Experienced Roles]
    D --> F
    E --> F
    
    F --> G[Senior Sales Agent $80-150k+]
    F --> H[Property Development $90-200k+]
    F --> I[Commercial Specialist $100-300k+]
    
    G --> J[Leadership Positions]
    H --> J
    I --> J
    
    J --> K[Agency Principal $120-500k+]
    J --> L[Property Investment Advisor $100-250k+]
    J --> M[Real Estate Educator $80-120k]
    
    style A fill:#e8f5e8
    style F fill:#fff3e0
    style J fill:#ffebee
            `} />
          </SpecialBlock>
          <h4>Entry-Level Positions</h4>
          <SpecialBlock type="success" title="Starting Salaries">
            <ul className="list-disc pl-5">
              <li><strong>Sales Agent</strong>: $50,000-$70,000 annually</li>
              <li><strong>Property Manager</strong>: $45,000-$65,000 annually</li>
              <li><strong>Leasing Consultant</strong>: $42,000-$58,000 annually</li>
            </ul>
          </SpecialBlock>
          <h4>Experienced Roles</h4>
          <SpecialBlock type="example" title="Mid-Career Options">
             <ul className="list-disc pl-5">
                <li><strong>Senior Sales Agent</strong>: $80,000-$150,000+ annually</li>
                <li><strong>Property Development</strong>: $90,000-$200,000+ annually</li>
                <li><strong>Commercial Specialist</strong>: $100,000-$300,000+ annually</li>
            </ul>
          </SpecialBlock>
          <h4>Leadership Positions</h4>
          <SpecialBlock type="tip" title="Senior Opportunities">
            <ul className="list-disc pl-5">
              <li><strong>Agency Principal</strong>: $120,000-$500,000+ annually</li>
              <li><strong>Property Investment Advisor</strong>: $100,000-$250,000+ annually</li>
              <li><strong>Real Estate Educator</strong>: $80,000-$120,000 annually</li>
            </ul>
          </SpecialBlock>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-xl" id="industry-outlook">
        <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><TrendingUp className="mr-2 h-6 w-6 text-primary" /> Industry Outlook and Future Trends</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
            <SpecialBlock type="abstract" title="Market Intelligence">
              <pre className="text-sm p-2 bg-muted/50 rounded"><code>
Growth Indicators:
┌─ National Employment Growth → 6.8% through 2026
├─ Technology Integration    → Increasing digital skills demand
├─ Sustainability Focus     → Green building expertise
└─ Remote Work Capability   → Virtual transaction skills
              </code></pre>
            </SpecialBlock>
            <h4>Market Growth Projections</h4>
            <SpecialBlock type="success" title="Positive Outlook">
              <ul className="list-disc pl-5">
                <li><strong>National Employment Growth</strong>: 6.8% projected increase through 2026</li>
                <li><strong>Technology Integration</strong>: Increasing demand for digital skills</li>
                <li><strong>Sustainability Focus</strong>: Growing emphasis on energy efficiency and environmental compliance</li>
              </ul>
            </SpecialBlock>
            <h4>Emerging Specializations</h4>
            <SpecialBlock type="example" title="Future Opportunities">
              <ul className="list-disc pl-5">
                <li><strong>PropTech Integration</strong>: Technology-driven property solutions</li>
                <li><strong>Sustainable Development</strong>: Green building and energy efficiency expertise</li>
                <li><strong>Remote Work Facilitation</strong>: Virtual inspections and digital transactions</li>
              </ul>
            </SpecialBlock>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-xl" id="getting-started">
        <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><Award className="mr-2 h-6 w-6 text-primary" /> Getting Started: Your Next Steps</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
           <SpecialBlock type="abstract" title="Action Plan">
            <MermaidDiagram 
              id="action-plan-diagram"
              code={`
graph LR
    A[1. Choose State] --> B[2. Select Provider]
    B --> C[3. Check Subsidies]
    C --> D[4. Plan Timeline]
    D --> E[5. Prepare for Success]
    
    style A fill:#e8f5e8
    style B fill:#e1f5fe
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#ffebee
            `} />
          </SpecialBlock>
          <h4>1. Choose Your State</h4>
          <SpecialBlock type="note" title="Location Planning">
            Review the specific licensing requirements for your intended practice location.
          </SpecialBlock>
          <h4>2. Select Your Provider</h4>
          <SpecialBlock type="tip" title="Provider Selection">
            Compare costs, study modes, and support services based on your preferences.
          </SpecialBlock>
          <h4>3. Check Eligibility for Subsidies</h4>
          <SpecialBlock type="success" title="Funding Options">
            Investigate government funding options in your state to reduce course costs.
          </SpecialBlock>
          <h4>4. Plan Your Timeline</h4>
          <SpecialBlock type="example" title="Schedule Planning">
            Consider work commitments and target licensing dates when selecting course duration.
          </SpecialBlock>
          <h4>5. Prepare for Success</h4>
          <SpecialBlock type="check" title="Technical Requirements">
            Ensure reliable internet access for online study and basic computer skills.
          </SpecialBlock>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-xl" id="faq-guide">
        <CardHeader><CardTitle className="text-2xl font-semibold">Frequently Asked Questions (Guide Specific)</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
          <SpecialBlock type="question" title="Can I practice in multiple states with one qualification?">
            CPP41419 is nationally recognized, but each state requires separate licensing applications with state-specific requirements and fees.
          </SpecialBlock>
          <SpecialBlock type="question" title="How long does it take to start earning as a real estate agent?">
            Most agents secure their first sale within 2-4 months of licensing, though this varies significantly by location and market conditions.
          </SpecialBlock>
          <SpecialBlock type="question" title="Is previous sales experience necessary?">
            No formal prerequisites exist for CPP41419 enrollment. However, sales, customer service, or communication experience can be advantageous.
          </SpecialBlock>
          <SpecialBlock type="question" title="What happens if I fail an assessment?">
            Most providers allow 2-3 retake attempts per unit. Additional fees typically apply for reassessment.
          </SpecialBlock>
          <SpecialBlock type="question" title="Can I upgrade from CPP40307 to CPP41419?">
            CPP40307 expired in 2019. Current holders must complete CPP41419 for new licensing applications.
          </SpecialBlock>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg rounded-xl" id="related-resources">
        <CardHeader><CardTitle className="text-2xl font-semibold">Related Resources & Citations</CardTitle></CardHeader>
        <CardContent className="space-y-4 prose max-w-none dark:prose-invert">
            <SpecialBlock type="abstract" title="Related Resources">
                <ul className="list-disc pl-5">
                    <li><Link href="https://cpp41419.com.au/nsw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NSW CPP41419 Guide</Link> - Detailed NSW licensing pathway</li>
                    <li><Link href="https://cpp41419.com.au/vic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">VIC CPP41419 Guide</Link> - Victoria-specific requirements</li>
                    <li><Link href="https://cpp41419.com.au/qld" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">QLD CPP41419 Guide</Link> - Queensland registration process</li>
                    <li><Link href="https://cpp41419.com.au/compare" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Provider Comparison Tool</Link> - Interactive provider selector</li>
                    <li><Link href="https://cpp41419.com.au/calculator" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cost Calculator</Link> - Estimate your total education investment</li>
                </ul>
            </SpecialBlock>
            <h3>Citations & Sources</h3>
            <p>All information in this guide has been sourced from cpp41419.com.au and verified against current regulatory requirements:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li><strong>Digital Skills in Modern Real Estate:</strong> <Link href="https://cpp41419.com.au/digital-skills" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/digital-skills</Link></li>
              <li><strong>Consumer Protection in Real Estate Education:</strong> <Link href="https://cpp41419.com.au/consumer-protection" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/consumer-protection</Link></li>
              <li><strong>Regulatory Compliance Overview:</strong> <Link href="https://cpp41419.com.au/compliance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/compliance</Link></li>
              <li><strong>Professional Development Requirements:</strong> <Link href="https://cpp41419.com.au/cpd-requirements" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/cpd-requirements</Link></li>
              <li><strong>National Recognition Framework:</strong> <Link href="https://cpp41419.com.au/national-recognition" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/national-recognition</Link></li>
              <li><strong>What is CPP41419?:</strong> <Link href="https://cpp41419.com.au/what-is-cpp41419" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/what-is-cpp41419</Link></li>
              <li><strong>CPP41419 Units and Structure:</strong> <Link href="https://cpp41419.com.au/course-structure" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/course-structure</Link></li>
              <li><strong>NSW Licensing Pathway:</strong> <Link href="https://cpp41419.com.au/nsw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/nsw</Link></li>
              <li><strong>Victoria Agent's Representative Guide:</strong> <Link href="https://cpp41419.com.au/vic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/vic</Link></li>
              <li><strong>Queensland Registration Process:</strong> <Link href="https://cpp41419.com.au/qld" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/qld</Link></li>
              <li><strong>Western Australia Triennial System:</strong> <Link href="https://cpp41419.com.au/wa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/wa</Link></li>
              <li><strong>South Australia Trust Account Regulations:</strong> <Link href="https://cpp41419.com.au/sa" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/sa</Link></li>
              <li><strong>Tasmania Property Agent Registration:</strong> <Link href="https://cpp41419.com.au/tas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/tas</Link></li>
              <li><strong>ACT Leasehold System Guide:</strong> <Link href="https://cpp41419.com.au/act" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/act</Link></li>
              <li><strong>Northern Territory Remote Area Practice:</strong> <Link href="https://cpp41419.com.au/nt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/nt</Link></li>
            </ol>
            <h4 className="mt-4">Additional Resources:</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Provider Database:</strong> <Link href="https://cpp41419.com.au/providers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/providers</Link></li>
                <li><strong>Cost Analysis Tool:</strong> <Link href="https://cpp41419.com.au/costs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/costs</Link></li>
                <li><strong>Career Pathways Guide:</strong> <Link href="https://cpp41419.com.au/careers" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/careers</Link></li>
                <li><strong>FAQ Database:</strong> <Link href="https://cpp41419.com.au/faq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/faq</Link></li>
                <li><strong>Industry Updates:</strong> <Link href="https://cpp41419.com.au/news" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au/news</Link></li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground"><em>This guide represents the most current information available as of May 2025. Licensing requirements and provider details may change. Always verify specific requirements with your state licensing authority before enrollment. For real-time updates and the latest provider information, visit <Link href="https://cpp41419.com.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">cpp41419.com.au</Link>.</em></p>
        </CardContent>
      </Card>

    </div>
  );
}
