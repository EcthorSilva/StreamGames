import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Meu E-commerce',
  description: 'Loja criada com Next.js + Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body data-bs-theme="dark">{children}</body>
    </html>
  );
}