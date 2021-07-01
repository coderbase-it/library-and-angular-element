# Generate library 
ng g library star-rating

# Build library 
ng build star-rating --prod

# Publish library
cd dist/star-rating
npm publish --access public 


# Demo usage of library in Stackblitz
https://stackblitz.com/edit/angular-star-rating-library-usage

# Demo usage of Angular elements
https://stackblitz.com/edit/web-platform-star-rating-wc-elements


# Angular Elements 
ng g application elements

# Take advantage of ngx-build-plus
ng add ngx-build-plus --project elements


# createCustomElement 
const elm = createCustomElement(StarRatingComponent, { injector: this.injector });
customElements.define('star-rating', elm);

# build element
ng build --prod --project elements --output-hashing none --single-bundle

# Publish element
initiate package.json on dist/elements 
concat js files into one 
cat ./dist/elements/{polyfills,main}.js > dist/elements/elements.js
npm publish --access public 

# Retrieve wc deployement file
https://unpkg.com/@coderbase/star-rating.elements@1.0.0/elements.js
