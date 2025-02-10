import Image from "next/image"; // If you're using Next.js for Image component
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gray-400">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-gray-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul>
            <li>
              <Link href="/faq" className="hover:text-gray-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-gray-400">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-gray-400">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="/track-order" className="hover:text-gray-400">
                Track Order
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm mb-4">
            Get the latest updates on new products and special offers!
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-2/3 rounded-l-md border-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black p-2 rounded-r-md w-1/3 hover:bg-yellow-400"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Download Our App Section */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
          <p className="text-sm mb-4">
            Get the best shopping experience on the go. Download our app now!
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/path/to/google-play-store-icon.png" // Replace with your actual path to Play Store image
                alt="Google Play Store"
                width={150}
                height={50}
                className="hover:opacity-80"
              />
            </Link>
            <Link
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/path/to/apple-app-store-icon.png" // Replace with your actual path to Apple Store image
                alt="Apple App Store"
                width={150}
                height={50}
                className="hover:opacity-80"
              />
            </Link>
          </div>
        </div>

        {/* QR Code Scanner */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Scan the QR Code</h3>
          <p className="text-sm mb-4">
            Scan the QR code below to download the app instantly.
          </p>
          <div className="flex justify-center">
            <Image
              src={"/assets/images/QRCode.png"} // Your QR code image
              alt="Download QR Code"
              width={200}
              height={200}
              className="hover:opacity-80"
            />
          </div>
        </div>
      </div>

      <div className="text-center py-4 mt-10">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Exclusive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
