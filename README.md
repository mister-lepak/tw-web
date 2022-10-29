This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## How to update resume file

- Go to [resume-try-wijono.json](out/resume-try-wijono.json) file for latest json file
- Update the information
- Go to `gist.github.com` in `mister-lepak` account and find `resume.json` file
- Copy paste latest resume-try-wijono.json file info into resume.json
- Update the gist file
- To extract the latest JSON resume file go this link [https://registry.jsonresume.org/mister-lepak](https://registry.jsonresume.org/mister-lepak)

## How to commit

- Commit the changes
- Regenerate token (classic) to allow try99 to have access to this repo. [Follow this link for details](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic)
- Push the changes up `git push`

## How to deploy to github pages

- Use this command `yarn deploy`, it will automatically deploy to github pages as well
