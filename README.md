# Hotel App Code Challenge

## Installation

- make sure you have [NodeJs](https://nodejs.org/en/download/) & NPM installed on your computer. check node -v, npm -v
- git clone https://github.com/rehamwael/FE-code-challange-hotel-app.git
- yarn install
- npm run dev

## Requirements and Output

- User select the date range to search hotels
- Display all hotels whose availability dates lies between the search dates.
- Display the total number of nights based on selected date range. (For example if user search from Aug 12, 2020 to Aug 17, 2020 than Total Number of Nights will be 5.)
- Display hotel price based on number of nights. (Price x Number of Nights)

## Dependencies & Technolgy 

- Nextjs version 12.0.4
- Axios 
- TypeScript 
- ReactJS
- Jest for Unit Testing

## Run Test

- yarn test
- test API response if toBeGreaterThan(0)
![Mock](https://res.cloudinary.com/maf/image/upload/v1638090407/unit-testing.png)


### Folder Structure
```
├── src
│   ├── components
│   │   ├── common
│   │   │   └── Layout.tsx
│   │   ├── modules
│   │   │   └── HotelCard.tsx
│   │   └── shared
│   │       ├── Button.tsx
│   │       ├── DatePicker.tsx
│   │       ├── PriceRange.tsx
│   │       └── SearchInput.tsx
│   ├── models
│   │   └── Hotel.ts
│   ├── pages
│   │   ├── 404.tsx
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── services
│   │   └── HotelsService.ts
│   ├── state
│   │   └── HotelInitialState.ts
│   └── utils
│       └── Helpers.ts
├── styles
│   └── global.css
├── tailwind.config.js
├── tests
│   └── api.test.tsx
├── tsconfig.json
└── yarn.lock
```

