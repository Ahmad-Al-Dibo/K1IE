const Services: React.FC = () => {
  const services = [
    { title: "Import & Export", desc: "Wereldwijde handel met betrouwbare partners." },
    { title: "Transport & Logistiek", desc: "Efficiënte levering van goederen op tijd." },
    { title: "Verhuur van voertuigen", desc: "Professionele voertuigen voor elk zakelijk doel." },
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Onze Diensten</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
