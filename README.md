# Next.js Metamorphosis (React Summit 2023)

[🎥 **Watch Talk**](https://youtu.be/ima0r8CmkGE?t=3251)

This was the source for my talk about React Summit 2023. In the talk, I show how to incrementally adopt to new App Router, and some of the benefits of using the new router versus the previous Pages Router approach.

This includes:

- Simplified data fetching
  1. `getInitialProps` (Pages Router)
  1. `getStaticProps` / `getServerSideProps` (Pages Router)
  1. `async` / `await` (App Router)
- Colocating data fetching with components (React Server Components)
- Defining layouts through the file system (`layout.tsx`)
- Granular control over data freshness (`revalidate` for components)
- Out-of-order streaming of data (Suspense for SSR)
- Simplified form submissions (Server Actions)

## `NEXT_DATA` vs RSC Payload

The data fetching methods in the Pages Router, like `getServerSideProps`, forward `props` to the default exported React component. This `NEXT_DATA` payload also includes rendering instructions.

Inside the App Router, there is no longer `NEXT_DATA`. Instead, the React Server Components payload includes the already rendered result, meaning no additional rendering work needs to be done on the client. This also means that the rendering instructions remain on the server, and just need to be "slotted" into the right place.

You'll also notice that in the App Router, the baseline client-side JavaScript of Next.js + React is smaller than the Pages Router.
