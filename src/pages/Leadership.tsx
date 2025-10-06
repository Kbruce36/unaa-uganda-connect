import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import leadershipBg from "@/assets/leadership-bg.jpg";
import Jo from "@/assets/leader-jo.jpg";
import Samantha from "@/assets/Samantha.jpg";
import Joshua from "@/assets/Joshua.jpg";
import Lillian from "@/assets/Lillian.jpg";
import Ednah from "@/assets/Ednah.jpg";
import Andrew from "@/assets/Andrew.jpg"; 


const Leadership = () => {
  const leaders = [
    {
      id: 1,
      name: "Winena Joanne Jo",
      position: "President",
      bio: "Passionate about empowering youth and fostering leadership for a brighter future.",
      email: "winena.joanne@student.kyu.ac.ug",
      image: Jo,
    },
    {
      id: 2,
      name: "Samantha Kkungu",
      position: "Vice President",
      bio: "Advocates for sustainable development and inspires teamwork to achieve shared goals.",
      email: "samantha.kkungu@student.kyu.ac.ug",
      image: Samantha,
    },
    {
      id: 3,
      name: "Eron Joshua",
      position: "General Secretary",
      bio: "Ensures smooth communication and organization, driving the team’s success.",
      email: "eron.joshua@student.kyu.ac.ug",
      image: Joshua,
    },
    {
      id: 4,
      name: "Lillian Lydia",
      position: "Public Relations",
      bio: "Connects communities and amplifies our message for greater impact.",
      email: "lillian.lydia@student.kyu.ac.ug",
      image: Lillian,
    },
    {
      id: 5,
      name: "Kemigisha Ednah",
      position: "Programs Coordinator",
      bio: "Leads innovative programs focused on SDGs and youth empowerment.",
      email: "kemigisha.ednah@student.kyu.ac.ug",
      image: Ednah,
    },
    {
      id: 6,
      name: "Andrew",
      position: "Faculty Representative",
      bio: "Bridges the gap between faculty and students, fostering collaboration and academic excellence.",
      email: "andrew.faculty@student.kyu.ac.ug",
      image: Andrew, // Add Andrew's image path if available
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="relative h-64 mb-12 overflow-hidden">
          <img
            src={leadershipBg}
            alt="Leadership background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center justify-center">
            <div className="text-center text-primary-foreground px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Leadership Team
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Dedicated students working together to make a global impact
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {leaders.map((leader) => (
              <Card key={leader.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={`${leader.name} - ${leader.position}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-center text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-center font-semibold text-primary">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {leader.bio}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href={`mailto:${leader.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
