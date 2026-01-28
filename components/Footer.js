function Footer() {
  return (
    <footer className="site-footer" style={{ textAlign: "center" }}>
      <div
        className="max-w-screen-xl mx-auto"
        style={{ padding: "12px 0", color: "var(--muted)" }}
      >
        © {new Date().getFullYear()} Keshav Badrinath. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
