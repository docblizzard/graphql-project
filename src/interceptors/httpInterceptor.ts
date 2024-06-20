// class AuthorizationInterceptor() : HttpInterceptor {
//     private val mutex = Mutex()
  
//     override suspend fun intercept(request: HttpRequest, chain: HttpInterceptorChain): HttpResponse {
//       var token = mutex.withLock {
//         // get current token
//       }
  
//       val response = chain.proceed(request.newBuilder().addHeader("Authorization", "Bearer $token").build())
  
//       return if (response.statusCode == 401) {
//         token = mutex.withLock {
//           // get new token
//         }
//         chain.proceed(request.newBuilder().addHeader("Authorization", "Bearer $token").build())
//       } else {
//         response
//       }
//     }
//   }