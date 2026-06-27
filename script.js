/* ===== Crush Tennis — App Logic ===== */

// ---- Data ----
const HEAD_COACH = {
  name: "Roy Hobbs",
  role: "Founder & Head Coach",
  initials: "RH",
  age: 36,
  from: "🇸🇬 Singapore",
  color: "#2b6cb0",
  photo: "assets/roy-action.jpg",
  focus: "center 18%",
  stats: [
    { big: "ATP", small: "Singles & Doubles Ranked" },
    { big: "No. 1", small: "Current Singapore Rank" },
    { big: "37", small: "Davis Cup Wins (SGP Record)" },
  ],
  bio: [
    "Roy Hobbs is the most decorated tennis player Singapore has ever produced. A former ATP-ranked professional in both singles and doubles, he climbed to the highest world ranking ever achieved by a Singaporean and remains the nation's No. 1 to this day — a reign of more than a decade and counting that has reset what's thought possible for the sport on the island.",
    "Flying the flag in the Davis Cup, Roy racked up 37 career wins for Singapore — an all-time national record — answering for his country on the sport's biggest stages. Now 36, he brings that world-class pedigree courtside, coaching with the same power, precision, and ice-cool composure that carried him through years of pro-tour battles. Today he leads the Island Tennis team alongside his younger brother and fellow Davis Cup representative, Adam Hobbs. Train with Roy and you learn the game from the very best this island has ever sent onto a court.",
  ],
  tags: ["ATP Singles & Doubles", "37 Davis Cup Wins", "Current Singapore No. 1", "Singles Specialist"],
};

const COACHES = [
  {
    name: "Kelsey Stevenson",
    role: "Senior Coach · Doubles Specialist",
    label: "Pro Coach",
    initials: "KS",
    age: 36,
    from: "🇨🇦 Toronto, Canada",
    color: "#c0392b",
    photo: "assets/kelsey-action.jpg?v=5",
    focus: "center 38%",
    stats: [
      { big: "No. 1", small: "Canada Doubles (2024)" },
      { big: "Top 700", small: "ATP Singles Rank" },
      { big: "2022", small: "Winnipeg Challenger Doubles Champion" },
    ],
    bio: [
      "Kelsey Stevenson brings genuine pro-tour pedigree to Island Tennis, straight from the competitive courts of Toronto, Canada. An ATP-ranked player in both singles and doubles, he broke inside the world's top 700 in singles while making an even bigger mark in the doubles arena.",
      "That doubles game hit its peak in 2024, when he held the ranking of Canada's No. 1 doubles professional for a significant stretch of the season — built on the back of the ATP Winnipeg National Bank Challenger doubles title he captured in 2022. The honours run deeper still: in September 2023 he earned a nomination to Team Canada for the Davis Cup, representing his country among the nation's elite. At 36, he channels that experience into a coaching style rooted in smart positioning, sharp net play, and the partnership chemistry that wins doubles matches. Whether you're refining your serve-and-volley or learning to own the net, you're in world-class hands.",
    ],
    tags: ["ATP Singles & Doubles", "Canada No. 1 Doubles (2024)", "Team Canada Davis Cup '23", "Winnipeg Challenger Champion '22", "Doubles Specialist"],
  },
  {
    name: "Adam Hobbs",
    role: "Coach · Singles & Match Play",
    label: "Pro Coach",
    initials: "AH",
    age: 29,
    from: "🇸🇬 Singapore",
    color: "#0d8a8a",
    stats: [
      { big: "ITF", small: "Rated Player" },
      { big: "Davis Cup", small: "Team Singapore" },
      { big: "Singles", small: "& Match-Play Coach" },
    ],
    bio: [
      "Adam Hobbs is a Singaporean talent who has carried the national flag at the sharp end of the competitive game — and tennis runs in the family: he's the younger brother of Island Tennis founder and head coach Roy Hobbs. An ITF-rated player, Adam sharpened his game on the international circuit and answered his country's call in the Davis Cup, representing Singapore against the best the region has to offer.",
      "Now 29, Adam pairs that competitive edge with a coach's eye for the modern game. He knows exactly what it takes to perform under pressure, and brings that intensity to every session — drilling clean technique, smart shot selection, and the mental steel that turns practice reps into match wins. Whether you're stepping up to tournament play or simply want a sharper weekend game, Adam meets you where you are and pushes you higher.",
    ],
    tags: ["ITF Rated", "Davis Cup · Team Singapore", "Singles & Match Play", "Competitive Coaching"],
  },
];

const SHOP_CATEGORIES = ["All", "Apparel", "Equipment", "Training", "Storage"];

const PRODUCTS = [
  // Apparel
  { id: "tee",      name: "Shell Tee",              cat: "Apparel",   price: 32,  color: "#2b6cb0", badge: "New" },
  { id: "polo",     name: "Performance Polo",       cat: "Apparel",   price: 45,  color: "#0d8a8a", badge: "" },
  { id: "hoodie",   name: "Turtle Hoodie",          cat: "Apparel",   price: 58,  color: "#1c2b3a", badge: "Best Seller" },
  { id: "cap",      name: "Crush Court Cap",        cat: "Apparel",   price: 28,  color: "#d9694a", badge: "" },
  { id: "shorts",   name: "Court Shorts",           cat: "Apparel",   price: 38,  color: "#7a52c4", badge: "" },
  { id: "socks",    name: "Grip Socks (3-pack)",    cat: "Apparel",   price: 18,  color: "#1a7a3f", badge: "" },

  // Equipment
  { id: "rqpro",    name: "Crush Pro Racquet",      cat: "Equipment", price: 189, color: "#1c2b3a", badge: "New" },
  { id: "rqlite",   name: "Crush Tour Lite Racquet",cat: "Equipment", price: 159, color: "#2b6cb0", badge: "" },
  { id: "balls",    name: "Tennis Balls (3-can)",   cat: "Equipment", price: 12,  color: "#b6760a", badge: "" },
  { id: "string",   name: "Reel String (200m)",     cat: "Equipment", price: 79,  color: "#c43a6b", badge: "" },
  { id: "grip",     name: "Replacement Grip",       cat: "Equipment", price: 9,   color: "#1a7a3f", badge: "" },
  { id: "overgrip", name: "Overgrip (3-pack)",      cat: "Equipment", price: 11,  color: "#0d8a8a", badge: "" },
  { id: "damp",     name: "Vibration Dampeners (2)",cat: "Equipment", price: 7,   color: "#7a52c4", badge: "" },

  // Training
  { id: "hopper",   name: "Ball Hopper (75)",       cat: "Training",  price: 39,  color: "#2b6cb0", badge: "" },
  { id: "rebound",  name: "Rebound Net",            cat: "Training",  price: 129, color: "#1c2b3a", badge: "Best Seller" },
  { id: "cones",    name: "Target Cones (set of 8)",cat: "Training",  price: 19,  color: "#d9694a", badge: "" },
  { id: "ladder",   name: "Agility Ladder",         cat: "Training",  price: 24,  color: "#0d8a8a", badge: "" },
  { id: "lines",    name: "Throw-Down Lines",       cat: "Training",  price: 22,  color: "#b6760a", badge: "" },
  { id: "reaction", name: "Reaction Ball",          cat: "Training",  price: 14,  color: "#c43a6b", badge: "" },

  // Storage
  { id: "bag6",     name: "Pro Racquet Bag (6)",    cat: "Storage",   price: 89,  color: "#b6760a", badge: "Limited" },
  { id: "backpack", name: "Tour Backpack",          cat: "Storage",   price: 69,  color: "#2b6cb0", badge: "" },
  { id: "crate",    name: "Ball Crate (150)",       cat: "Storage",   price: 34,  color: "#1a7a3f", badge: "" },
  { id: "duffel",   name: "Court Duffel Bag",       cat: "Storage",   price: 54,  color: "#7a52c4", badge: "" },
];

const money = n => "$" + n.toLocaleString();

// ---- Coach spotlight renderer (shared) ----
function spotlightInner(c, label) {
  return `
    <div class="spotlight-photo${c.photo ? " has-photo" : ""}" style="background:linear-gradient(150deg, ${c.color}, #1c2b3a)">
      ${c.photo
        ? `<img class="spotlight-img" src="${c.photo}" alt="${c.name} in action" style="object-position:${c.focus || "center 25%"}">`
        : `<span class="spotlight-initials">${c.initials}</span>`}
      ${c.from ? `<span class="spotlight-flag">${c.from}</span>` : ""}
    </div>
    <div class="spotlight-body">
      <span class="spotlight-tag">${label}</span>
      <h3>${c.name}</h3>
      <p class="coach-role">${c.role} · Age ${c.age}</p>
      <div class="spotlight-stats">
        ${c.stats.map(s => `<div><strong>${s.big}</strong><span>${s.small}</span></div>`).join("")}
      </div>
      ${c.bio.map(p => `<p>${p}</p>`).join("")}
      <div class="coach-tags">${c.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <a href="#book" class="btn btn-sm">Book with ${c.name.split(" ")[0]}</a>
    </div>`;
}

// ---- Render head coach spotlight ----
const spotlight = document.getElementById("coachSpotlight");
if (spotlight) spotlight.innerHTML = spotlightInner(HEAD_COACH, "Head Coach");

// ---- Render supporting coach spotlights (alternating photo side) ----
const coachGrid = document.getElementById("coachGrid");
coachGrid.innerHTML = COACHES.map((c, i) =>
  `<article class="coach-spotlight${i % 2 === 0 ? " reverse" : ""}">${spotlightInner(c, c.label || "Coach")}</article>`
).join("");

// ---- Populate coach dropdown ----
const coachSelect = document.getElementById("bCoach");
const allCoaches = [HEAD_COACH, ...COACHES];
coachSelect.innerHTML = `<option value="">Select…</option>` +
  allCoaches.map(c => `<option>${c.name} — ${c.role.split(/[·&]/).pop().trim()}</option>`).join("") +
  `<option>No preference</option>`;

// ---- Render products (with category tabs) ----
const productGrid = document.getElementById("productGrid");

function renderProducts(cat) {
  const list = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  productGrid.innerHTML = list.map(p => `
    <article class="product-card">
      <div class="product-img" style="background:linear-gradient(150deg, ${p.color}, #1c2b3a)">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <span class="pturtle"></span>
      </div>
      <div class="product-body">
        <span class="product-cat">${p.cat}</span>
        <h3>${p.name}</h3>
        <div class="product-foot">
          <span class="product-price">${money(p.price)}</span>
          <button class="add-btn" data-id="${p.id}">Add</button>
        </div>
      </div>
    </article>
  `).join("");
}

// Shop category tabs
const shopTabs = document.getElementById("shopTabs");
shopTabs.innerHTML = SHOP_CATEGORIES.map((c, i) =>
  `<button type="button" class="shop-tab${i === 0 ? " active" : ""}" data-cat="${c}">${c}</button>`).join("");
shopTabs.addEventListener("click", e => {
  const b = e.target.closest(".shop-tab");
  if (!b) return;
  shopTabs.querySelectorAll(".shop-tab").forEach(t => t.classList.remove("active"));
  b.classList.add("active");
  renderProducts(b.dataset.cat);
});

renderProducts("All");

// ---- Cart ----
let cart = JSON.parse(localStorage.getItem("crushCart") || "{}");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");

function saveCart() { localStorage.setItem("crushCart", JSON.stringify(cart)); }

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); renderCart();
}
function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart(); renderCart();
}

function renderCart() {
  const ids = Object.keys(cart);
  const count = ids.reduce((s, id) => s + cart[id], 0);
  cartCount.textContent = count;

  if (!ids.length) {
    cartItems.innerHTML = `<p class="cart-empty">Your cart is empty.<br/>Time to gear up! 🐢</p>`;
    cartTotal.textContent = "$0";
    return;
  }
  let total = 0;
  cartItems.innerHTML = ids.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    total += p.price * cart[id];
    return `
      <div class="cart-row">
        <div class="ci-img" style="background:linear-gradient(150deg, ${p.color}, #1c2b3a)"><span></span></div>
        <div class="ci-info">
          <h4>${p.name}</h4>
          <span class="ci-price">${money(p.price)}</span>
        </div>
        <div class="ci-qty">
          <button data-id="${id}" data-delta="-1">−</button>
          <strong>${cart[id]}</strong>
          <button data-id="${id}" data-delta="1">+</button>
        </div>
      </div>`;
  }).join("");
  cartTotal.textContent = money(total);
}

// Add-to-cart buttons
productGrid.addEventListener("click", e => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  addToCart(btn.dataset.id);
  btn.textContent = "Added ✓"; btn.classList.add("added");
  setTimeout(() => { btn.textContent = "Add"; btn.classList.remove("added"); }, 1100);
});

// Qty buttons in cart
cartItems.addEventListener("click", e => {
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;
  changeQty(btn.dataset.id, Number(btn.dataset.delta));
});

// Drawer open/close
function openCart() { cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }
document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.getElementById("checkoutBtn").addEventListener("click", () => {
  const ids = Object.keys(cart);
  if (!ids.length) { alert("Your cart is empty — add some Crush gear first! 🐢"); return; }
  alert("Thanks for repping Crush! 🐢🎾\n\nThis is a demo checkout. Hook this up to Stripe or Shopify to take real payments.");
  cart = {}; saveCart(); renderCart(); closeCart();
});

// ---- Booking: 2-hour time blocks starting at 7am ----
const TIME_SLOTS = ["7:00–9:00 AM","9:00–11:00 AM","11:00 AM–1:00 PM","1:00–3:00 PM","3:00–5:00 PM","5:00–7:00 PM"];

const bookForm = document.getElementById("bookForm");
const bookMsg = document.getElementById("bookMsg");
const locInput = document.getElementById("bLocation");
const dateInput = document.getElementById("bDate");
const timeInput = document.getElementById("bTime");
const selDateLabel = document.getElementById("selDateLabel");

// Time slots
const timeSlots = document.getElementById("timeSlots");
timeSlots.innerHTML = TIME_SLOTS.map(t => `<button type="button" class="time-slot" data-time="${t}">${t}</button>`).join("");
timeSlots.addEventListener("click", e => {
  const b = e.target.closest(".time-slot");
  if (!b) return;
  timeSlots.querySelectorAll(".time-slot").forEach(t => t.classList.remove("active"));
  b.classList.add("active");
  timeInput.value = b.dataset.time;
});

// ---- Calendar widget ----
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYNAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const today = new Date(); today.setHours(0,0,0,0);
const calState = { y: today.getFullYear(), m: today.getMonth() };
const calGrid = document.getElementById("calGrid");
const calLabel = document.getElementById("calLabel");
const calPrev = document.getElementById("calPrev");
const calNext = document.getElementById("calNext");
const pad = n => String(n).padStart(2, "0");

function renderCalendar() {
  calLabel.textContent = `${MONTHS[calState.m]} ${calState.y}`;
  // Disable navigating to months before the current month
  const atCurrent = (calState.y === today.getFullYear() && calState.m === today.getMonth());
  calPrev.disabled = atCurrent;

  const first = new Date(calState.y, calState.m, 1).getDay();
  const daysIn = new Date(calState.y, calState.m + 1, 0).getDate();
  let cells = "";
  for (let i = 0; i < first; i++) cells += `<span class="cal-cell empty"></span>`;
  for (let d = 1; d <= daysIn; d++) {
    const date = new Date(calState.y, calState.m, d);
    const iso = `${calState.y}-${pad(calState.m + 1)}-${pad(d)}`;
    const past = date < today;
    const isToday = date.getTime() === today.getTime();
    const selected = dateInput.value === iso;
    cells += `<button type="button" class="cal-cell day${past ? " past" : ""}${isToday ? " today" : ""}${selected ? " selected" : ""}"
      ${past ? "disabled" : ""} data-iso="${iso}" data-d="${d}">${d}</button>`;
  }
  calGrid.innerHTML = cells;
}
calPrev.addEventListener("click", () => { calState.m--; if (calState.m < 0) { calState.m = 11; calState.y--; } renderCalendar(); });
calNext.addEventListener("click", () => { calState.m++; if (calState.m > 11) { calState.m = 0; calState.y++; } renderCalendar(); });
calGrid.addEventListener("click", e => {
  const b = e.target.closest(".cal-cell.day:not(.past)");
  if (!b) return;
  dateInput.value = b.dataset.iso;
  const dt = new Date(b.dataset.iso + "T00:00:00");
  selDateLabel.textContent = `— ${DAYNAMES[dt.getDay()]}, ${MONTHS[dt.getMonth()].slice(0,3)} ${dt.getDate()}`;
  renderCalendar();
});
renderCalendar();

// ---- Booking submit ----
bookForm.addEventListener("submit", e => {
  e.preventDefault();
  // Hidden inputs (date/time) aren't covered by checkValidity; the rest are.
  if (!bookForm.checkValidity()) {
    bookMsg.textContent = "Please fill in your location, name, email, coach, and lesson type.";
    bookMsg.className = "form-msg err";
    bookForm.reportValidity();
    return;
  }
  if (!dateInput.value) { bookMsg.textContent = "Please pick a date on the calendar."; bookMsg.className = "form-msg err"; return; }
  if (!timeInput.value) { bookMsg.textContent = "Please pick a time slot."; bookMsg.className = "form-msg err"; return; }

  const data = Object.fromEntries(new FormData(bookForm).entries());
  const dt = new Date(data.date + "T00:00:00");
  const nice = `${DAYNAMES[dt.getDay()]}, ${MONTHS[dt.getMonth()]} ${dt.getDate()}`;
  bookMsg.innerHTML = `🎾 Thanks, ${data.name.split(" ")[0]}! Your <strong>${data.type.split("—")[0].trim()}</strong> with <strong>${data.coach.split("—")[0].trim()}</strong> at <strong>${data.location}</strong> on <strong>${nice} at ${data.time}</strong> is in. We'll confirm your first lesson by email shortly.`;
  bookMsg.className = "form-msg ok";

  bookForm.reset();
  dateInput.value = ""; timeInput.value = "";
  selDateLabel.textContent = "";
  timeSlots.querySelectorAll(".time-slot").forEach(t => t.classList.remove("active"));
  renderCalendar();
});

// ---- Mobile menu ----
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.addEventListener("click", e => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });

// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Init ----
renderCart();
