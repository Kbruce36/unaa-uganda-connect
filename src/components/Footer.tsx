import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
                UN
              </div>
              <div>
                <div className="font-bold text-foreground">UNA Uganda</div>
                <div className="text-xs text-muted-foreground">Kyambogo Chapter</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering youth through global citizenship and sustainable development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Kyambogo University, Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>una.kyambogo@unauganda.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+256 XXX XXXXXX</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="https://www.un.org" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                United Nations
              </a>
              <a href="https://www.undp.org" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                UNDP Uganda
              </a>
              <a href="#" className="block hover:text-primary transition-colors">
                Kyambogo University
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} United Nations Association of Uganda - Kyambogo Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
