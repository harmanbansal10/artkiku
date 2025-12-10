import logo from "../assets/kiku-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="North Maple Digital" className="h-7 w-auto" />
          </div>
          <p className="mt-4 text-sm text-gray-600 max-w-md">
            We build high-performance websites and growth campaigns for Canadian businesses from our home in Kitchener.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#work" className="hover:text-gray-900">Case Studies</a></li>
            <li><a href="#blog" className="hover:text-gray-900">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>vancouver, BC</li>
            <li><a href="mailto:hello@northmaple.ca" className="hover:text-gray-900">artbykiku1@gmail.com</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Get a Quote →</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Art By Kiku. All rights reserved.</p>
          <p>Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
