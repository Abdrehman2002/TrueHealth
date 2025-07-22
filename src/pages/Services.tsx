import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ChevronRight,
  Calendar,
  CreditCard,
  FileText,
  TrendingUp,
  Users,
  Shield
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import rcmServicesImage from "@/assets/rcm-services.jpg";
import credentialingImage from "@/assets/credentialing.jpg";
import auditAnalysisImage from "@/assets/audit-analysis.jpg";

const Services = () => {
  const services = [
    {
      id: "front-desk",
      icon: Users,
      title: "Front Desk & Administrative Support",
      description: "Professional front desk and administrative support tailored to optimize patient intake and enhance satisfaction. We help create strong first impressions and ensure a seamless onboarding experience, functioning as a true extension of your practice to maintain smooth, efficient daily operations.",
      image: rcmServicesImage,
      keyServices: [
        "Appointment Scheduling",
        "Eligibility & Benefits Verification",
        "Pre-Authorization and Referrals",
        "Patient Communication & Reminders",
        "Medical Record Management",
        "Pre-Appointment Chart Updates"
      ],
      benefits: [
        "Improved patient satisfaction scores",
        "Reduced no-show rates",
        "Streamlined patient flow",
        "Enhanced staff productivity"
      ]
    },
    {
      id: "back-end-rcm",
      icon: CreditCard,
      title: "Back-End RCM Solutions",
      description: "Comprehensive back-end revenue cycle management services built to enhance cash flow and minimize claim denials. Our experienced team expertly manages complex billing processes with accuracy, enabling your staff to stay focused on delivering quality patient care.",
      image: rcmServicesImage,
      keyServices: [
        "Claims Scrubbing & Submission",
        "Denial Management",
        "A/R Management",
        "Patient Statements & Billing",
        "Payment Posting",
        "EDI & ERA Enrollment"
      ],
      benefits: [
        "Faster claim processing",
        "Reduced denial rates",
        "Improved cash flow",
        "Lower A/R days"
      ]
    },
    {
      id: "credentialing",
      icon: Shield,
      title: "Credentialing and Payer Enrollments",
      description: "End-to-end credentialing and payer enrollment services to keep your practice compliant and revenue ready. We ensure timely, accurate submissions and stay up to date with evolving payer requirements, minimizing costly delays and helping you maintain uninterrupted healthcare services.",
      image: credentialingImage,
      keyServices: [
        "Payer Enrollment & Contracting",
        "Re-Credentialing Management",
        "CAQH Profile Setup & Maintenance",
        "Status Updates & Reporting",
        "Contract Review & Negotiation Support",
        "EFT Enrollment"
      ],
      benefits: [
        "Faster provider enrollment",
        "Reduced credentialing delays",
        "Improved contract terms",
        "Comprehensive compliance management"
      ]
    },
    {
      id: "audit-analysis",
      icon: TrendingUp,
      title: "Revenue Cycle Audit & Analysis",
      description: "Insight-driven revenue cycle audits that uncover growth opportunities, ensure compliance, and improve financial outcomes. We dig deep into your data to identify gaps, refine workflows, and boost reimbursements, empowering your practice to make smarter, results-oriented decisions.",
      image: auditAnalysisImage,
      keyServices: [
        "Revenue Cycle KPI Evaluation",
        "Underpayment Recovery Audit",
        "Revenue Loss Detection",
        "Financial Performance Assessment",
        "Root Cause Analysis of Denial Trends",
        "Productivity Metrics Tracking"
      ],
      benefits: [
        "Identify revenue opportunities",
        "Optimize workflow efficiency",
        "Ensure regulatory compliance",
        "Data-driven decision making"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Calendar,
      title: "Patient Scheduling Optimization",
      description: "Advanced scheduling solutions that reduce no-shows and optimize appointment booking."
    },
    {
      icon: FileText,
      title: "Prior Authorization Management",
      description: "Streamlined prior authorization process to reduce delays and improve patient access to care."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure, efficient payment processing solutions for both in-office and online payments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Comprehensive revenue cycle management solutions designed to optimize your practice's financial performance and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Complete RCM Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From front office operations to back-end billing, our comprehensive suite of services covers every aspect of your revenue cycle.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-accent text-2xl font-extrabold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-trust-blue mb-6">{service.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-trust-blue mb-4">Key Services</h4>
                      <div className="space-y-3">
                        {service.keyServices.map((keyService, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{keyService}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-trust-blue mb-4">Benefits</h4>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <TrendingUp className="h-5 w-5 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button variant="outline" className="hover:bg-accent hover:text-white">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Additional Specialized Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Enhance your practice with our specialized solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-blue mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology for implementing and managing your RCM solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Comprehensive evaluation of your current revenue cycle processes"
              },
              {
                step: "02", 
                title: "Strategy",
                description: "Custom solution design based on your practice's specific needs"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Seamless integration with minimal disruption to your operations"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and improvement of your RCM performance"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trust-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Revenue Cycle?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss which services are right for your practice and how we can help you achieve your financial goals.
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

export default Services;