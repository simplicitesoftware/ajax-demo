![Simplicit&eacute; Software](http://www.simplicitesoftware.com/logos/logo250.png)

---

Ajax web frontend demo
======================

This project is a **very basic** web front-end demo written in a single HTML page (including jQuery&reg;) using the Simplicit&eacute;&reg; REST services.

The file to use is `index.html`

If you want to use your own Simplicit&eacute;&reg; instance you just need to adjust the root URL in the `root` variable to point to your instance's base API URL (typically `http[s]://<my host>/[<mycontextroot>]/api`)

Some other very basic examples are provided:

- `basic-xhr-example.html`: simple call to the user data REST service using the standard low-level `XMLHttpRequest`
- `basic-ajaxlib-example.html`: same example as above but using Simplicit&eacute;'s Ajax wrapper library

Authentication method
---------------------

The auth token-based authentication method used in the `index.html` file is the recommended approach:

- First call to the `/api/login` endpoint to obtain an auth token by posting login and password
- Then use the obtained auth token for all subsequent calls to REST services using the custom `X-Simplicite-Authorization` HTTP header with `Bearer <auth token>` as value

Another approach would be to call the REST services providing username and password as a basic auth string. In that case the initial call to the `/api/login` endpoint can be removed and the standard `Authorization` HTTP header or, better, the custom `X-Simplicite-Authorization` HTTP header must be added to each REST service call with `Basic <Base64 encoded username:password>` as value (the `X-Simplicite-Authorization` HTTP header is better as it does not interfere in any way with the browser's default basic auth flow which involves the standard `Authorization` HTTP header).

In this very simple case where the login is only a "technical" login the two approaches are equivalent. In a more complex case where a real user's login and password would be prompted once at first sign in and where next accesses would not require a new sign in, then the auth token approach is definitly the right approach (the auth token obtained at initial sign in can be stored locally, e.g. using `localStrorage` and be reused for next accesses as long as it is not expired or explicitly signed out) 

License
=======

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

[](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
