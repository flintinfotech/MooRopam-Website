import { useEffect, useState } from "react";
import './index.css'

const Sidebar = ({
  sections
}: any) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(({ id }: any) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return <div className="fixed sidebar z-[200] min-w-[17ch] h-full left-0 px-2 pl-4">

    <div className="h-fit relative top-1/2 -translate-y-1/2">
      <div>
        {sections.map(({ id, label }: any) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`flex items-center space-x-2 text-left my-2 transition-all duration-300 ${activeSection === id
              ? 'text-[var(--clr-orange-1)] font-bold scale-[1.1] translate-x-2ss'
              : 'text-gray-500 hover:text-[var(--clr-orange-1)]'
              }`}
          >
            <div className={`h-[2px] w-3 transition-all duration-300 ${activeSection === id ? 'bg-[var(--clr-orange-1)] w-12' : 'bg-gray-300'
              }`} />
            <span className="max-w-[12ch]">{label}</span>
          </button>
        ))}
      </div>
    </div>
  </div>
}

export default Sidebar;