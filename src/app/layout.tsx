
import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'My Next.js App',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
