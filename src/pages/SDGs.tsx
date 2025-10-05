import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Heart, Droplet, Leaf, GraduationCap, Users, Zap, TrendingUp, Building, Shield, Home, Recycle, Scale, Fish, TreePine, HandshakeIcon, Globe } from "lucide-react";

const SDGs = () => {
  const sdgs = [
    { id: 1, title: "No Poverty", description: "End poverty in all its forms everywhere", icon: Users, color: "bg-red-600" },
    { id: 2, title: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition", icon: Leaf, color: "bg-yellow-600" },
    { id: 3, title: "Good Health and Well-being", description: "Ensure healthy lives and promote well-being for all", icon: Heart, color: "bg-green-600" },
    { id: 4, title: "Quality Education", description: "Ensure inclusive and equitable quality education", icon: GraduationCap, color: "bg-red-700" },
    { id: 5, title: "Gender Equality", description: "Achieve gender equality and empower all women and girls", icon: Target, color: "bg-orange-600" },
    { id: 6, title: "Clean Water and Sanitation", description: "Ensure availability and sustainable management of water", icon: Droplet, color: "bg-cyan-500" },
    { id: 7, title: "Affordable and Clean Energy", description: "Ensure access to affordable, reliable, sustainable energy", icon: Zap, color: "bg-yellow-500" },
    { id: 8, title: "Decent Work and Economic Growth", description: "Promote sustained, inclusive economic growth", icon: TrendingUp, color: "bg-red-800" },
    { id: 9, title: "Industry, Innovation and Infrastructure", description: "Build resilient infrastructure, promote sustainable industrialization", icon: Building, color: "bg-orange-700" },
    { id: 10, title: "Reduced Inequalities", description: "Reduce inequality within and among countries", icon: Scale, color: "bg-pink-600" },
    { id: 11, title: "Sustainable Cities and Communities", description: "Make cities and human settlements inclusive, safe, resilient", icon: Home, color: "bg-orange-500" },
    { id: 12, title: "Responsible Consumption and Production", description: "Ensure sustainable consumption and production patterns", icon: Recycle, color: "bg-yellow-700" },
    { id: 13, title: "Climate Action", description: "Take urgent action to combat climate change", icon: Globe, color: "bg-green-700" },
    { id: 14, title: "Life Below Water", description: "Conserve and sustainably use the oceans, seas and marine resources", icon: Fish, color: "bg-blue-600" },
    { id: 15, title: "Life on Land", description: "Protect, restore and promote sustainable use of terrestrial ecosystems", icon: TreePine, color: "bg-green-800" },
    { id: 16, title: "Peace, Justice and Strong Institutions", description: "Promote peaceful and inclusive societies", icon: Shield, color: "bg-blue-700" },
    { id: 17, title: "Partnerships for the Goals", description: "Strengthen the means of implementation and revitalize global partnerships", icon: HandshakeIcon, color: "bg-blue-800" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sustainable Development Goals
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                The 17 Global Goals for a better world by 2030
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">What are the SDGs?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The Sustainable Development Goals (SDGs), also known as the Global Goals, were adopted by the United Nations in 2015 as a universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The 17 SDGs are integrated—they recognize that action in one area will affect outcomes in others, and that development must balance social, economic and environmental sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* SDG Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">The 17 Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {sdgs.map((sdg) => {
                const Icon = sdg.icon;
                return (
                  <Card key={sdg.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`${sdg.color} p-3 rounded-lg text-white flex-shrink-0`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-semibold text-muted-foreground mb-1">
                            Goal {sdg.id}
                          </div>
                          <CardTitle className="text-lg">{sdg.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {sdg.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
              <p className="text-muted-foreground text-lg mb-8">
                At UNA Uganda Kyambogo Chapter, we're committed to advancing these global goals through education, advocacy, and community action. Together, we can build a sustainable future for all.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SDGs;
