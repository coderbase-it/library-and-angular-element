# @coderbase/star-rating
This is an Example of star-rating library 

Use it at your own risk 


[Stackblitz](https://stackblitz.com/edit/angular-star-rating-library-usage) 


NPM

    npm install --save @coderbase/star-rating

YARN

    yarn add @coderbase/star-rating --save


# Usage


* Add StarRatingModule in your ***.module.ts:
```typeScript
import {StarRatingModule} from '@coderbase/star-rating';

@NgModule({
    ...
    import: [..., StarRatingModule]
})
```

* Usage
```html  
<lib-star-rating  [numberOfStar]="6"></lib-star-rating>
```



#Inspired by :
https://codepen.io/lapstjup/pen/gOWYRpe



