import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-xl hover:shadow-2xl transition-all bg-primary hover:bg-primary/90 text-primary-foreground"
      aria-label="Change language"
    >
      <div className="flex flex-col items-center gap-0.5">
        <Globe className="w-5 h-5" />
        <span className="text-[10px] font-bold leading-none">
          {language === 'es' ? 'EN' : 'ES'}
        </span>
      </div>
    </Button>
  );
};

export default LanguageToggle;
