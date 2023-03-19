<h1>KIT Shopping Cart</h1>
This is a sample project that uses Next.js, TypeScript, Redux-toolkit, Redux-Saga, Redux-persist, Redux-Toastr, axios, and Styled Component.

[DEMO](https://next-redux-saga-shopping-cart.vercel.app)

![image](https://user-images.githubusercontent.com/123214145/226206651-e83f4b31-eae2-4c8e-8a8a-bb0063219eea.png) 
<h2>API</h2>
The application receives a list of products through an AP (https://fakestoreapi.com)

<h2>Shopping Cart</h2>
The shopping cart state is managed using REDUX toolkit with appropriate state layers and actions. The functionality of adding and deleting items in the cart with the ability to change the number of items is implemented. The data validation is performed when adding a product to the cart (for example, checking for an empty value or a negative quantity value). The functionality of displaying the sum of all items in the cart is also implemented.

<h2>Asynchronous Operations</h2>
Saga is used for asynchronous operations in this project.

<h2>Accessibility</h2>
The application is accessible and follows accessibility guidelines.

Additional Features
The state of the basket is saved between user sessions using local storage.
The ability to drag and drop products between the product list and cart using Drag and Drop is implemented.
## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React 
pages
.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
