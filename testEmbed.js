!function() {
  const t = document.currentScript;
  if (!t || !t.src)
      return void console.log("Could not find script source URL");
  const c = function(o) {
      return "https://packages.prmcdn.io/locator/0.4.3/" + o
  }
    , r = c("locator-app.js");
  r !== t.src ? window.addEventListener("load", ()=>{
      ["vendor.js", "polyfills.js"].forEach(o=>{
          document.getElementById("locator").insertAdjacentHTML("afterend", `<script src="${c(o)}"><\/script>`)
      }
      ),
      import(r).then(o=>{
          o.get("./App").then(l=>{
              const a = l()
                , e = t.getAttribute("data-config-element")
                , s = e ? document.querySelector(e) : t;
              if (!s)
                  return void console.error('Could not find "' + e + '". Please add a selector to the page');
              const i = t.getAttribute("data-config");
              a.mount(s, i)
          }
          )
      }
      )
  }
  ) : console.log("No locator script found")
}();
