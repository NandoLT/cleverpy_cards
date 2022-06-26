# CLEVERPY POST SYSTEM

## INFO ABOUT TECHNICAL TEST
___
## DEPLOY
You can see app in: 
* https://thankful-tree-00a05e410.1.azurestaticapps.net/
    * ### Acces Data:
        __const dataToAcces = {<br>
            &emsp; email: fernando@cleverpy.com,<br>
            &emsp; password: 12345<br>
        }__

## RUN APP LOCALLY
1. Clone repository:
```
$~ git clone https://github.com/NandoLT/cleverpy_cards.git
```
2. Enter in root directory and install dependencies:
```
$~ npm i
```
3. In the root directory, run the app:
```
$~ npm  start
```

## RUN TESTS
### Run Unit Tests
Run command: 
```
$~ npm run test
```
RESULT:
```
$~ npm run test

 PASS  src/tests/components/CardContainer.test.tsx
  Testing <Card />
    √ <Cards /> must return to <CardContainer /> a collection of posts if the array is filled (144 ms)
    √ <Cards /> must return to <CardContainer /> a message 'No Post availables' if posts collection is empty (9 ms)
    √ if we click in delete button  in <Cards /> we must see a modal advert (136 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        5.363 s
 PASS  src/tests/components/CardContainer.test.tsx
  Testing <Card />
    √ <Cards /> must return to <CardContainer /> a collection of posts if the array is filled (148 ms)
    √ <Cards /> must return to <CardContainer /> a message 'No Post availables' if posts collection is empty (7 ms)
    √ if we click in delete button  in <Cards /> we must see a modal advert (116 ms)

```
### Run e2e Tests
Run command: 
```
$~ npm run cypress:open
```

## IMPROVEMENTS POINTS
 * Infinite Scroll and Lazy Loading or Pagination.
 