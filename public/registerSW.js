if (navigator.serviceWorker) {
  try {
    if (!window.location.href.includes("localhost")) {
      await navigator.serviceWorker.register("./sw.js");
    }
  } catch (err) {
    console.log("Error Registering SW");
  }
}
