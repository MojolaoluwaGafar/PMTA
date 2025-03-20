export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full p-6 flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Private Media <br /> Talent Agency.</p>
      <p>All Rights <br /> Reserved.</p>
    </footer>
  );
}
