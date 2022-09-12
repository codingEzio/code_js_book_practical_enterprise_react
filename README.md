
### Preface

- Cloned the template from [Practical Enterprise React - Chapter 4](https://github.com/webmasterdevlin/practical-enterprise-react/tree/master/chapter-4/starter-boilerplate)

### Structure

- `/src/`
  - `app/`
    - `index.tsx`: The whole layout including imported *pages*
    - `routes.tsx`: Routes for pages
    - dir `components/`
      - `navigation-bar.tsx`: Copied from official example for us to tweak
    - dir `views/`
      - dir `pages/`
        - `About.tsx`: Base for *about* page
        - `Home.tsx`: Base for *home* page
        - `/NotFound.tsx`: A page for nonexisting routes be forwarded to
      - dir `dashboard/`
        - `dashboard-default-content.tsx`: Default content for *`/dashboard`*
        - `settings-and-privacy.tsx`: Content for sidebar navigation *`settings-and-privacy`*
    - dir `layouts/`
      - `dashboard-layout/dashboard.tsx`: Left side container for passing down *props* (data and HTML)
      - `dashboard-layout/dashboard-sidebar-navigation.tsx`: Sidebar navigation items like *`settings-and-privacy`*, *`logout`*

### License

This project is licensed under the MIT license, Copyright (c) 2019 Can Sahin.
For more information see `LICENSE.md`.
