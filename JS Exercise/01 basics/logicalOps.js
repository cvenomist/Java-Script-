// (&& - AND Operator - Both Side Need To Be True)
// (|| - OR Operator - One Side Need To Be True)

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if ( !isVerified && isLoggedIn && hasPaymentToken ) {
    console.log('Greeting Message To User')
    console.log('Grant Access To Course Purchased')
} else if ( isVerified || isGuest ) {
    console.log('Allow Free PreView')
} else {
    console.log('MESSAGE : Contact To Admin')
}