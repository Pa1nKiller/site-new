const animItems = document.querySelectorAll("._anim-items");
const animCommentItem = document.querySelectorAll("._anim-comment-item");

function btnComments() {
  if (animCommentItem.length > 0) {
    for (let index = 0; index < animCommentItem.length; index++) {
      const animItem = animCommentItem[index];
      if (document.querySelector(".pComments._active") == null) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove("_active");
      }
    }
  }
}

if (animItems.length > 0) {
  window.addEventListener("scroll", skrollAnim);
  function skrollAnim() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHight / animStart;
      if (animItemHight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hiden")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    skrollAnim();
  }, 300);
}
