/*const btn1 = document.querySelector("#blog1");
const btn2 = document.querySelector("#blog2");
const btn3 = document.querySelector("#blog3");
const btn4 = document.querySelector("#blog4");
const btn5 = document.querySelector("#blog5");
const btn6 = document.querySelector("#blog6");
const btn7 = document.querySelector("#blog7");
const btn8 = document.querySelector("#blog8");
const btn9 = document.querySelector("#blog9");
const btn10 = document.querySelector("#blog10");

const btn11 = document.querySelector("#blog11");
const btn12 = document.querySelector("#blog12");
const btn13 = document.querySelector("#blog13");
const btn14 = document.querySelector("#blog14");
const btn15 = document.querySelector("#blog15");
const btn16 = document.querySelector("#blog16");
const btn17 = document.querySelector("#blog17");
const btn18 = document.querySelector("#blog18");
const btn19 = document.querySelector("#blog19");
const btn20 = document.querySelector("#blog20");
const btn21 = document.querySelector("#blog21");
const btn22 = document.querySelector("#blog22");
const btn23 = document.querySelector("#blog23");
const btn24 = document.querySelector("#blog24");
const btn25 = document.querySelector("#blog25");
const btn26 = document.querySelector("#blog26");
const btn27 = document.querySelector("#blog27");
const btn28 = document.querySelector("#blog28");
const btn29 = document.querySelector("#blog29");
const btn30 = document.querySelector("#blog30");*/

const btn31 = document.querySelector("#blog31");
const btn32 = document.querySelector("#blog32");
const btn33 = document.querySelector("#blog33");
const btn34 = document.querySelector("#blog34");
const btn35 = document.querySelector("#blog35");
const btn36 = document.querySelector("#blog36");
const btn37 = document.querySelector("#blog37");
const btn38 = document.querySelector("#blog38");
const btn39 = document.querySelector("#blog39");
const btn40 = document.querySelector("#blog40");

/*btn1.addEventListener("click", () => {
  window.location.href = "blog1.html";
});
btn2.addEventListener("click", () => {
  window.location.href = "blog2.html";
});
btn3.addEventListener("click", () => {
  window.location.href = "blog3.html";
});
btn4.addEventListener("click", () => {
  window.location.href = "blog4.html";
});
btn5.addEventListener("click", () => {
  window.location.href = "blog5.html";
});
btn6.addEventListener("click", () => {
  window.location.href = "blog6.html";
});
btn7.addEventListener("click", () => {
  window.location.href = "blog7.html";
});
btn8.addEventListener("click", () => {
  window.location.href = "blog8.html";
});
btn9.addEventListener("click", () => {
  window.location.href = "blog9.html";
});
btn10.addEventListener("click", () => {
  window.location.href = "blog10.html";
});

btn11.addEventListener("click", () => {
  window.location.href = "blog11.html";
  console.log("i am clicked ")
});
btn12.addEventListener("click", () => {
  window.location.href = "blog12.html";
});
btn13.addEventListener("click", () => {
  window.location.href = "blog13.html";
});
btn14.addEventListener("click", () => {
  window.location.href = "blog14.html";
});
btn15.addEventListener("click", () => {
  window.location.href = "blog15.html";
});
btn16.addEventListener("click", () => {
  window.location.href = "blog16.html";
});
btn17.addEventListener("click", () => {
  window.location.href = "blog17.html";
});
btn18.addEventListener("click", () => {
  window.location.href = "blog18.html";
});
btn19.addEventListener("click", () => {
  window.location.href = "blog19.html";
});
btn20.addEventListener("click", () => {
  window.location.href = "blog20.html";
});

btn21.addEventListener("click", () => {
  window.location.href = "blog21.html";
});
btn22.addEventListener("click", () => {
  window.location.href = "blog22.html";
});
btn23.addEventListener("click", () => {
  window.location.href = "blog23.html";
});
btn24.addEventListener("click", () => {
  window.location.href = "blog24.html";
});
btn25.addEventListener("click", () => {
  window.location.href = "blog25.html";
});
btn26.addEventListener("click", () => {
  window.location.href = "blog26.html";
});
btn27.addEventListener("click", () => {
  window.location.href = "blog27.html";
});
btn28.addEventListener("click", () => {
  window.location.href = "blog28.html";
});
btn29.addEventListener("click", () => {
  window.location.href = "blog29.html";
});
btn30.addEventListener("click", () => {
  window.location.href = "blog30.html";
});*/

btn31.addEventListener("click", () => {
  window.location.href = "blog31.html";
});
btn32.addEventListener("click", () => {
  window.location.href = "blog32.html";
});
btn33.addEventListener("click", () => {
  window.location.href = "blog33.html";
});
btn34.addEventListener("click", () => {
  window.location.href = "blog34.html";
});
btn35.addEventListener("click", () => {
  window.location.href = "blog35.html";
});
btn36.addEventListener("click", () => {
  window.location.href = "blog36.html";
});
btn37.addEventListener("click", () => {
  window.location.href = "blog37.html";
});
btn38.addEventListener("click", () => {
  window.location.href = "blog38.html";
});
btn39.addEventListener("click", () => {
  window.location.href = "blog39.html";
});
btn40.addEventListener("click", () => {
  window.location.href = "blog40.html";
});

// Function to set a cookie with a name, value, and expiration
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to read a cookie by name
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Set a session cookie upon page load
setCookie("session", "user123");

// Read the session cookie
var sessionCookie = getCookie("session");
if (sessionCookie) {
  console.log("Session cookie value:", sessionCookie);
}

// Button click event to set a preference cookie
var setPreferenceButton = document.getElementById("setPreference");
setPreferenceButton.addEventListener("click", function() {
  setCookie("preference", "darkTheme", 30); // Set a preference cookie that lasts 30 days
  console.log("Preference cookie set: darkTheme");
});
