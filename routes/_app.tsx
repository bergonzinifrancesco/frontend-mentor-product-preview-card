import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>product-preview-card</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main class="flex flex-col w-full h-full p-4 items-center justify-center">
          <Component />
        </main>
      </body>
    </html>
  );
}
