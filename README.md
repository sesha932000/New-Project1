# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Temple Listing – Angular Project Overview
This project is a Temple Listing web application built with Angular 16 and Tailwind CSS for modern UI styling. It is fully responsive and provides a seamless user experience for exploring temples, events, and donation opportunities.

## Temple Exploration

* Users can browse temples with images, descriptions, and locations.

* Interactive Sidebar Navigation: The application features a collapsible, intuitive sidebar for quick access to different temple categories, events, and donation sections.
  
* Real-Time Sidebar Search: A search input in the sidebar allows users to filter temple listings or categories instantly as they type, using RxJS with debounced real-time filtering for smooth UX.
  
 ## Powered by Angular + RxJS:
 
* Debounced input handling using debounceTime, distinctUntilChanged, and switchMap.
  
* Filter logic bound to reactive forms and observables for efficient state updates.

## Temple Details

* Quick actions like Donate Now and View Details are available.
* 
* Pagination to navigate through multiple temple listings.

## Dynamic UI with Angular + RxJS

* Reactive forms for search .

* RxJS observables for:

* Debounced search

* Dynamic filtering of temples

* State management between components using Subjects/BehaviorSubjects.

## Responsive & Modern UI

* Tailwind CSS for fully responsive design.

* Supports mobile-first layouts with breakpoints (xs, sm, md, lg).

* Carousel and grid-based layout for displaying temple cards.

## Other Highlights

* Angular routing for page navigation.

* Reusable components for temple cards, filters, and pagination.

* Scalable structure with a clean folder hierarchy for future enhancements.

##  Figma Design – Missing Downloadable Assets

* The Figma file does not allow downloading certain images, particularly those used in the carousel and temple card templates.

* Additionally, the location text intended to appear below the images is not part of the downloadable layers.

* Because the text is embedded within the image and cannot be separated, we are unable to download the full design asset without the location label.

As a result:

* Layout overlap occurs on small and medium screens due to overlaping the location text.

* This will be fixed once proper exportable assets or updated Figma access is provided.


