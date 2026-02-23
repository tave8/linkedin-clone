function MicroProfileNavbar() {
  return (
    <div className="d-flex flex-column p-4">
      <img src="/logo-linkedin.png" className="mb-3 rounded-circle" width={80} />
      <h4>Nome Utente</h4>
      <h6>Desacrizione Lavoro</h6>
      <p className="text-secondary">Città</p>
    </div>
  );
}

export default MicroProfileNavbar;
