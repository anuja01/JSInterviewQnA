### 1. Can you explain the difference between ```visibility:hidden``` and ```display:none```?

`visibility:hidden` - takes up the space althouth element is not visible   
`display:none` - doesn't take up the space and element is not visible

### 2. What is HTTP?
Hypertext Transfer Protocol(HTTP) is used to communicate between client and server.   
HTTP works as a request-response protocol between a client and server.

### 3. What are HTTP methods. Explain them
1. GET - request data from a specified resource.   
2. POST - send data to a server to create/update a resource.   
3. PUT - send data to a server to create/update a resource
4. DELETE - deletes the specified resource
5. HEAD - almost identical to GET, but without the response body. (Check if get works, before sending GET to get large data volume)   
6. PATCH
7. OPTIONS

### 3. What does css `clear` property do?   
The `clear` property specifies on which sides of an element floating elements are not allowed to float   
```css
p.clear {
    clear: both;
}
```

### 4. Difference between `null` and `undefined`?  
both indecates the abasnce of the value.    
`null` is an assigned value. It means nothing.   
`undefined` means a variable has been declared but not initialized yet.   
`null` is an `object`. `undefined` is of type `undefined`.   
```javascript
null !== undefined -> true
null == undefined -> true
null === undefined -> false
```

### 5. Explain these terms: cookies, sessions storage, local storage.  
 **Cookies**:   
    good read: https://www.w3schools.com/js/js_cookies.asp
    Cookies let you store user information in web pages. (stored as text files) 
    Cookies were invented to solve the problem "how to remember information about the user" from server perspective:   
    When a user visits a web page, his/her name can be stored in a cookie.   
    Next time the user visits the page, the cookie "remembers" his/her name.   
    Can set cookie expiration time as well. (expire parameter
    Cookies will be automaticalluy)
```javascript
        // how to do cookies in react
        import Cookies from 'universal-cookie';
        const cookies = new Cookies();
        cookies.set('myCat', 'Pacman', { path: '/' });
        console.log(cookies.get('myCat')); // Pacman
```

 **Session storage**:   
    Cleared when browser window closed/ refreshed   
    To store auth token, make sure to use session storage. Not cookies.
    Example of writing to storage   
    `window.sessionStorage.setItem("key", "value");`   
    To retrieve item from storage use   
    `window.sessionStorage.getItem("key");`   
    - for React, `sessionStorage` is available only after component is mounted. Use it inside `componentDidMount()`

 **local storage**:   
    Has no expiration time. `window.localStorage()`.   
    Can use as a cache. (Check in local storage, if no resulst then call API)   
        Local storage with React: https://www.robinwieruch.de/local-storage-react  

### 6. What can you do to improve page performance?
-Reduce number of Network calls.  
-Enable Gzip compression (for HTML, CSS) -  add it as a build configuration     
good read: https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a

-Minify Javascript, CSS, HTML - online tools.  
-use vector graphics (SVG).  
-caching.  
-use CDN.  
-Check with lighthouse.  

### 7.What are CSS preprocessors?
Allowed to write more dynamic css
.LESS -> Preprocessor -> CSS

### 8. Advantages of using css preprocessors?
- increase the reusability
- more organized, reduce redundant code
- adding browser compatibility while compiling with preprocessor (use mixin)
- combile css to one single import

### 9. Features provided by .LESS
 Note: http://lesscss.org/
 How to use: http://lesscss.org/usage/

### 10. Difference between `inline`, `block` and `inline-block`
`inline` - arrange elements horizontally, don't respect margins and paddings.   
`block` - arrange elements vertically, and respect margins and paddings.   
`inline-block` - arrange elements horizontally as `inline`, but respect margins and paddings like `block`.  

