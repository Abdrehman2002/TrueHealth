import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Shield,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const featuredPost = {
    title: "The Future of Revenue Cycle Management: Trends to Watch in 2024",
    excerpt: "Explore the latest trends and technologies shaping the RCM landscape, from AI-powered automation to enhanced patient engagement strategies.",
    category: "Industry Trends",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  };

  const blogPosts = [
    {
      id: 1,
      title: "5 Common Medical Billing Mistakes That Cost Practices Money",
      excerpt: "Learn about the most frequent billing errors and how to prevent them from impacting your practice's revenue.",
      category: "Best Practices",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Understanding Prior Authorization: A Complete Guide",
      excerpt: "Navigate the complex world of prior authorizations with our comprehensive guide for healthcare providers.",
      category: "Education",
      date: "December 8, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "How to Improve Patient Collections in Your Practice",
      excerpt: "Strategies for enhancing patient payment processes while maintaining positive patient relationships.",
      category: "Patient Experience",
      date: "December 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "ICD-11 Implementation: What Healthcare Providers Need to Know",
      excerpt: "Prepare your practice for the upcoming transition to ICD-11 with our detailed implementation guide.",
      category: "Compliance",
      date: "December 3, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "The ROI of Outsourcing Revenue Cycle Management",
      excerpt: "Discover how outsourcing RCM can improve your practice's financial performance and operational efficiency.",
      category: "Business Strategy",
      date: "November 30, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Credentialing Best Practices for New Providers",
      excerpt: "A step-by-step guide to credentialing that helps new providers get enrolled with payers quickly and efficiently.",
      category: "Credentialing",
      date: "November 28, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { name: "All Posts", count: 25, icon: FileText },
    { name: "Best Practices", count: 8, icon: TrendingUp },
    { name: "Compliance", count: 6, icon: Shield },
    { name: "Industry Trends", count: 5, icon: TrendingUp },
    { name: "Education", count: 4, icon: FileText },
    { name: "Patient Experience", count: 2, icon: FileText }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Best Practices": "bg-blue-100 text-blue-800",
      "Compliance": "bg-red-100 text-red-800",
      "Industry Trends": "bg-purple-100 text-purple-800",
      "Education": "bg-green-100 text-green-800",
      "Patient Experience": "bg-yellow-100 text-yellow-800",
      "Business Strategy": "bg-indigo-100 text-indigo-800",
      "Credentialing": "bg-pink-100 text-pink-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              RCM Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Stay informed with the latest trends, best practices, and insights in healthcare revenue cycle management
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Featured Article
            </h2>
          </div>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div 
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredPost.image})` }}
              />
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className={getCategoryColor(featuredPost.category)}>
                    {featuredPost.category}
                  </Badge>
                  <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-trust-blue mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <Button variant="medical" size="lg">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-trust-blue mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      className="w-full justify-between text-left hover:bg-accent/10"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="h-4 w-4" />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">({category.count})</span>
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-trust-blue mb-6">
                  Latest Articles
                </h2>
                <p className="text-xl text-muted-foreground">
                  Expert insights and practical advice for healthcare professionals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-trust-blue mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-trust-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated with RCM Insights
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, industry updates, and expert tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-trust-blue"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;