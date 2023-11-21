const body = document.body;
const showNavbar = document.querySelector(".navbar-show");
const showChannel = document.querySelector(".channel-show");
const closeNavbar = document.querySelector(".navbar-close");
const closeChannel = document.querySelector(".channel-close");
const navbarButton = document.querySelector(".menu-button");
const channelButton = document.querySelector(".channel-button");
const navbarCloseButton = document.querySelector(".navbar-close-button");
const channelCloseButton = document.querySelector(".channel-close-button");
const navbarGroup = document.querySelector(".navbar-group");
const channelGroup = document.querySelector(".channel-travel");

document.addEventListener("DOMContentLoaded", function () {
  const offcanvasBackdrop = document.createElement("div");

  const createBackdrop = () => {
    offcanvasBackdrop.classList.add("offcanvas-backdrop");
    body.appendChild(offcanvasBackdrop);
    offcanvasBackdrop.style.opacity = "1";
  };

  const removeBackdrop = () => {
    const backdrop = document.querySelector(".offcanvas-backdrop");
    if (backdrop) {
      backdrop.remove();
    }
  };

  const navbarToggle = () => {
    if (showNavbar.checked) {
      navbarGroup.style.left = "0";
      navbarButton.style.left = "-100px";
      channelButton.style.right = "-100px";
      navbarCloseButton.style.left = "0";
      // navbarGroup.style.opacity = "1";
      createBackdrop();
      document.body.style.overflow = "hidden";
    } else if (closeNavbar.checked) {
      navbarGroup.style.left = "-100%";
      navbarButton.style.left = "0";
      channelButton.style.right = "0";
      navbarCloseButton.style.left = "-100px";
      // navbarGroup.style.opacity = "0";
      removeBackdrop();
      document.body.style.overflow = "auto";
    } else if (showChannel.checked) {
      navbarButton.style.left = "-100px";
      channelButton.style.right = "-100px";
      channelCloseButton.style.right = "0";
      channelGroup.style.right = "0";
      // channelGroup.style.opacity = "1";
      createBackdrop();
      document.body.style.overflow = "hidden";
    } else if (closeChannel.checked) {
      navbarButton.style.left = "0";
      channelButton.style.right = "0";
      channelCloseButton.style.right = "-100px";
      channelGroup.style.right = "-100%";
      // channelGroup.style.opacity = "0";
      removeBackdrop();
      document.body.style.overflow = "auto";
    }
  };

  offcanvasBackdrop.addEventListener("click", () => {
    closeNavbar.checked = true;
    navbarToggle();

    closeChannel.checked = true;
    navbarToggle();
  });

  navbarToggle();
  // channelToggle();

  document.addEventListener("change", navbarToggle);
});
