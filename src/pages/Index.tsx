import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Clock,
  ChevronRight,
  Star,
  Quote,
  Award,
  Target,
  Zap,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedStats from "@/components/AnimatedStats";
import heroImage from "@/assets/hero-medical-team.jpg";
import rcmServicesImage from "@/assets/rcm-services.jpg";
import credentialingImage from "@/assets/credentialing.jpg";
import auditAnalysisImage from "@/assets/audit-analysis.jpg";
import rcmchnage from "@/assets/rcmchange.png";
import rcmchangefinal from "@/assets/rcm-change-final.jpg";
import React from "react";

const Index = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Effortless Integration",
      description: "Seamless integration with your existing practice management systems"
    },
    {
      icon: Users,
      title: "Enhanced Patient Satisfaction",
      description: "Efficient scheduling systems that improve patient experience"
    },
    {
      icon: Clock,
      title: "Quick Updates",
      description: "Real-time updates on claim progress and patient insurance status"
    },
    {
      icon: TrendingUp,
      title: "Streamlined Communication",
      description: "Enhanced communication with insurance providers for faster claims processing"
    },
    {
      icon: DollarSign,
      title: "Persistent Follow-up",
      description: "Continuous follow-up on outstanding claims to ensure payment"
    },
    {
      icon: Shield,
      title: "Proactive Denial Management",
      description: "Strategic denial management to maintain consistent revenue flow"
    }
  ];

  const services = [
    {
      number: "01",
      icon: Users,
      title: "Front Desk & Administrative Support",
      description: "Professional front desk and administrative support tailored to optimize patient intake and enhance satisfaction. We help create strong first impressions and ensure a seamless onboarding experience.",
      keyServices: [
        "Appointment Scheduling",
        "Eligibility & Benefits Verification",
        "Pre-Authorization and Referrals",
        "Patient Communication & Reminders",
        "Medical Record Management",
        "Pre-Appointment Chart Updates"
      ],
      image: rcmchangefinal
    },
    {
      number: "02",
      icon: DollarSign,
      title: "Back-End RCM Solutions",
      description: "Comprehensive back-end revenue cycle management services built to enhance cash flow and minimize claim denials. Our experienced team expertly manages complex billing processes with accuracy.",
      keyServices: [
        "Claims Scrubbing & Submission",
        "Denial Management",
        "A/R Management",
        "Patient Statements & Billing",
        "Payment Posting",
        "EDI & ERA Enrollment"
      ],
      image: rcmchnage
    },
    {
      number: "03",
      icon: Award,
      title: "Credentialing and Payer Enrollments",
      description: "End-to-end credentialing and payer enrollment services to keep your practice compliant and revenue ready. We ensure timely, accurate submissions and stay up to date with evolving payer requirements.",
      keyServices: [
        "Payer Enrollment & Contracting",
        "Re-Credentialing Management",
        "CAQH Profile Setup & Maintenance",
        "Status Updates & Reporting",
        "Contract Review & Negotiation Support",
        "EFT Enrollment"
      ],
      image: credentialingImage
    },
    {
      number: "04",
      icon: Zap,
      title: "Revenue Cycle Audit & Analysis",
      description: "Insight-driven revenue cycle audits that uncover growth opportunities, ensure compliance, and improve financial outcomes. We dig deep into your data to identify gaps and refine workflows.",
      keyServices: [
        "Revenue Cycle KPI Evaluation",
        "Underpayment Recovery Audit",
        "Revenue Loss Detection",
        "Financial Performance Assessment",
        "Root Cause Analysis of Denial Trends",
        "Productivity Metrics Tracking"
      ],
      image: auditAnalysisImage
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Internal Medicine",
      content: "We have been working with True Cycle Health for over 2 years and are incredibly pleased with their services. Their attention to detail and professionalism is outstanding.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "Practice Manager",
      content: "We are incredibly pleased with the exceptional RCM services provided by True Cycle Health. Their comprehensive approach to denial management and billing has been transformational for our operations.",
      rating: 5
    },
    {
      name: "Dr. Jennifer Chen",
      title: "Family Practice",
      content: "True Cycle Health has streamlined our entire revenue cycle process. The team is professional, responsive, and delivers results that have significantly improved our cash flow.",
      rating: 5
    }
  ];

  const stats = [
    {
      number: 98,
      suffix: "%",
      label: "First-Pass Claims Rate",
      icon: <Target className="h-8 w-8 text-white" />
    },
    {
      number: 500,
      suffix: "+",
      label: "Healthcare Providers Served",
      icon: <Users className="h-8 w-8 text-white" />
    },
    {
      number: 15,
      suffix: "%",
      label: "Average Revenue Increase",
      icon: <TrendingUp className="h-8 w-8 text-white" />
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support Available",
      icon: <Clock className="h-8 w-8 text-white" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Streamline Your Revenue Cycle Management with{" "}
              <span className="text-accent">True Cycle Health</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              We provide end-to-end support for medical billing, credentialing, claims handling, and denial resolution, helping healthcare providers improve workflow, recover revenue faster, and reduce billing issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="hero" size="xl" className="text-lg px-8 py-4 transition-all duration-300">
                  Get a Demo Today!
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-trust-blue transition-all duration-300">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results That Speak for Themselves
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our track record demonstrates our commitment to excellence and the tangible impact we deliver to healthcare providers.
            </p>
          </div>
          <AnimatedStats stats={stats} />
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
                Why Trust True Cycle Health For Your Revenue Cycle Management?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  True Cycle Health delivers end-to-end revenue cycle solutions from front office support to back-end billing. Our services include patient scheduling, insurance verification, credentialing, claims processing, and denial management. We help healthcare providers enhance operational efficiency, reduce errors, and secure accurate reimbursements with confidence.
                </p>
                <p>
                  We are a team of experienced professionals dedicated to simplifying your revenue cycle management. With extensive expertise, we are committed to helping healthcare providers enhance efficiency, reduce claim denials, and achieve financial stability.
                </p>
                <p>
                  Our team emphasizes accurate and efficient claim submissions. We manage the entire spectrum of your revenue cycle from credentialing to payments allowing you to focus on delivering quality care while we handle the financial aspects.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="medical" size="lg" className="text-lg transition-all duration-300">
                    Schedule a Consultation Today!
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img 
                src={rcmServicesImage} 
                alt="Medical Billing Services" 
                className="rounded-lg shadow-lg w-full h-auto hover:shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
              Our Revenue Cycle Management Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              True Cycle Health offers a wide range of RCM services tailored to meet the unique needs of healthcare providers. Our expert team ensures your practice is supported every step of the way, boosting revenue, streamlining processes, and minimizing delays.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-6 flex items-center justify-center gap-4 items-center">
                    <div className="w-14 h-14 bg-hero-gradient rounded-lg flex items-center justify-center">
                      {React.createElement(service.icon, { className: 'h-8 w-8 text-white' })}
                    </div>
                    <h3 className="text-3xl font-bold text-trust-blue leading-none self-center align-middle relative top-1">{service.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-trust-blue mb-4">Key Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.keyServices.map((keyService, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-muted-foreground">{keyService}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/services">
                    <Button variant="outline" className="hover:bg-accent hover:text-white hover:scale-105 transition-all duration-300">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto hover:shadow-2xl hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
              Experience Innovative Solutions with True Cycle Health
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:scale-110 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-blue mb-4 group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/quote">
              <Button variant="cta" size="xl" className="text-lg px-8 py-4 transition-all duration-300">
                Get Started with a Demo Today!
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trust-blue mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our healthcare partners say about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:scale-105 group h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-accent mr-3 transition-all duration-300" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-all duration-300" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-trust-blue group-hover:text-accent transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start A Conversation To Discuss Your Next Best Business Move
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to transform your revenue cycle management? Contact us today for a consultation.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="xl" className="text-lg px-8 py-4 bg-white text-trust-blue hover:bg-blue-50 hover:scale-110 hover:shadow-2xl transition-all duration-300">
              Get Started Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
