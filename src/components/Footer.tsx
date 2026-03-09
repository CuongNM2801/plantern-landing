import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/download"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>

              {/* <li>
                <a
                  href="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
              href="mailto:truongdinhlong4@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              truongdinhlong4@gmail.com
            </a>
              </li>
              <li>
                <a
              href="mailto:plantern.team@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              Plantern team
            </a>
              </li>
            </ul>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61552398890383"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 fill-current">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.26 0-1.65.78-1.65 1.58V12h2.8l-.45 2.89h-2.35v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@plantern_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tiktok"
                className="text-muted-foreground hover:text-primary transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-7 h-7 fill-current">
                  <path d="M41 16.5c-3.1 0-6-1.2-8.2-3.4-2.2-2.2-3.5-5.1-3.5-8.1h-7v24.2c0 3.4-2.8 6.2-6.2 6.2s-6.2-2.8-6.2-6.2 2.8-6.2 6.2-6.2c.6 0 1.2.1 1.7.3v-7.1c-.6-.1-1.2-.2-1.7-.2C9.3 16 4 21.3 4 28s5.3 12 12 12 12-5.3 12-12V15.9c2.5 1.8 5.6 2.8 8.8 2.8v-2.2z" />
                </svg>
              </a>
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Plantern. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
