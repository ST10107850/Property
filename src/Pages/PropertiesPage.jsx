import PropertiesSection from "../Components/PropertiesSection";
import { OtherPagesHero } from "../Components/OtherPagesHero";

export const PropertiesPage = () => {
  return (
    <div>
      <OtherPagesHero title="Properties" subtitle="Properties" />
      <PropertiesSection isHome={false} />
    </div>
  );
};
