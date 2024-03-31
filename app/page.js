import Practice from "@/utils/components/practice/heroSection";

import "./page.css";
import SectionPage from "@/utils/components/practice/section";
import Footer from "@/utils/components/practice/footer";

export default function Home() {
  return (
    <div className="main">
      <Practice />
      <SectionPage />
      <Footer/>
    </div>
  );
}
