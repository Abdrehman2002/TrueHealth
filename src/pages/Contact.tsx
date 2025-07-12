import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practice: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        practice: "",
        message: ""
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Mon-Fri 8AM-6PM CST"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@truecyclehealth.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Dallas, TX",
      subtitle: "Nationwide Services Available"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday",
      subtitle: "8:00 AM - 6:00 PM CST"
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
              Contact True Cycle Health
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Ready to transform your revenue cycle management? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-trust-blue mb-8">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and one of our RCM specialists will contact you within 24 hours to discuss your needs.
              </p>
              
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-2"
                          placeholder="Dr. John Smith"
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
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="practice">Practice Name</Label>
                        <Input
                          id="practice"
                          name="practice"
                          value={formData.practice}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="Your Practice Name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell us about your practice and how we can help with your revenue cycle management needs..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-trust-blue mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-trust-blue mb-1">
                            {info.title}
                          </h3>
                          <p className="text-lg font-medium">
                            {info.details}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Contact Us */}
              <Card className="bg-trust-light border-accent">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-trust-blue mb-4">
                    Why Contact True Cycle Health?
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Free consultation and practice assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Customized RCM solutions for your practice</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">Expert guidance from RCM specialists</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">No obligation, transparent pricing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-20 bg-section-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-trust-blue mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is available during business hours to help with urgent questions or to schedule a same-day consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567">
              <Button variant="medical" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (555) 123-4567
              </Button>
            </a>
            <a href="mailto:info@truecyclehealth.com">
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Email Us Directly
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;