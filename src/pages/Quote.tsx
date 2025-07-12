import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  CheckCircle,
  Send,
  Users,
  DollarSign,
  Clock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Quote = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practice: "",
    specialty: "",
    providers: "",
    currentEMR: "",
    services: [] as string[],
    currentChallenges: "",
    timeline: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    { id: "front-desk", label: "Front Desk & Administrative Support" },
    { id: "back-end-rcm", label: "Back-End RCM Solutions" },
    { id: "credentialing", label: "Credentialing and Payer Enrollments" },
    { id: "audit-analysis", label: "Revenue Cycle Audit & Analysis" },
    { id: "patient-scheduling", label: "Patient Scheduling Optimization" },
    { id: "prior-auth", label: "Prior Authorization Management" },
    { id: "payment-processing", label: "Payment Processing" }
  ];

  const specialties = [
    "Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", 
    "Internal Medicine", "Neurology", "Oncology", "Ophthalmology", 
    "Orthopedics", "Pediatrics", "Psychiatry", "Pulmonology", 
    "Radiology", "Rheumatology", "Urology", "Other"
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Free Consultation",
      description: "No-obligation assessment of your current RCM processes"
    },
    {
      icon: Users,
      title: "Custom Solution",
      description: "Tailored RCM strategy designed specifically for your practice"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, competitive pricing with no hidden fees"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Receive your custom quote within 24 hours"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll send your custom quote within 24 hours.",
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        practice: "",
        specialty: "",
        providers: "",
        currentEMR: "",
        services: [],
        currentChallenges: "",
        timeline: "",
        additionalInfo: ""
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceId]
        : prev.services.filter(s => s !== serviceId)
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get Your Custom Quote
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Tell us about your practice and receive a personalized RCM solution quote within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-trust-blue mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-trust-blue mb-6">
                Request Your Custom Quote
              </h2>
              <p className="text-xl text-muted-foreground">
                Please provide details about your practice so we can create the perfect RCM solution for you
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-semibold text-trust-blue mb-6">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="john@practice.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Practice Information */}
                  <div>
                    <h3 className="text-2xl font-semibold text-trust-blue mb-6">Practice Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="practice">Practice Name *</Label>
                        <Input
                          id="practice"
                          name="practice"
                          value={formData.practice}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="Your Practice Name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="specialty">Primary Specialty *</Label>
                        <Select value={formData.specialty} onValueChange={(value) => setFormData(prev => ({...prev, specialty: value}))}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select your specialty" />
                          </SelectTrigger>
                          <SelectContent>
                            {specialties.map((specialty) => (
                              <SelectItem key={specialty} value={specialty}>
                                {specialty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="providers">Number of Providers *</Label>
                        <Select value={formData.providers} onValueChange={(value) => setFormData(prev => ({...prev, providers: value}))}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select number of providers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Provider</SelectItem>
                            <SelectItem value="2-5">2-5 Providers</SelectItem>
                            <SelectItem value="6-10">6-10 Providers</SelectItem>
                            <SelectItem value="11-20">11-20 Providers</SelectItem>
                            <SelectItem value="20+">20+ Providers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="currentEMR">Current EMR System</Label>
                        <Input
                          id="currentEMR"
                          name="currentEMR"
                          value={formData.currentEMR}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="e.g., Epic, Cerner, Allscripts"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <h3 className="text-2xl font-semibold text-trust-blue mb-6">Services Needed</h3>
                    <p className="text-muted-foreground mb-4">Select all services that interest you:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={service.id}
                            checked={formData.services.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, !!checked)}
                          />
                          <Label htmlFor={service.id} className="text-sm cursor-pointer">
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-2xl font-semibold text-trust-blue mb-6">Additional Information</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="currentChallenges">Current RCM Challenges</Label>
                        <Textarea
                          id="currentChallenges"
                          name="currentChallenges"
                          value={formData.currentChallenges}
                          onChange={handleChange}
                          className="mt-2 min-h-[100px]"
                          placeholder="Describe your current challenges with revenue cycle management..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeline">Implementation Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({...prev, timeline: value}))}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="When would you like to get started?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="1-3-months">Within 1-3 months</SelectItem>
                            <SelectItem value="3-6-months">Within 3-6 months</SelectItem>
                            <SelectItem value="6+-months">6+ months</SelectItem>
                            <SelectItem value="exploring">Just exploring options</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                          className="mt-2 min-h-[100px]"
                          placeholder="Any additional information about your practice or specific requirements..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="xl" 
                      className="text-lg px-12"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting Request..."
                      ) : (
                        <>
                          Get My Custom Quote
                          <Send className="ml-2 h-6 w-6" />
                        </>
                      )}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      We'll review your information and send you a detailed quote within 24 hours
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;