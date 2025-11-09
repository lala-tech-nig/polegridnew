export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-8 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p>📞 +234 800 000 0000</p>
          <p>📧 info@polegrid.com</p>
          <p>📍 Lagos, Nigeria</p>
        </div>
        <div>
          <img src="/images/logo.png" alt="PoleGrid Logo" className="w-40 mx-auto" />
        </div>
        <p className="text-gray-400 text-sm">Designed by <span className="text-green-500">Durafford</span></p>
      </div>
    </footer>
  );
}
