// ==UserScript==
// @name         Open Canvas calendar event in new tab
// @namespace    https://canvas.eee.uci.edu
// @version      2026-03-15
// @description  Enable Cmd+Click on Canvas calendar event to open in new tab
// @author       https://github.com/anthonyj33
// @match        https://canvas.eee.uci.edu/calendar
// @icon         https://www.google.com/s2/favicons?sz=64&domain=uci.edu
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('click', function (e) {

        if (!(e.metaKey || e.ctrlKey)) return;

        const eventEl = e.target.closest('.fc-event');
        if (!eventEl) return;

        e.preventDefault();
        e.stopPropagation();

        eventEl.dispatchEvent(new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        }));

        // Wait for popover to appear
        setTimeout(() => {
            const link = document.querySelector('.view_event_link');

            if (link && link.href) {
                window.open(link.href, '_blank');
            }
        }, 120);

    }, true);

})();