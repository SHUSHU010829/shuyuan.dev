import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <PageHead canonicalUrl="https://shuyuan。.dev"/> */}
      <div className="container flex flex-row flex-wrap px-6 py-8 mx-auto 2xl:px-32 lg:px-12 lg:pb-24">
        <div className="mt-4 lg:mt-12">
          <Link href="/" scroll>
            <div className="flex flex-row items-baseline mb-4 text-xl font-extrabold cursor-pointer lg:text-3xl lg:mb-0 lg:flex-col">
              <p className="mr-2">Shuyuan&#39;s</p>
              <p className="text-lg text-[#8a9d80]">Blog</p>
            </div>
          </Link>
          <SocialLinks />
        </div>
        <Footer />
      </div>
    </div>
  );
}
