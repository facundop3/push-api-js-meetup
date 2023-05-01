/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


self.addEventListener("push", function (event) {
  const data = JSON.parse(event.data.text());
  event.waitUntil(registration.showNotification(data.title, {
    body: data.message,
    icon: "/icons/android-chrome-192x192.png"
  }));
});

// STEP [] - The user opens the notification
// https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event
self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(clients.matchAll({
    type: "window",
    includeUncontrolled: true
  }).then(function (clientList) {
    if (clientList.length > 0) {
      let client = clientList[0];
      for (let i = 0; i < clientList.length; i++) {
        if (clientList[i].focused) {
          client = clientList[i];
        }
      }
      console.log("client: ", client);
      client.postMessage({
        action: "navigate",
        url: "/hello"
      });
      return client.focus();
      //   return client.focus();
    }

    return clients.openWindow("/hello");
  }));
});
navigator.serviceWorker.addEventListener("message", event => {
  if (event.data && event.data.action === "navigate") {
    window.location.href = event.data.url;
  }
});
/******/ })()
;