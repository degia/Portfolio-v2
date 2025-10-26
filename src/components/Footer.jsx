import { Youtube } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="mb-6">
      {""}
      <p>
        {""}
        &copy; {new Date().getFullYear()} Nuvista.tech All rights reserved.{" "}
      </p>
      <a
        href="https://www.youtube.com/@PedroTechnologies"
        className="flex space-x-2 justify-center font-small"
      >
        <Youtube className="p-1" /> Source by ; Pedrotech.co
      </a>
    </footer>
  );
};
