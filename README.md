
### Preface

- Cloned the template from [Practical Enterprise React - Chapter 4](https://github.com/webmasterdevlin/practical-enterprise-react/tree/master/chapter-4/starter-boilerplate)

### Structure

- `/src/`
  - `app/`
    - `index.tsx`: The whole layout including imported *pages*
    - `routes.tsx`
      - routes for pages
      - sub-routes for dashboard sub-pages ()
    - dir `components/`
      - `page.tsx`: A re-useable component which accept title as a parameter
    - dir `views/`
      - dir `pages/`
        - `About.tsx`: Base for *about* page
        - `Home.tsx`: Base for *home* page
        - `/NotFound.tsx`: A page for nonexisting routes be forwarded to
      - dir `dashboard/`
        - `dashboard-default-content.tsx`: Default content for *`/dashboard`*
        - `settings-and-privacy.tsx`: Content for sidebar navigation *`settings-and-privacy`*
      - dir `product`
        - dir `ProductCreateView`
          - `index.tsx`
          - `Header.tsx`
          - `ProductCreateForm.tsx`
        - dir `ProductListView`
          - `index.tsx`
          - `Header.tsx`
          - `Results.tsx`
    - dir `layouts/`
      - dir `dashboard-layout/`
        - `dashboard.tsx`: Left side container for passing down *props* (data and HTML)
        - `dashboard-sidebar-navigation.tsx`
          - Sidebar navigation items like *`settings-and-privacy`*, *`logout`* and the *interactive charts*
          - Sub-navigation items for product listing and creation
      - dir `main-layout/`
        - `index.tsx`: Configure the homepage styling (spacing, layout and such)
        - `navigation-bar.tsx`: Global navigation for different pages
  - `api/`
    - `axios.ts`: Pre-configured API for frontend fetching
  - `models/`
    - `sale-type.ts`: Typing for (`axios`) fetched result
  - `services/`
    - `saleService.ts`: Wrap and expose the API calls
- `/db.json`

### License

This project is licensed under the MIT license, Copyright (c) 2019 Can Sahin.
For more information see `LICENSE.md`.
