# Testify Alarm reliability

Testify Alarm is an in-app practice alarm. It cannot disable, dismiss, or replace the native iOS or Android Clock.

- Installed iPhone PWA: notifications require user permission and a supported iOS version. Background push may arrive, but exact audio, long playback, and delivery after force-close are not guaranteed.
- Installed Android PWA: notifications are generally stronger, but battery optimization, browser permissions, and force-stop can delay or prevent delivery.
- Desktop browser: notification delivery depends on the browser and operating system being allowed to run in the background.
- Foreground/open: the in-app alarm screen, sound ramp, vibration where supported, and practice gate are most reliable.
- Background/force-closed: treat all delivery as best-effort. Keep a native backup alarm for important wake-ups.

The emergency dismiss remains available through a deliberate hold and confirmation. Accessibility settings may shorten or bypass the hold. Safety is not conditioned on completing questions.

Offline downloaded sets may satisfy the gate and sync later. Service workers must never cache authenticated API responses or private user history in a shared cache.
