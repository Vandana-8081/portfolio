import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section
      className="container"
      style={{
        minHeight: "70vh",
        display: "grid",
        placeContent: "center",
        textAlign: "center",
        gap: "1rem",
        paddingTop: "96px",
      }}
    >
      <p style={{ fontFamily: "var(--font-mono)", color: "var(--server)" }}>404 Not Found</p>
      <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>This page doesn't exist.</h1>
      <p style={{ color: "var(--muted)" }}>The link may be old or mistyped.</p>
      <div>
        <Link href="/" className="btn btn-primary">
          Go to homepage
        </Link>
      </div>
    </section>
  );
}
