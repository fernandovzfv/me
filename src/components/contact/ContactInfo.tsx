
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';
import { t } from '@/lib/translations';

const ContactInfo = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center">
      <h3 className="text-2xl font-bold mb-6">{t('contactInfo', language)}</h3>
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-2">
          <Mail className="h-6 w-6 text-brand-blue" />
          <div>
            <h4 className="font-semibold">{t('email', language)}</h4>
            <a href="mailto:contact@example.com" className="text-foreground/70 hover:text-brand-blue transition-colors">
              fernando.vazquez@telmexmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <MapPin className="h-6 w-6 text-brand-teal" />
          <div>
            <h4 className="font-semibold">{t('location', language)}</h4>
            <p className="text-foreground/70">Atizapan de Z., Edomex, México</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
