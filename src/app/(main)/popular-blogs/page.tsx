
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/core/Breadcrumbs';
import { ArrowRight, Rss } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Popular Real Estate Blogs & Articles | CPP41419 Q&A',
  description: 'Discover insightful articles and blog posts on real estate practice, market trends, and career development related to CPP41419.',
  keywords: ['real estate blog', 'property articles', 'real estate insights', 'CPP41419 career', 'market trends Australia'],
};

interface BlogPostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  href?: string; // Optional link for the blog post
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, description, imageUrl, imageHint, href }) => (
  <Card className="flex flex-col overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
    <div className="relative w-full h-48">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        data-ai-hint={imageHint}
      />
    </div>
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-sm line-clamp-3">{description}</CardDescription>
    </CardContent>
    <CardFooter>
      <Button asChild variant="outline" className="w-full group">
        <Link href={href || "#"} target={href ? "_blank" : "_self"} rel={href ? "noopener noreferrer" : ""}>
          Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

export default function PopularBlogsPage() {
  const blogPosts = [
    {
      title: "Navigating Your First Year as a Real Estate Agent",
      description: "Tips and tricks for surviving and thriving in your initial year in the competitive real estate market. Learn how to build your network and close your first deals.",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "new agent office",
      href: "https://cpp41419.com.au/blog/first-year-agent" // Example external link
    },
    {
      title: "Understanding the Latest PropTech Innovations",
      description: "An overview of cutting-edge technologies transforming the property industry, from AI-powered valuations to virtual reality tours.",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "proptech innovation interface",
    },
    {
      title: "Mastering Digital Marketing for Real Estate in 2025",
      description: "Essential digital marketing strategies for agents, including social media engagement, SEO for listings, and effective email campaigns.",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "digital marketing real estate",
    },
    {
      title: "The Future of Sustainable Housing in Australia",
      description: "Exploring trends in eco-friendly building practices, green certifications, and how they impact property values and buyer preferences.",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "sustainable housing modern",
    },
  ];

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Popular Blogs' }]} />
      
      <header className="pb-6 border-b">
        <h1 className="text-4xl font-bold tracking-tight text-foreground flex items-center">
          <Rss className="mr-3 h-8 w-8 text-primary" /> Popular Real Estate Blogs & Articles
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Stay updated with the latest insights, trends, and advice from the real estate world.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            imageHint={post.imageHint}
            href={post.href}
          />
        ))}
      </div>

      <Card className="mt-8 bg-accent/10 border-accent/30 rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl flex items-center font-semibold">
            Contribute to Our Blog
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2 text-sm text-foreground/90 space-y-2">
          <p>Have an interesting article or insight you'd like to share? We are always looking for fresh perspectives on the real estate industry, especially related to CPP41419 and career development.</p>
          <Button variant="secondary" asChild>
            <Link href="/contact-us"> {/* Assuming a contact page might exist or be created */}
              Submit Your Article Idea
            </Link>
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}
