![Simplicité Software](https://platform.simplicite.io/logos/logo250-grey.png)
***

Ajax web frontend demo
======================

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=simplicitesoftware_ajax-demo&metric=alert_status)](https://sonarcloud.io/dashboard?id=simplicitesoftware_ajax-demo)

This project is a **very basic** web front-end demo written in a single HTML page (including jQuery&reg; and Bootstrap&reg;) using the Simplicité&reg; REST services.

The file to use is `index.html`

If you want to use your own Simplicité&reg; instance you just need to adjust the root URL in the `root` variable to point to your instance's base API URL (typically `http[s]://<my host>/[<my context root>]/api`)

Some other very basic examples are provided:

- `xhr-example.html`: simple call to the user data REST service using the standard `XMLHttpRequest` API
- `fetch-example.html`: simple call to the user data REST service using the standard `fetch` API
- `ajaxlib-example.html`: same example as above but using the instance's Ajax library
- `jslib-example.html`: same example as above but using the Simplicité JS client library (CommonJS mode))
- `jslib-esm-example.html`: same example as above but using the Simplicité JS client library (ESM mode)

Authentication method
---------------------

The auth token-based authentication method used in the `index.html` file is the recommended approach:

- First call to the `/api/login` endpoint to obtain an auth token by posting login and password as a basic auth string header.
- Then use the obtained auth token for all subsequent calls to REST services using the custom `X-Simplicite-Authorization` HTTP header with `Bearer <auth token>` as value

License
=======

Copyright 2016-2022 Simplicité Software

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

[](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
