import "@styles/global.css";

export const metadata = {
  title: "list-builder",
  description: "Opti-In Page template for local business email list buildings",
};

const layout = () => {
  return (
    <html lang="fr">
      <body>
        <div className="main">
          <div className="gradients" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
