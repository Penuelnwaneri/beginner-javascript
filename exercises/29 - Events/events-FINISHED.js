
const butts = document.querySelector(".butts");
const coolButton = document.querySelector(".cool");

function handleClick() {
  console.log("🐛 IT GOT CLICKED!!!");
}

const hooray = () => console.log("HOORAY!");

butts.addEventListener("click", function () {
  console.log("Im an anon!");
});

coolButton.addEventListener("click", hooray);

butts.removeEventListener("click", handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(event) {
  console.log("You clicked a button!");
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener(
  "click",
  function (event) {
    console.log("YOU CLICKED THE WINDOW");
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

// Now in our javascript, grab it and listen to the `mousemove` event.
const photoEl = document.querySelector(".photo");

photoEl.addEventListener("mouseenter",function
} (e) => {
  console.log(e.currentTarget);
  console.log(this);
});

/**If you add the following, you will get an error in the console saying 
>Uncaught ReferenceError: e is not defined

That is because we forgot to pass the event parameter. 

Modify the code as shown below so we are passing the event as a parameter to the anonymous function.

```js
photoEl.addEventListener("mousemove", function(e) ...
```

Now, whenever you move your mouse anywhere over the image, that event is fired millions of times because it is triggered on every movement of the mouse.
**/