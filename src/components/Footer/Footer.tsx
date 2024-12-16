import AboutUsSection from "./aboutfooter";
import HelpSection from "./HelpFooter";
import NewsletterSection from "./NewsLetterFooter";
import RecentPostsSection from "./RecentPostFooter";
import SocialIcons from "./SocialIconsFooter";
import UsefulLinksSection from "./UseFulILinkFooter";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white mt-28">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Newsletter Section */}
        <NewsletterSection />
        <div className="border-t border-[#FF9F0D] my-8"></div>

        {/* Main Footer Sections */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-14">
          <div className="w-full lg:w-1/4">
            <AboutUsSection />
          </div>
          <div className="w-full lg:w-1/4">
            <UsefulLinksSection />
          </div>
          <div className="w-full lg:w-1/4">
            <HelpSection />
          </div>
          <div className="w-full lg:w-1/4">
            <RecentPostsSection />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#4F4F4F] py-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm lg:text-base text-center md:text-left">
            Copyright © 2022 by Nazia Siraj. All Rights Reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
