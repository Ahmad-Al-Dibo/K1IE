const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} BedrijfNaam. Alle rechten voorbehouden.</p>
    </footer>
  );
};

export default Footer;
