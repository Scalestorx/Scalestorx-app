export default function Home() {
  return (
    <main style={{ padding: "4rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Bienvenue sur ScalestorX 🚀
      </h1>

      <p style={{ marginTop: "1.5rem", fontSize: "1.25rem", maxWidth: "600px" }}>
        ScalestorX est une plateforme e-commerce nouvelle génération pensée pour
        les créateurs, les marques et les entrepreneurs qui veulent scaler vite
        et proprement.
      </p>

      <section style={{ marginTop: "3rem" }}>
        <h2>✨ Fonctionnalités clés</h2>
        <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
          <li>🛒 Création de boutiques modernes</li>
          <li>📦 Gestion des produits et commandes</li>
          <li>💳 Paiements intégrés</li>
          <li>📊 Analytics & performance</li>
          <li>⚡ Ultra rapide (Next.js + Vercel)</li>
        </ul>
      </section>

      <button
        style={{
          marginTop: "3rem",
          padding: "1rem 2rem",
          fontSize: "1rem",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Découvrir la plateforme
      </button>
    </main>
  );
}
