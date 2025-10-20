const Products: React.FC = () => {
  const products = [
    { name: "Voedingsproducten", desc: "Kwalitatieve import van voedingsmiddelen." },
    { name: "Bouwmaterialen", desc: "Export van duurzame bouwproducten." },
    { name: "Machines & Apparatuur", desc: "Industrieel materieel voor export." },
  ];

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Onze Producten</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
