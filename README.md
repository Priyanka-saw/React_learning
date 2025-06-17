- React_learning(developed by facebook for building user inteface)

- leaning react(javascript library) makes easy to manage and build complex frontend

- props -> properties -> objects -> values : keys



- npm(node package manager)
- npx(node package exutator)

<> (fragment)

- in both of them the convension is to use file name capital and make the function using capital name (best practices)

extenstion use jsx in vite and sometime in react file also

- single page extension (spe) beacause  one page one div 

- components -> files

{username} -> known as the evaluated expression so react doesn't allow to write if, for loop 

- React fiber is an ongoing reimplementation of react's core algorithm
- its goal to increase its suitability for areas like animation gasture and layout

- Reconciliation 
 is the algorithm behind what is popularly understood as the "Virtual DOM"

 - features

 1. pause work and come back to it later

 2. assign priority to different types of work

 3. reuse previously completed work 

 4. abort work if its no longer needed

 - tailwind (A utility -fast css framework that packed with classes)

 - function Card(props) we can pass it directly for distructing like
 
 - function Card({name}) it give smae value as it give first
 - console.log(props.name) 

 - console.log(name) 


- setCounter is the type of function 
where we can callback it  using arrow function or any type


- useCallback is a React Hook that lets you cache a function definition between re-renders.
function lo memoerize karta hai

``` javascript
const cachedFn = useCallback(fn, dependencies)

````
- UseEffect is a react hook that lets you synchronize a component with an external system
page ko reload karta hai jab jab koi activity run hoga tab page reload hoga 
```javascript 

useEffect(setup, dependencies?)

```

- useRef is used for the taking reference of the other value's and manipulate it 


- remember the keys in loops in react

- react-router-dom is a library for handling routing in React applications.