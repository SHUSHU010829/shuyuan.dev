import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full mt-8 text-xs lg:mt-24">
      <div className="flex justify-center w-full px-10 border-t-2 border-gray-700">
        <div className="flex flex-col pt-5 text-center">
          <SocialLinks />
          <p className="text-[#666666] pt-5">© 2023 Shuyuan.dev</p>
        </div>
      </div>
    </div>
  );
}
