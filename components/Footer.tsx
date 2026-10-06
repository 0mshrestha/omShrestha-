export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 mt-10 bg-[#0A0A0A]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-2 px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
        <div>
          &copy; {currentYear} Dev.Portfolio. All rights reserved.
        </div>
        <div>
          Built with a Love and a lots of boredom to do any shit.
        </div>
      </div>
    </footer>
  );
}
