
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { t } from '@/lib/translations';
import LogoLoop, { LogoItem } from './LogoLoop';
import { useTheme } from './ThemeProvider';

const SkillsSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  const technicalSkills = [
    { name: "EPC Projects", level: 90 },
    { name: "Pressure Vessels", level: 95 },
    { name: "Shell & Tube Heat Exchangers", level: 95 },
    { name: "Package Equipment", level: 80 },
    { name: "Mechanical Completion", level: 75 },
    { name: "Piping", level: 60 },
  ];

  const otherSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Project Management",
    "CAD Design",
    "Agile Methodologies",
    "Technical Documentation"
  ];

  const otherSkillsTranslated = language === 'es' ? [
    "Resolución de Problemas",
    "Colaboración en Equipo",
    "Gestión de Proyectos",
    "Manejo de CAD",
    "Metodologías Ágiles",
    "Documentación Técnica"
  ] : otherSkills;

  // Software logos for the logo loop
  const softwareLogos: LogoItem[] = [
    {
      src: "/logos/autodesk.png",
      alt: "AutoCAD",
      title: "AutoCAD"
    },
    {
      src: "/logos/pvelite.png",
      alt: "PVElite",
      title: "PVElite"
    },
    {
      src: "http://ametank.technosoft.com/wp-content/uploads/AMETank-Logo.png",
      alt: "AMETank",
      title: "AMETank"
    },
    {
      src: "/logos/python.png",
      alt: "Python",
      title: "Python"
    },
    {
      src: "/logos/javascript.png",
      alt: "JavaScript",
      title: "JavaScript"
    },
    {
      src: "/logos/excel.png",
      alt: "Microsoft Excel",
      title: "Microsoft Excel"
    },
    {
      src: "/logos/powerbi.png",
      alt: "Power BI",
      title: "Power BI"
    },
    {
      src: "/logos/aspentech.png",
      alt: "ASPEN EDR",
      title: "ASPEN EDR"
    },
    {
      src: "/logos/htri.png",
      alt: "HTRI",
      title: "HTRI"
    },
    {
      src: "/logos/hexagon-tank.png",
      alt: "Hexagon Tank",
      title: "Hexagon Tank"
    },
    {
      src: "/logos/onshape.svg",
      alt: "OnShape",
      title: "OnShape"
    },
    {
      src: "/logos/bricsys.svg",
      alt: "BricsCAD",
      title: "BricsCAD"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6">{t('skillsTitle', language)}</h2>
          <p className="text-lg text-foreground/80">
            {t('skillsDescription', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('technicalSkills', language)}</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-foreground/70">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">{t('otherSkills', language)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherSkillsTranslated.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand-teal h-5 w-5 flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <Separator className="my-8" />

            <h3 className="text-2xl font-bold mb-6">{t('languages', language)}</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{t('english', language)}</span>
                  <span className="text-foreground/70">{t('fluent', language)}</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{t('spanish', language)}</span>
                  <span className="text-foreground/70">{t('native', language)}</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Software & Tools Logo Loop */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {language === 'es' ? 'Software y Herramientas' : 'Software & Tools'}
          </h3>
          <div className="relative">
            <LogoLoop
              logos={softwareLogos}
              speed={60}
              direction="left"
              logoHeight={48}
              gap={64}
              pauseOnHover={true}
              fadeOut={true}
              scaleOnHover={true}
              ariaLabel="Software and tools logos"
              className={theme === 'dark' ? '[--logoloop-fadeColorAuto:hsl(222.2,84%,4.9%)]' : '[--logoloop-fadeColorAuto:hsl(210,40%,98%)]'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
