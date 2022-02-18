This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Specific details about this 'template'

This is by no means official nor is it to be considered a 'best practice' for Next.js or `slash-create`. That said, it works well enough to get you on your way.

*Much of this has been derived from the [vercel template](https://github.com/Snazzah/slash-create-vercel) which follows a similar architecture.*

> When you're ready to start the service, register the interactions url as `/api/interactions`. (Include whatever comes before it in the url, if you have any - domain, port, etc.)

For help with [`slash-create`](https://slash-create.js.org) please join [Snazzah's hangout](https://snaz.in/discord), otherwise please visit [TinkerStorm](https://discord.gg/Bb3JQQG) or [open an issue](https://github.com/RocketDragon/slash-create-nextjs-template) - anything to do with this template specifically.

### Important files

- The base server structure is called from [`/api/interactions`](/pages/api/interactions.js), but is calling the endpoint from [`./util/ServerBase.js`](./util/ServerBase.js) so to remain consistent with the library's infrastructure (and how it handles external imports).
- The commands folder is located **outside** of the pages folder at project root to ensure that it can be imported without the extrenuous need to write out a path to it.
> Note: This is a bit of a hack, but it's a good way to keep the commands folder out of the pages folder. The same was attempted for TypeScript, but the problem was that __this__ TypeScript compiler configuration was not able to include the file in the build process.

**Everything else remains unchanged.**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
