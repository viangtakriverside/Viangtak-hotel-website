// =========================================================
// EXPLORE TAK PAGE — filter chips
// Used by explore-tak.html and explore-tak-th.html.
//
// The chips are the round buttons under "Sorted by how far
// you'll go": All places / Walk from the hotel / Under an hour /
// Day trips / Overnight.
//
// How it works:
//   - Every chip is a <button> with a data-filter attribute:
//       data-filter="all", "walk", "hour", "day" or "overnight"
//   - Every group of places is wrapped in an element with a
//     matching data-group attribute:
//       data-group="walk", "hour", "day" or "overnight"
//   - Clicking a chip hides every group whose data-group doesn't
//     match, using the "hidden" attribute. "All places" shows
//     every group again.
//
// If this file fails to load, nothing is ever hidden, so the
// visitor still sees every place. The chips row itself starts
// with the "hidden" attribute in the HTML, and this file is
// what shows it — so without JavaScript there are no buttons
// that do nothing.
//
// Keyboard: the chips are real <button> elements, so Tab
// reaches them and Enter or Space clicks them, with no extra
// code needed.
// =========================================================


// ===== Find the pieces on the page =====

const chipsRow = document.getElementById("et-chips");
const chips = document.querySelectorAll(".et-chip");
const groups = document.querySelectorAll("[data-group]");


// ===== Set everything up =====

// Only run if the chips row is on this page.
if (chipsRow !== null) {

    // Show the chips (they start hidden — see the note at the top).
    chipsRow.hidden = false;

    // Listen for a click on every chip.
    for (let i = 0; i < chips.length; i++) {
        chips[i].addEventListener("click", handleChipClick);
    }
}


// ===== Function definitions =====

// Runs when a chip is clicked.
// "this" is the chip button that was clicked.
function handleChipClick() {
    const chosenFilter = this.getAttribute("data-filter");

    showOnlyGroup(chosenFilter);
    markChipAsPressed(this);
}


// Hides every group that doesn't match the chosen filter.
// chosenFilter is "all", "walk", "hour", "day" or "overnight".
function showOnlyGroup(chosenFilter) {
    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        const groupName = group.getAttribute("data-group");

        if (chosenFilter === "all") {
            // "All places": every group is shown
            group.hidden = false;
        } else if (groupName === chosenFilter) {
            // this is the group that was asked for
            group.hidden = false;
        } else {
            // any other group is hidden
            group.hidden = true;
        }
    }
}


// Switches the clicked chip on and every other chip off.
// aria-pressed="true" tells screen readers which chip is on,
// and explore-tak.css uses the same attribute to colour it dark.
function markChipAsPressed(clickedChip) {
    for (let i = 0; i < chips.length; i++) {
        const chip = chips[i];

        if (chip === clickedChip) {
            chip.setAttribute("aria-pressed", "true");
        } else {
            chip.setAttribute("aria-pressed", "false");
        }
    }
}
