
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { t } from '@/lib/translations';
import LogoLoop, { LogoItem } from './LogoLoop';
import { useTheme } from './ThemeProvider';

// Custom logo component with text fallback
const LogoWithFallback = ({ name, src }: { name: string; src: string }) => {
  const [imageError, setImageError] = React.useState(false);
  const { theme } = useTheme();
  
  if (imageError) {
    return (
      <span 
        className={`font-bold text-lg px-4 py-2 rounded-lg ${
          theme === 'dark' 
            ? 'bg-white/10 text-white/80' 
            : 'bg-black/10 text-black/80'
        }`}
      >
        {name}
      </span>
    );
  }
  
  return (
    <img
      src={src}
      alt={name}
      title={name}
      className={`h-10 w-auto object-contain ${theme === 'dark' ? 'brightness-0 invert opacity-70' : 'opacity-80'}`}
      onError={() => setImageError(true)}
      loading="lazy"
    />
  );
};

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

  // Software logos for the logo loop - using node items for better control
  const softwareLogos: LogoItem[] = [
    {
      node: <LogoWithFallback name="AutoCAD" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Autodesk_Logo.svg/330px-Autodesk_Logo.svg.png" />,
      title: "AutoCAD"
    },
    {
      node: <LogoWithFallback name="PVElite" src="https://hexagon.com/content/dam/hexagon/hexagon-newsite-portfolio/products/pv-elite/hexagon-pv-elite-logo.png" />,
      title: "PVElite"
    },
    {
      node: <LogoWithFallback name="AMETank" src="https://www.technosoft.com/sites/default/files/2022-01/AMETank-Logo.png" />,
      title: "AMETank"
    },
    {
      node: <LogoWithFallback name="Python" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" />,
      title: "Python"
    },
    {
      node: <LogoWithFallback name="JavaScript" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />,
      title: "JavaScript"
    },
    {
      node: <LogoWithFallback name="Excel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png" />,
      title: "Microsoft Excel"
    },
    {
      node: <LogoWithFallback name="Power BI" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/600px-New_Power_BI_Logo.svg.png" />,
      title: "Power BI"
    },
    {
      node: <LogoWithFallback name="ASPEN EDR" src="https://www.aspentech.com/content/dam/aspentech/images/logo/aspentech-logo.png" />,
      title: "ASPEN EDR"
    },
    {
      node: <LogoWithFallback name="HTRI" src="https://www.htri.net/themes/custom/htri/logo.png" />,
      title: "HTRI"
    },
    {
      node: <LogoWithFallback name="Hexagon Tank" src="https://hexagon.com/content/dam/hexagon/hexagon-newsite-portfolio/products/tank/hexagon-tank-logo.png" />,
      title: "Hexagon Tank"
    },
    {
      node: <LogoWithFallback name="OnShape" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Onshape_logo.svg/512px-Onshape_logo.svg.png" />,
      title: "OnShape"
    },
    {
      node: <LogoWithFallback name="BricsCAD" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/BricsCAD_logo.svg/512px-BricsCAD_logo.svg.png" />,
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
