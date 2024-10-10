const buttonStyle = (color) => `
  class="p-2 bg-${color}-50 stroke-${color}-500 rounded-full hover:shadow-lg transition-shadow duration-300"
`;
const iconButtonStyle = (color, classes) => `
  class="p-2 stroke-${color}-500 rounded-full hover:shadow-lg transition-shadow duration-300 ${classes}"
`;

const deleteButton = `
<button class="flex items-center gap-2 stroke-red-500 text-red-500 p-2 hover:bg-red-50 hover:text-red-500 transition-colors duration-300">
  ${trashIcon}
  حدف
</button>
`;
const editButton = `
<button class="flex items-center gap-2 stroke-gray-500 text-gray-500 p-2 hover:bg-gray-50 hover:text-gray-500 transition-colors duration-300">
    ${pencilIcon}
    تعديل
</button>
`;

const sendButton = `
<button class="flex items-center gap-2 stroke-gray-500 text-gray-500 p-2 hover:bg-gray-50 hover:text-gray-500 transition-colors duration-300">
  ${sendIcon}
  ارسال
</button>
`;

const printButton = `
<button class="flex items-center gap-2 stroke-gray-500 text-gray-500 p-2 hover:bg-gray-50 hover:text-gray-500 transition-colors duration-300">
  ${printerIcon}
  طباعة
</button>
`;

const optionsDocumentOnClick = (event, id) => {
  event.stopPropagation();

  document.querySelectorAll(".options-menu").forEach((menu) => {
    menu.classList.add("fade-out");
    menu.addEventListener("animationend", () => {
      menu.remove();
    });
  });

  const optionsMenu = document.createElement("div");
  optionsMenu.id = `options-menu-${id}`;
  optionsMenu.className =
    "z-10 absolute top-0 left-0 options-menu bg-white rounded-lg shadow-lg w-24 flex flex-col";
  optionsMenu.innerHTML = createDocumentOptionsMenu(id);

  optionsMenu.style.top = `${event.clientY + window.scrollY + 10}px`;
  optionsMenu.style.left = `${event.clientX + window.scrollX + 10}px`;

  document.body.appendChild(optionsMenu);

  const handleClickOutside = (event) => {
    // Add the fade-out class to trigger the fade-out animation
    optionsMenu.classList.add("fade-out");

    // Define the animation end handler
    const handleAnimationEnd = () => {
      optionsMenu.removeEventListener("animationend", handleAnimationEnd); // Clean up the event listener
      optionsMenu.remove(); // Remove the element from the DOM after the animation completes
    };

    // Attach the animation end listener to ensure it runs after the fade-out animation
    optionsMenu.addEventListener("animationend", handleAnimationEnd);

    document.removeEventListener("click", handleClickOutside);
  };

  document.addEventListener("click", handleClickOutside);
};

const optionsOnClick = (event, id) => {
  event.stopPropagation();

  document.querySelectorAll(".options-menu").forEach((menu) => {
    menu.classList.add("fade-out");
    menu.addEventListener("animationend", () => {
      menu.remove();
    });
  });

  const optionsMenu = document.createElement("div");
  optionsMenu.id = `options-menu-${id}`;
  optionsMenu.className =
    "z-10 absolute top-0 left-0 options-menu bg-white rounded-lg shadow-lg w-24 flex flex-col";
  optionsMenu.innerHTML = createOptionsMenu(id);

  optionsMenu.style.top = `${event.clientY + window.scrollY + 10}px`;
  optionsMenu.style.left = `${event.clientX + window.scrollX + 10}px`;

  document.body.appendChild(optionsMenu);

  const handleClickOutside = (event) => {
    // Add the fade-out class to trigger the fade-out animation
    optionsMenu.classList.add("fade-out");

    // Define the animation end handler
    const handleAnimationEnd = () => {
      optionsMenu.removeEventListener("animationend", handleAnimationEnd); // Clean up the event listener
      optionsMenu.remove(); // Remove the element from the DOM after the animation completes
    };

    // Attach the animation end listener to ensure it runs after the fade-out animation
    optionsMenu.addEventListener("animationend", handleAnimationEnd);

    document.removeEventListener("click", handleClickOutside);
  };

  document.addEventListener("click", handleClickOutside);
};

const createOptionsButton = (id) => {
  return `
    <button ${iconButtonStyle(
      "gray-500"
    )} onclick="optionsOnClick(event, ${id})">
    ${optionsIcon}
    </button>
  `;
};

const createDocumentOptionsButton = (id) => {
  return `
    <button ${iconButtonStyle(
      "gray-500"
    )} onclick="optionsDocumentOnClick(event, ${id})">
    ${optionsIcon}
    </button>
  `;
};

const createOptionsMenu = (id) => `
  ${editButton}
  ${deleteButton}
`;

const createDocumentOptionsMenu = (id) => `
  ${editButton}
  ${sendButton}
  ${printButton}
`;
