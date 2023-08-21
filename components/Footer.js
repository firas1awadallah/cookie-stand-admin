export default function Footer({ CookieStands }) {
  return (
    <footer className="p-4 text-center text-white bg-blue-400">
      <p className="text-lg">Total {CookieStands.length} Locations Around the Globe</p>
      <p className="mt-2">&copy; {new Date().getFullYear()} Firas Awadallah</p>
    </footer>
  );
}