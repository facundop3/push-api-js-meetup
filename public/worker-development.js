/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


// STEP [2] - We wait to push event to be fired and show the data in the notification.
self.addEventListener("push", function (event) {
  const data = JSON.parse(event.data.text());
  event.waitUntil(registration.showNotification(data.title, {
    body: data.message,
    icon: "/icons/icon-192x192.png"
  }));
});

// STEP [3] - We handle notificationclick event to be fired and open our web app.
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
      return client.focus();
    }
    return clients.openWindow("/");
  }));
});
/******/ })()
;