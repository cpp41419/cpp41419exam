import { useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { RocketIcon, CheckIcon, LightningBoltIcon, UpdateIcon } from "@radix-ui/react-icons";
import { categories } from '../data/categories';

let hasMissing = false;

categories.forEach((category) => {
  category.questions.forEach((q) => {
    if (!q.answer || q.answer.trim() === '') {
      console.error(
        `Missing answer in category "${category.title}" for question: "${q.question}"`
      );
      hasMissing = true;
    }
  });
});

if (hasMissing) {
  console.error('Error: One or more questions are missing answers.');
  process.exit(1);
} else {
  console.log('Success: All questions have answers.');
}

export default function CPP41419Guide() {
  const formRef = useRef(null);
  const [formState, setFormState] = useState("form"); // "form" | "success"
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", status: "" });

  // Scroll to form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      formRef.current?.querySelector("input[name='firstName']")?.focus();
    }, 500);
  };

  // Handle form input
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
      // Here you would integrate with your backend/CRM/analytics
    }, 2000);
  };

  return (
    <div className="antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-3 bg-white bg-opacity-20 p-2 rounded-lg">
                {/* Home SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
                </svg>
              </div>
              <div>
                <div className="font-bold">CPP41419 NSW Guide</div>
                <div className="text-xs opacity-90">FREE Download</div>
              </div>
            </div>
            <Button
              className="bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors"
              onClick={scrollToForm}
            >
              Get Free Guide
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Lead Capture */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Value Proposition */}
              <div>
                <div className="mb-4">
                  <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold">
                    🎯 FREE INSTANT DOWNLOAD
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Get Your <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Complete CPP41419 Guide</span> for NSW
                </h1>
                <p className="text-xl mb-6 text-blue-100">
                  Stop researching. Start succeeding. Get everything you need to choose the right real estate training provider in one comprehensive guide.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                      <CheckIcon className="text-white h-4 w-4" />
                    </div>
                    <span className="font-semibold">Complete provider comparison with pricing</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                      <CheckIcon className="text-white h-4 w-4" />
                    </div>
                    <span className="font-semibold">NSW licensing requirements checklist</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                      <CheckIcon className="text-white h-4 w-4" />
                    </div>
                    <span className="font-semibold">Career pathway roadmap & salary guide</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg mr-2">⭐⭐⭐⭐⭐</span>
                    <span>4.8/5 (127 reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>2,847 downloads</span>
                  </div>
                </div>
              </div>
              {/* Right: Lead Capture Form */}
              <div ref={formRef} className="lead-form pulse-border p-8 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 border-2 border-blue-500">
                {formState === "form" || formState === "loading" ? (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        Download Your Free Guide Now
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Instant access • No spam • Unsubscribe anytime
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          required
                          placeholder="First Name*"
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.firstName}
                          onChange={handleInput}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          required
                          placeholder="Last Name*"
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={formData.lastName}
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address*"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.email}
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <select
                        name="status"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.status}
                        onChange={handleInput}
                      >
                        <option value="">Current situation (optional)</option>
                        <option value="researching">Just starting research</option>
                        <option value="comparing">Comparing providers</option>
                        <option value="ready">Ready to enroll</option>
                        <option value="working">Already in real estate</option>
                      </select>
                    </div>
                    <div className="urgency-indicator p-3 rounded-lg mb-4 bg-red-50 border-l-4 border-red-500">
                      <div className="flex items-center text-sm">
                        <span className="text-red-500 mr-2">🔥</span>
                        <span className="font-semibold text-red-700 dark:text-red-400">
                          Limited time: Normally $97, FREE until Sunday
                        </span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold py-4 px-6 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
                      disabled={formState === "loading"}
                    >
                      {formState === "loading" ? "📤 Sending..." : "📚 GET MY FREE GUIDE NOW"}
                    </button>
                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                      🔒 Your information is secure. We never share your details.
                    </p>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-6 rounded-lg mb-4">
                      <div className="text-4xl mb-3">🎉</div>
                      <h4 className="font-bold text-lg mb-2">Success! Check Your Email</h4>
                      <p className="text-sm">Your CPP41419 NSW Guide is on its way. Check your inbox (and spam folder) in the next few minutes.</p>
                    </div>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
                      onClick={() => alert("📄 Your CPP41419 NSW Guide would download now!")}
                    >
                      Download Backup Copy
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="social-proof p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2,847</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Downloads This Month</div>
              </div>
              <div className="social-proof p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.8/5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
              <div className="social-proof p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$3,200</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Student Savings</div>
              </div>
              <div className="social-proof p-4 rounded-lg bg-blue-50 border-l-4 border-blue-500">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">86%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Job Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don't Let Another Week Pass Without Taking Action
          </h2>
          <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
            Every day you wait is another day your real estate career isn't starting. Get the information you need to make the right choice today.
          </p>
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            onClick={scrollToForm}
          >
            📖 Download Your Free Guide
          </Button>
        </div>
      </section>

      {/* Main Guide Content (from your original React code) */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <Card className="bg-gradient-to-r from-blue-900 to-blue-700 text-white border-0">
          <CardHeader>
            <Badge variant="secondary" className="mb-4 w-fit bg-blue-600 text-white">
              OFFICIAL 2025 GUIDE
            </Badge>
            <CardTitle className="text-4xl font-bold tracking-tight">
              2025 CPP41419 - Certificate IV in Real Estate Practice
            </CardTitle>
            <CardDescription className="text-blue-100">
              State-by-State Licensing Handbook | Updated May 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              <RocketIcon className="mr-2" />
              Download Full Guide
            </Button>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <CheckIcon />
                </div>
                <CardTitle>Digital PropTech</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Virtual inspections, AI tools, and blockchain transactions integrated throughout the 2025 curriculum.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <LightningBoltIcon />
                </div>
                <CardTitle>Flexible Pathways</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Choose from online, hybrid, or intensive classroom formats to suit your schedule.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                  <UpdateIcon />
                </div>
                <CardTitle>2025 Updates</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                New sustainability modules and cybersecurity requirements for modern practice.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* State Licensing */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-2xl">State Licensing Roadmaps</CardTitle>
            <CardDescription>2025 requirements by jurisdiction</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>State</TableHead>
                  <TableHead>Pathway</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead>Cost Range</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">NSW</TableCell>
                  <TableCell>2-step (Registration → License)</TableCell>
                  <TableCell>12 months</TableCell>
                  <TableCell>$1,495-$2,670</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">VIC</TableCell>
                  <TableCell>Direct licensing</TableCell>
                  <TableCell>18 months</TableCell>
                  <TableCell>$1,595-$2,950</TableCell>
                </TableRow>
                {/* Add other states */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Provider Comparison */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">2025 Provider Comparison</CardTitle>
            <CardDescription>Top-rated training options</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Provider</TableHead>
                  <TableHead>Delivery</TableHead>
                  <TableHead>Cost</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Success Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">TAFE NSW</TableCell>
                  <TableCell>Blended</TableCell>
                  <TableCell>$2,670</TableCell>
                  <TableCell>6 months</TableCell>
                  <TableCell>83%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Open Colleges</TableCell>
                  <TableCell>Online</TableCell>
                  <TableCell>$1,495</TableCell>
                  <TableCell>3-4 months</TableCell>
                  <TableCell>74%</TableCell>
                </TableRow>
                {/* Add other providers */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Real Estate Career?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            The 2025 CPP41419 - Certificate IV in Real Estate Practice is your gateway to success.
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 px-8 py-6 text-lg" onClick={scrollToForm}>
            Enroll Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Get Your Free CPP41419 NSW Guide</h3>
            <p className="text-gray-300 mb-4">Join 2,847+ students who've downloaded our comprehensive guide</p>
            <Button
              className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors"
              onClick={scrollToForm}
            >
              Download Now
            </Button>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 CPP41419 NSW Guide | Helping Students Choose the Right Training Provider</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
