import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";
import eventPlaceholder from "@/assets/event-placeholder.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Model United Nations Conference",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium, Kyambogo University",
      description: "Annual MUN conference where students debate global issues and represent different countries.",
      category: "Conference",
      image: eventPlaceholder,
    },
    {
      id: 2,
      title: "SDG Workshop: Climate Action",
      date: "March 22, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Student Center, Room 204",
      description: "Interactive workshop on Sustainable Development Goal 13 and climate change solutions.",
      category: "Workshop",
      image: eventPlaceholder,
    },
    {
      id: 3,
      title: "Youth Leadership Training",
      date: "April 5, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Conference Hall",
      description: "Leadership skills development session for aspiring change-makers and global citizens.",
      category: "Training",
      image: eventPlaceholder,
    },
    {
      id: 4,
      title: "Community Outreach Program",
      date: "April 18, 2025",
      time: "8:00 AM - 2:00 PM",
      location: "Kyambogo Community",
      description: "Engagement with local communities on health, education, and environmental awareness.",
      category: "Outreach",
      image: eventPlaceholder,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Conference":
        return "bg-primary text-primary-foreground";
      case "Workshop":
        return "bg-accent text-accent-foreground";
      case "Training":
        return "bg-secondary text-secondary-foreground";
      case "Outreach":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Upcoming Events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in our journey towards global citizenship and sustainable development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-start text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    {event.location}
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

export default Events;
