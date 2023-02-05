- Errors during production 

CreatePostForm would not display error messages as expected and would always redirect me to sign in page.
After changing my form code considerably I finally realised it must be something else causing it. Evenetually saw that when defining my axiosReq interceptor in CurrentUserContext.js, I wrote the post request endpoint as "dj-rest/auth/token/refresh/ instead of dj-rest-auth/token/refresh/ and this then fixed the error affecting my form.