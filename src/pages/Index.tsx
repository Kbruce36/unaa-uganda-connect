import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, Users, Target, BookOpen, Calendar, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const activities = [
    {
      icon: Globe,
      title: "Model UN Conferences",
      description: "Participate in simulated UN sessions to develop diplomacy and negotiation skills.",
    },
    {
      icon: BookOpen,
      title: "SDG Workshops",
      description: "Learn about and advocate for the 17 Sustainable Development Goals.",
    },
    {
      icon: Users,
      title: "Leadership Training",
      description: "Develop essential leadership skills for global citizenship and community impact.",
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Engage with local communities on health, education, and environmental initiatives.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="UNA Uganda Kyambogo Chapter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            United Nations Association
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Kyambogo University Chapter
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Empowering youth through global citizenship, sustainable development, and transformative action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/events">
              <Button size="lg" variant="secondary" className="font-semibold">
                Upcoming Events
              </Button>
            </Link>
            <Link to="/leadership">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-full">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To foster a community of informed and engaged global citizens at Kyambogo University who 
              actively participate in promoting peace, human rights, and sustainable development through 
              the principles and values of the United Nations.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engaging activities designed to develop leadership, promote global awareness, and drive positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                    <activity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <Calendar className="h-12 w-12 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us at Our Next Event
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Be part of the change. Attend our upcoming conferences, workshops, and community outreach programs.
            </p>
            <Link to="/events">
              <Button size="lg" variant="secondary" className="font-semibold">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
