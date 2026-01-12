import SymptomPicker from "@/app/components/SymptomPicker";
import { t } from "@/app/state/i18n";

export default function SymptomsPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const lang = searchParams?.lang === "en" ? "en" : "zh";
  return (
    <>
      <h1 className="h1">{t(lang, "symptoms.title")}</h1>
      <p className="p">
        {lang === "en"
          ? "Pick a few feelings/signs. The app will show common related systems and why (education-only)."
          : "你选一些“感受/表现”，系统给出科普里常见相关的脏腑系统，并解释原因。不要把它当成诊断。"}
      </p>
      <SymptomPicker />
    </>
  );
}
