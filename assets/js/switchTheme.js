(() => {

    const lamp = document.getElementById("mode");

    const toggleTheme = (state) => {
        if (state === "dark") {
            localStorage.setItem("theme", "light");
            initTheme("light");
        } else if (state === "light") {
            localStorage.setItem("theme", "dark");
            initTheme("dark");
        }
    };

    lamp.addEventListener("click", () => toggleTheme(getThemeState()));

})();
