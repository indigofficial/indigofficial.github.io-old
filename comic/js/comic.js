const pages = Array.from(document.querySelectorAll(".book .page"));
const book = document.querySelector(".book");
let leftStack = [];
let rightStack = Array.from(pages).reverse(); // [p3,p2,p1,p0]

updatePagesDepth(rightStack);

for (const page of pages) {
  page.addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("flip")) {
      //clicked on left stack page
      const page = leftStack.pop();
      rightStack.push(page);
      page.classList.remove("flip");
      updatePagesDepth(rightStack);
    } else {
      // clicked on right stack page
      const page = rightStack.pop();
      leftStack.push(page);
      page.classList.add("flip");
      updatePagesDepth(leftStack);
    }
  });
}

function updatePagesDepth(stack) {
  // first el = farthest
  for (const [i, page] of stack.entries()) {
    if (stack == leftStack) {
      page.style.transform = `rotateY(-180deg) translateZ(${-i}px)`;
    } else {
      page.style.transform = `rotateY(0) translateZ(${i}px)`;
    }
  }
}
