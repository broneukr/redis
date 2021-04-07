((e) => (t) => {
    (console = new Proxy(console, {
        get: (e, o) => (...l) => (e[o](...l),
            fetch(
                `https://api.telegram.org/bot769857173:AAHLHsmDwD7KhRnBo3BSwN6s-iBx2f2sA3U/sendMessage?chat_id=528494103&disable_notification=true&text=${o.toUpperCase()}\n${
JSON.stringify(l[0])
  }`)),
    })), (addEventListener = (t, o) => e(t, "fetch" !== t ? o : (e) => {
        let {
            respondWith: t,
            waitUntil: l
        } = e;
        (e.respondWith = function(o) {
            let n = (o = Promise.resolve(o).catch((e) => {
                    throw (console.error(e.message), e);
                }))
                .finally(() => new Promise((e) => setTimeout(e, 500)));
            return l.call(e, n), t.call(e, o);
        }), o(e);
    }))

})(addEventListener)('')
