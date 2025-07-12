import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  TrendingUp,
  ChevronRight,
  Briefcase
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and wellness programs"
    },
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities, training programs, and career advancement"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Competitive salaries, performance bonuses, and profit-sharing opportunities"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and generous PTO policies"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Supportive team environment focused on innovation and excellence"
    },
    {
      icon: Briefcase,
      title: "Modern Workplace",
      description: "State-of-the-art technology and tools to help you succeed"
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Medical Billing Specialist",
      department: "Revenue Cycle",
      location: "Dallas, TX / Remote",
      type: "Full-time",
      level: "Mid-level",
      description: "Responsible for processing medical claims, managing denials, and ensuring accurate billing procedures. Experience with EMR systems and medical coding preferred.",
      requirements: [
        "2+ years medical billing experience",
        "Knowledge of CPT and ICD-10 codes",
        "Experience with EMR systems",
        "Strong attention to detail"
      ]
    },
    {
      id: 2,
      title: "Credentialing Coordinator",
      department: "Credentialing",
      location: "Dallas, TX / Remote",
      type: "Full-time",
      level: "Entry-level",
      description: "Manage provider credentialing processes, maintain CAQH profiles, and coordinate with insurance networks. Detail-oriented individual with excellent organizational skills needed.",
      requirements: [
        "1+ years healthcare admin experience",
        "CAQH experience preferred",
        "Strong communication skills",
        "Ability to manage multiple projects"
      ]
    },
    {
      id: 3,
      title: "RCM Account Manager",
      department: "Client Services",
      location: "Dallas, TX",
      type: "Full-time",
      level: "Senior-level",
      description: "Lead client relationships, oversee revenue cycle performance, and ensure client satisfaction. Responsible for strategic planning and team leadership.",
      requirements: [
        "5+ years RCM experience",
        "Client management experience",
        "Strong analytical skills",
        "Leadership experience"
      ]
    },
    {
      id: 4,
      title: "Medical Coding Auditor",
      department: "Quality Assurance",
      location: "Remote",
      type: "Full-time",
      level: "Mid-level",
      description: "Conduct medical coding audits, ensure compliance with regulations, and provide feedback to coding team. CPC or CCS certification required.",
      requirements: [
        "CPC or CCS certification",
        "3+ years coding experience",
        "Audit experience preferred",
        "Knowledge of compliance regulations"
      ]
    },
    {
      id: 5,
      title: "Patient Services Representative",
      department: "Front Office",
      location: "Dallas, TX / Remote",
      type: "Full-time",
      level: "Entry-level",
      description: "Provide excellent patient service, handle appointment scheduling, insurance verification, and patient inquiries. Strong communication skills essential.",
      requirements: [
        "High school diploma required",
        "Customer service experience",
        "Healthcare experience preferred",
        "Strong phone skills"
      ]
    }
  ];

  const departments = [
    { value: "all", label: "All Departments" },
    { value: "Revenue Cycle", label: "Revenue Cycle" },
    { value: "Credentialing", label: "Credentialing" },
    { value: "Client Services", label: "Client Services" },
    { value: "Quality Assurance", label: "Quality Assurance" },
    { value: "Front Office", label: "Front Office" }
  ];

  const filteredJobs = selectedDepartment === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Entry-level":
        return "bg-green-100 text-green-800";
      case "Mid-level":
        return "bg-blue-100 text-blue-800";
      case "Senior-level":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Build your career with True Cycle Health and help transform healthcare revenue cycle management
            </p>
            <Button variant="outline" size="lg" className="bg-white text-trust-blue hover:bg-blue-50">
              View Open Positions
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Why Work With True Cycle Health?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a company that values innovation, growth, and making a real impact in healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-blue mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground">
              Find your next career opportunity with us
            </p>
          </div>

          {/* Department Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {departments.map((dept) => (
                <Button
                  key={dept.value}
                  variant={selectedDepartment === dept.value ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept.value)}
                  className="mb-2"
                >
                  {dept.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-trust-blue">{job.title}</h3>
                        <Badge className={getLevelColor(job.level)}>
                          {job.level}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 mb-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-trust-blue mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:text-right">
                      <Button variant="medical" size="lg">
                        Apply Now
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No openings found for the selected department. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-trust-blue mb-6">
                Our Culture
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At True Cycle Health, we believe that our people are our greatest asset. We foster a culture of collaboration, innovation, and continuous learning where every team member can thrive and make a meaningful impact.
                </p>
                <p>
                  We're committed to creating an inclusive environment where diverse perspectives are valued and everyone has the opportunity to grow their career. Our team members enjoy flexibility, autonomy, and the support they need to succeed.
                </p>
                <p>
                  Join us in our mission to transform healthcare revenue cycle management while building a rewarding career in a company that truly cares about your success and well-being.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">95%</h3>
                <p className="text-muted-foreground">Employee Satisfaction</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">4.8</h3>
                <p className="text-muted-foreground">Glassdoor Rating</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">50+</h3>
                <p className="text-muted-foreground">Team Members</p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-accent mb-2">3</h3>
                <p className="text-muted-foreground">Office Locations</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trust-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Don't see a position that fits? Send us your resume - we're always looking for talented individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-trust-blue hover:bg-blue-50">
              Send Resume
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero" size="lg">
              Contact HR
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;