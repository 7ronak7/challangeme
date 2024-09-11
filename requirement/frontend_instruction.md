Project Name: challange me.

Project Overview: build a webpage that asks user to push a button and then displays a random challenge for them to complete.

Feature Requirements:

1. User Interface:
   - Create a simple, clean webpage layout
   - Include a prominent button with text like "Get Challenge"
   - Display area for the random challenge

2. Functionality:
   - On button click, fetch a random challenge from a predefined list 
   - Display the fetched challenge in the designated area
   - Ensure the same challenge doesn't appear consecutively

3. Responsiveness:
   - Ensure the webpage is responsive and works well on desktop and mobile devices

4. Accessibility:
   - Implement proper semantic HTML
   - Ensure keyboard navigation is possible
   - Add appropriate ARIA attributes where necessary

5. Error Handling:
   - When there is no challenge in the list, display a message to the user saying do 10 pushups.

Relevant Documentation:

1. Next.js Documentation:
   - Pages: https://nextjs.org/docs/basic-features/pages
   - API Routes: https://nextjs.org/docs/api-routes/introduction
   - CSS Support: https://nextjs.org/docs/basic-features/built-in-css-support

2. React Documentation:
   - Hooks (useState, useEffect): https://reactjs.org/docs/hooks-intro.html
   - Handling Events: https://reactjs.org/docs/handling-events.html

3. Accessibility Guidelines:
   - Web Content Accessibility Guidelines (WCAG): https://www.w3.org/WAI/standards-guidelines/wcag/

Current File Structure:

APP1
├── .next
├── app
│   ├── fonts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── components/ui
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       └── input.tsx
├── lib
│   └── utils.ts
├── node_modules
├── requirement
│   └── frontend_instruction.md
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

#Rules 
- All new code should be added to the /components folder and be named like example-component.tsx unless otherwise specified.
- All new pages should be added to the /pages folder and be named like example-page.tsx unless otherwise specified.



