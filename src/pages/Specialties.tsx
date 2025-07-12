import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby, 
  Activity,
  ChevronRight,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Specialties = () => {
  const specialties = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive RCM solutions for cardiology practices, including complex procedures, diagnostic testing, and cardiac interventions.",
      keyServices: [
        "Cardiac catheterization billing",
        "Echocardiogram coding",
        "Stress test management",
        "Device implantation billing"
      ]
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Specialized billing for neurological practices covering consultations, diagnostic procedures, and ongoing treatment management.",
      keyServices: [
        "EEG and EMG billing",
        "Neuropsychological testing",
        "Injection procedures",
        "Chronic care management"
      ]
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Expert revenue cycle management for eye care practices, including routine exams, surgical procedures, and specialized treatments.",
      keyServices: [
        "Cataract surgery billing",
        "Retinal procedure coding",
        "Vision therapy billing",
        "Optical product sales"
      ]
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Comprehensive billing solutions for orthopedic practices covering surgical procedures, physical therapy, and injury treatment.",
      keyServices: [
        "Joint replacement billing",
        "Arthroscopic procedures",
        "Physical therapy coding",
        "DME billing coordination"
      ]
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized RCM for pediatric practices including well-child visits, immunizations, and pediatric-specific procedures.",
      keyServices: [
        "Well-child visit billing",
        "Immunization tracking",
        "Growth assessment coding",
        "Behavioral health billing"
      ]
    },
    {
      icon: Activity,
      title: "Internal Medicine",
      description: "Complete revenue cycle support for internal medicine practices including preventive care, chronic disease management, and consultations.",
      keyServices: [
        "Annual wellness visits",
        "Chronic care management",
        "Consultation billing",
        "Preventive care coding"
      ]
    }
  ];

  const additionalSpecialties = [
    "Dermatology",
    "Gastroenterology", 
    "Endocrinology",
    "Pulmonology",
    "Rheumatology",
    "Psychiatry",
    "Urology",
    "ENT (Otolaryngology)",
    "Pain Management",
    "Oncology",
    "Radiology",
    "Anesthesiology"
  ];

  const benefits = [
    "Specialty-specific coding expertise",
    "Understanding of unique billing requirements",
    "Regulatory compliance for each specialty",
    "Optimized reimbursement strategies",
    "Reduced claim denials",
    "Improved cash flow"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Specialties
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Expert revenue cycle management tailored to the unique needs of healthcare specialties
            </p>
          </div>
        </div>
      </section>

      {/* Main Specialties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Specialized Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand that each medical specialty has unique billing requirements, coding complexities, and regulatory considerations. Our expertise spans across various specialties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <specialty.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-blue mb-4 text-center">
                    {specialty.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                    {specialty.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-trust-blue mb-3">Key Services:</h4>
                    <ul className="space-y-2">
                      {specialty.keyServices.map((service, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Specialties */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Additional Specialties We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Our expertise extends to many more medical specialties
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSpecialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium text-trust-blue">{specialty}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Don't see your specialty listed? We work with practices across all medical specialties.
            </p>
            <Link to="/contact">
              <Button variant="medical" size="lg">
                Contact Us About Your Specialty
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-trust-blue mb-6">
                Why Specialty-Focused RCM Matters
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Each medical specialty has unique billing requirements, coding complexities, and payer relationships. Our specialty-focused approach ensures that your practice receives expert revenue cycle management tailored to your specific needs.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">99%</h3>
                <p className="text-muted-foreground">Clean Claim Rate</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">15%</h3>
                <p className="text-muted-foreground">Revenue Increase</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">30+</h3>
                <p className="text-muted-foreground">Specialties Served</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">24/7</h3>
                <p className="text-muted-foreground">Support Available</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Our Specialty-Focused Process
            </h2>
            <p className="text-xl text-muted-foreground">
              How we ensure optimal results for your specialty practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Specialty Assessment",
                description: "Comprehensive evaluation of your specialty's unique RCM requirements"
              },
              {
                step: "02", 
                title: "Custom Configuration",
                description: "Tailored setup based on specialty-specific billing and coding needs"
              },
              {
                step: "03",
                title: "Expert Implementation",
                description: "Deployment by specialists familiar with your practice type"
              },
              {
                step: "04",
                title: "Continuous Optimization",
                description: "Ongoing refinement based on specialty benchmarks and best practices"
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
            Ready to Optimize Your Specialty Practice?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our specialty-focused RCM solutions can help your practice achieve optimal financial performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white text-trust-blue hover:bg-blue-50">
                Schedule Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/quote">
              <Button variant="hero" size="lg">
                Get Custom Quote
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

export default Specialties;