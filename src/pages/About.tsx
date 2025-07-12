import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  ChevronRight 
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import rcmServicesImage from "@/assets/rcm-services.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver accurate, detail-oriented revenue cycle management solutions that minimize errors and maximize reimbursements."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Understanding that healthcare is about caring for people, we bring empathy and dedication to every interaction."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in our processes, technology, and customer service to exceed expectations."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work as an extension of your team, building lasting relationships based on trust and mutual success."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously evolve our methods and technology to stay ahead of industry changes and regulations."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We provide clear, detailed reporting and communication, ensuring you always know where your practice stands."
    }
  ];

  const stats = [
    { number: "500+", label: "Healthcare Providers Served" },
    { number: "98%", label: "First-Pass Claim Rate" },
    { number: "15+", label: "Years Combined Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About True Cycle Health
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Dedicated to transforming healthcare revenue cycle management through innovation, expertise, and unwavering commitment to our partners' success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={rcmServicesImage} 
                alt="Our Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-trust-blue mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower healthcare providers by delivering comprehensive, reliable, and innovative revenue cycle management solutions that optimize financial performance while allowing them to focus on what matters most - providing exceptional patient care.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-trust-blue mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted partner for healthcare providers nationwide, setting the standard for excellence in revenue cycle management through continuous innovation, transparency, and measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              Results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-blue mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-trust-blue mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                True Cycle Health was founded on the belief that healthcare providers should be able to focus entirely on patient care without worrying about the complexities of revenue cycle management. We recognized that many practices were struggling with claim denials, billing inefficiencies, and administrative burdens that detracted from their primary mission.
              </p>
              <p>
                Our team of experienced professionals brings together decades of expertise in medical billing, healthcare administration, and technology solutions. We've worked with practices of all sizes, from small family clinics to large multi-specialty groups, understanding the unique challenges each faces.
              </p>
              <p>
                Today, we're proud to serve healthcare providers nationwide, helping them improve their financial performance while maintaining the highest standards of compliance and patient satisfaction. Our commitment to transparency, innovation, and results-driven solutions has made us a trusted partner in the healthcare community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trust-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how True Cycle Health can help transform your revenue cycle management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white text-trust-blue hover:bg-blue-50">
                Contact Us Today
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/quote">
              <Button variant="hero" size="lg">
                Get a Quote
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;